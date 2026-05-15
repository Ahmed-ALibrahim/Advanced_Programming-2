function StudentCard({ name, major, gpa }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>التخصص: {major}</p>
      <p>المعدل: {gpa}</p>
      <span className={gpa >= 3.5 ? "badge-success" : "badge-warning"}>
        {gpa >= 3.5 ? "متفوق" : "جيد"}
      </span>
    </div>
  )
}

StudentCard.defaultProps = {
  gpa: 0
}

export default StudentCard