import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Student from './Student/Student'

function Students() {
    const formRef = useRef();
    const [students, setStudents] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/students')
            .then(res => setStudents(res.data))
            .catch(err => console.log(err))
    }, [])

    const onFilter = (e) => {
        e.preventDefault();
        const form = formRef.current;
        const query = {
            filter: form["filter"].value,
            input: form["input"].value
        }
        if (query.filter === "") {
            form.reset()
            axios.get('http://localhost:8080/api/v1/students')
                .then(res => setStudents(res.data))
                .catch(err => console.log(err))
        }
        axios.get('http://localhost:8080/api/v1/students?'
            + 'filter=' + query.filter + "&input=" + query.input)
            .then(res => setStudents(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form ref={formRef} onSubmit={onFilter}>
                <label htmlFor="filter">Filter:</label>
                <select name="filter" id="filter">
                    <option value="">N/A</option>
                    <option value="gpa">{"< GPA"}</option>
                    <option value="program">Program</option>
                </select>
                <label htmlFor="input">Input:</label>
                <input name="input" type="text" id="input" />
                <button>Apply Filter</button>
            </form>
            {students.map(stu => <Student key={stu.id} data={stu} />)}
        </div>
    )
}

export default Students