import { useState } from "react";
import "./App.css";
import StudentList from "./components/StudentList";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [students, setStudents] = useState([
    { id: 1, name: "Andi", hadir: false },
    { id: 2, name: "Budi", hadir: false },
    { id: 3, name: "Citra", hadir: false },
    { id: 4, name: "Deni", hadir: false },
    { id: 5, name: "Eka", hadir: false },
  ]);

  const handleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, hadir: true }
          : student
      )
    );
  };

  const totalHadir = students.filter(
    (student) => student.hadir
  ).length;

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="container">
        <h1>📚 Monitoring Kehadiran Mahasiswa</h1>

        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <p className="mode">
          Mode : {darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
        </p>

        <StudentList
          students={students}
          handleAttendance={handleAttendance}
        />

        <h2>
          Jumlah Mahasiswa Hadir : {totalHadir} / {students.length}
        </h2>
      </div>
    </div>
  );
}

export default App;