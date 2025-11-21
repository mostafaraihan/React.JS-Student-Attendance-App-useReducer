import { useContext } from "react";
import { StudentCtx } from "../contexts/student";
import AllStudent from './AllStudent';
import PresentStudent from './PresentStudent';
import AbsentStudent from './AbsentStudent';

const StudentSection = () => {
    const { students, toggleList } = useContext(StudentCtx);

    return (
        <div>
            <div className="list all-students">
                <AllStudent/>
                <PresentStudent students={students} toggleList={toggleList} />
                <AbsentStudent students={students} toggleList={toggleList} />
            </div>
        </div>
    );
};

export default StudentSection;
