const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.User;

// GET ALL USERS
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// GET USER BY ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// CREATE USER
// CREATE USER
exports.createUser = async (req, res) => {
  try {
    const { email, username, password, is_active } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({
        success: false,
        message: "Email, username, dan password wajib diisi",
      });
    }

    const cekUser = await User.findOne({
      where: { email },
    });

    if (cekUser) {
      return res.status(400).json({
        success: false,
        message: "Email sudah digunakan",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      username,
      password: hashedPassword,
      is_active,
    });

    res.status(201).json({
      success: true,
      data: user,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// UPDATE USER
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User tidak ditemukan",
      });
    }

    await user.update(req.body);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// DELETE USER
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User tidak ditemukan",
      });
    }

    await user.destroy();

    res.status(200).json({
      success: true,
      message: "User berhasil dihapus",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({
            where: { email }
        });

        if (!user) {
            return res.status(404).json({
                success:false,
                message:"User tidak ditemukan"
            });
        }

        const match = await bcrypt.compare(password,user.password);

        if(!match){
            return res.status(401).json({
                success:false,
                message:"Password salah"
            });
        }

        const token = jwt.sign(
            {
                id:user.id,
                email:user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1d"
            }
        );

        res.json({
            success:true,
            token
        });

    } catch(err){

        res.status(500).json({
            success:false,
            message:err.message
        });

    }
};