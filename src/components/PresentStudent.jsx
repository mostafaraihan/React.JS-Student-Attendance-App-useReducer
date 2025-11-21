import { useContext } from "react";
import { StudentCtx } from "../contexts/student";

const PresentStudent = () => {
    const { students, toggleList } = useContext(StudentCtx);

    return (
        <div className="list present-students">
            <h3>Present Students</h3>
            <ul>
                {students.filter(s => s.present === true).map(student => (
                    <li key={student.id}>
                        <span>{student.name}</span>
                        <button onClick={() => toggleList(student)}>✔</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PresentStudent;
