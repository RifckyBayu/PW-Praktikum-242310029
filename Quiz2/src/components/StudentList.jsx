import StudentItem from "./StudentItem";

function StudentList({ students, handleAttendance }) {
  return (
    <div>
      {students.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          handleAttendance={handleAttendance}
        />
      ))}
    </div>
  );
}

export default StudentList;