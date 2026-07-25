"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import FormBook from "../../../src/component/cms/form";

const books = [
  {
    id: 1,
    title: "Belajar React",
    author: "Rifcky Bayu",
    year: 2026,
  },
  {
    id: 2,
    title: "Belajar Next.js",
    author: "Rifcky Bayu",
    year: 2026,
  },
  {
    id: 3,
    title: "Pemrograman Web",
    author: "IBIK",
    year: 2025,
  },
];

export default function BooksPage() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleAdd = () => setShow(true);

  return (
    <div>

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h1>Daftar Buku</h1>

        <Button variant="success" onClick={handleAdd}>
          Add New Book
        </Button>

      </div>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Tahun</th>
          </tr>
        </thead>

        <tbody>

          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
            </tr>
          ))}

        </tbody>

      </table>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormBook />
        </Modal.Body>

      </Modal>

    </div>
  );
}