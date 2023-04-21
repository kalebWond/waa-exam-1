import axios from "axios";
import './AddStudent.css';
import { useRef } from "react";
import { useNavigate } from "react-router";

const AddStudent = (props) => {
    const formRef = useRef()
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;
        
        const body = {
            name: form["name"].value,
            gpa: form["gpa"].value
        }
        axios.post('http://localhost:8080/api/v1/students', body)
            .then(() => navigate("/students"))
            .catch(err => console.log(err))
    }

    return (
        <div className="NewProduct">

            <form ref={formRef} onSubmit={onSubmit}>
                <h1>Add a Student</h1>

                <label>Name</label>
                <input type="text"
                    label={'name'}
                    name={'name'}
                />

                <label>GPA</label>
                <input type="text"
                    label={'gpa'}
                    name={'gpa'}
                />
                <button>Add Student </button>
            </form>

        </div>
    );

}

export default AddStudent;