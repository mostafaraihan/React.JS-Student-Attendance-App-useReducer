import { useContext } from "react";
import { StudentCtx } from "../contexts/student";

const StudentForm = () => {

    const {editMode,
            studentName,
            setStudentName,
            submitHandler,
        } = useContext(StudentCtx);

        const changeNameHandler = (e) => {
        setStudentName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    value={studentName}
                    onChange={changeNameHandler}
                />
                <button type="submit">{editMode ? "Update" : "Add"}</button>
            </form>
        </div>
    )
}

export default StudentForm