import { useContext } from "react";
import { StudentCtx } from "../contexts/student";

const AllStudent = () => {
    const {
        editHandler,
        removeHandler,
        makePresent,
        makeAbsent,
        students,
    } = useContext(StudentCtx);
    
    
    return (
        <div>
            <h3>All Students</h3>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        <span>{student.name}</span>
                        <button onClick={() => editHandler(student)}>Edit</button>
                        <button onClick={() => removeHandler(student.id)}>Delete</button>
                        <button onClick={() => makePresent(student)}>Present</button>
                        <button onClick={() => makeAbsent(student)}>Absent</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllStudent;
