"use client";

import { useState } from "react";

export default function FormBook() {

  const [book, setBook] = useState({
    title: "",
    author: "",
    synopsis: "",
    story: "",
    type: "Free",
    image: null,
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setBook({
      ...book,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(book);

    alert("Book berhasil ditambahkan");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h3 className="mb-4">Add New Book</h3>

      <div className="row">

        <div className="col-md-6 mb-3">
          <label>Book Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Author Name</label>
          <input
            type="text"
            className="form-control"
            name="author"
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Synopsis</label>
          <textarea
            className="form-control"
            name="synopsis"
            rows="3"
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Cover Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleImage}
          />
        </div>

        <div className="col-md-12 mb-3">

          <label>Story</label>

          <textarea
            className="form-control"
            name="story"
            rows="5"
            onChange={handleChange}
          />

        </div>

        <div className="col-md-12 mb-4">

          <label className="me-3">Type Book</label>

          <div className="form-check form-check-inline">

            <input
              className="form-check-input"
              type="radio"
              name="type"
              value="Free"
              checked={book.type === "Free"}
              onChange={handleChange}
            />

            <label className="form-check-label">
              Free
            </label>

          </div>

          <div className="form-check form-check-inline">

            <input
              className="form-check-input"
              type="radio"
              name="type"
              value="Premium"
              checked={book.type === "Premium"}
              onChange={handleChange}
            />

            <label className="form-check-label">
              Premium
            </label>

          </div>

        </div>

      </div>

      <button
        className="btn btn-primary"
        type="submit"
      >
        Submit Book
      </button>
<div className="d-flex justify-content-end gap-2 mt-3">

  <button
    type="button"
    className="btn btn-secondary"
  >
    Cancel
  </button>

  <button
    type="submit"
    className="btn btn-primary"
  >
    Submit Book
  </button>

</div>
    </form>
  );
}