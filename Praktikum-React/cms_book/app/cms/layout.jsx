import "bootstrap/dist/css/bootstrap.min.css";
import "./cms.css";
import Sidebar from "../../src/component/components/sidebar";

export default function CMSLayout({ children }) {
  return (
    <div className="d-flex">
      <Sidebar />

      <main className="flex-grow-1 p-4">
        {children}
      </main>
    </div>
  );
}