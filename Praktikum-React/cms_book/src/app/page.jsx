import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Selamat Datang</h1>
      <p>CMS Book Management</p>

      <Link href="/cms">
        Masuk ke CMS
      </Link>
    </div>
  );
}