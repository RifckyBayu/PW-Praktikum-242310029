const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");
const upload = require("../middleware/upload");

router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.post("/", upload.single("coverImage"), bookController.createBook);
router.put("/:id", upload.single("coverImage"), bookController.updateBook);
router.patch("/:id", upload.single("coverImage"), bookController.patchBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;