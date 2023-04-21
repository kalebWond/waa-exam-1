import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import Course from './Course';
import { Link } from 'react-router-dom';
import { SelectedContext } from '../context/SelectedContext';

function StudentDetails() {
    const [student, setStudent] = useState(null)

    const params = useParams();
    const navigate = useNavigate();
    const { selected, setSelected } = useContext(SelectedContext);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/students/' + params.id)
            .then(res => setStudent(res.data))
            .catch(err => console.log(err))
    }, [])

    const deleteHandler = (id) => {
        axios.delete('http://localhost:8080/api/v1/students/' + id)
            .then(() => navigate("/students", { replace: true }))
            .catch(err => console.log(err))
    }

    const toggleSelected = () => {
        let ids = [...selected]
        if (ids.includes(student.id)) {
            ids = ids.filter(id => id !== student.id);
            setSelected(ids)
        } else {
            setSelected([...ids, student.id])
        }
    }

    if (!student) return (<h1>Loading../</h1>)

    return (
        <div>
            <h1>Student Info</h1>
            <p>Name: {student.name}</p>
            <p>ID: {student.id}</p>
            <p>GPA: {student.gpa}</p>
            {student.courseList
                ? <>
                    Courses
                    {student.courseList.map(course => <Course key={course.id} data={course} />)}
                </>
                : <p>Term status: INACTIVE</p>}

            <button onClick={() => deleteHandler(student.id)}>Delete</button>
            <button onClick={toggleSelected}>
                {selected.includes(student.id) ? "Unselect" : "Select"}
            </button>
            <Link to="/students">Back</Link>
        </div>
    )
}

export default StudentDetails