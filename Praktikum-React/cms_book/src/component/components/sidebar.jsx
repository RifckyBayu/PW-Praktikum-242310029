"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{
        width: "250px",
        minHeight: "100vh",
      }}
    >
      <h3 className="mb-4">CMS Books</h3>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" href="/cms">
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" href="/cms/books">
            Books
          </Link>
        </li>

      </ul>
    </div>
  );
}