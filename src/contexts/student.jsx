import { createContext, useState } from "react";

export const StudentCtx = createContext();

const StudentProvider = ({ children }) => {

    const [students, setStudents] = useState([]);
    const [studentName, setStudentName] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [editableStudent, setEditableStudent] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        if (studentName.trim() === "") {
            return alert("Please provide a valid name");
        }

        if (editMode) {
            updateHandler();
        } else {
            createHandler();
        }
    };

    const createHandler = () => {
        const newStudent = {
            id: Date.now().toString(),
            name: studentName,
            present: undefined,
        };
        setStudents([...students, newStudent]);
        setStudentName("");
    };

    const updateHandler = () => {
        const updatedList = students.map((item) =>
            item.id === editableStudent.id ? { ...item, name: studentName } : item
        );
        setStudents(updatedList);
        setEditMode(false);
        setEditableStudent(null);
        setStudentName("");
    };

    const editHandler = (student) => {
        setEditMode(true);
        setEditableStudent(student);
        setStudentName(student.name);
    };

    const removeHandler = (studentId) => {
        const updatedList = students.filter((student) => student.id !== studentId);
        setStudents(updatedList);
    };

    const makePresent = (student) => {
        if (student.present !== undefined) {
            return alert(
                `This student is already in the ${student.present ? "Present" : "Absent"} list.`
            );
        }
        const updatedList = students.map((item) =>
            item.id === student.id ? { ...item, present: true } : item
        );
        setStudents(updatedList);
    };

    const makeAbsent = (student) => {
        if (student.present !== undefined) {
            return alert(
                `This student is already in the ${student.present ? "Present" : "Absent"} list.`
            );
        }
        const updatedList = students.map((item) =>
            item.id === student.id ? { ...item, present: false } : item
        );
        setStudents(updatedList);
    };

    const toggleList = (student) => {
        const updatedList = students.map((item) =>
            item.id === student.id ? { ...item, present: !item.present } : item
        );
        setStudents(updatedList);
    };

    const ctxValue = {
        students,
        setStudents,
        studentName,
        setStudentName,
        editMode,
        setEditMode,
        editableStudent,
        setEditableStudent,
        submitHandler,
        createHandler,
        updateHandler,
        editHandler,
        removeHandler,
        makePresent,
        makeAbsent,
        toggleList,
    };

    return (
        <StudentCtx.Provider value={ctxValue}>
            {children}
        </StudentCtx.Provider>
    );
};

export default StudentProvider;
