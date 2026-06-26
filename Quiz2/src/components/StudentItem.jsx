function StudentItem({ student, handleAttendance }) {
  return (
    <div className="student-card">
      <div>
        <h3>{student.name}</h3>

        <p>
          Status :
          {student.hadir ? (
            <span className="hadir"> Hadir</span>
          ) : (
            <span className="belum"> Belum Hadir</span>
          )}
        </p>
      </div>

      <button
        onClick={() => handleAttendance(student.id)}
        disabled={student.hadir}
      >
        {student.hadir ? "✓ Hadir" : "Hadir"}
      </button>
    </div>
  );
}

export default StudentItem;