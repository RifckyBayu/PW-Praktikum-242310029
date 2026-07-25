import Sidebar from "./components/sidebar";

export default function CMS({ children }) {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container-fluid p-4">
        {children}
      </div>
    </div>
  );
}