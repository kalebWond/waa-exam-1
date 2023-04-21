import React, { useContext, useEffect, useState } from 'react'
import { SelectedContext } from '../context/SelectedContext'
import { Link } from 'react-router-dom'
import axios from 'axios'

function SelectedStudents() {
    const { selected, setSelected } = useContext(SelectedContext)
    const [students, setStudents] = useState([])
    useEffect(() => {
        if (selected.length !== 0) {
            selected.map(id => {
                axios.get('http://localhost:8080/api/v1/students/' + id)
                    .then(res => setStudents(prev => [...prev, res.data]))
                    .catch(err => console.log(err))
            })
        }
    }, [])

    const onUnselect = (i) => {
        let ids = [...selected];
        let studs = [...students];
        ids = ids.filter(id => id !== i)
        studs = studs.filter(stud => stud.id !== i)
        setSelected(ids)
        setStudents(studs)
    }


    if (selected.length === 0) {
        return <h1>No students selected. <Link to="/students">Go to students</Link></h1>
    }
    return (
        <div>
            {students.map(stud => (
                <div key={stud.id} className="Content" >
                    <p>{stud.id}</p>
                    <p>{stud.name}</p>
                    <p onClick={() => onUnselect(stud.id)}>Unselect</p>
                </div>
            ))}
        </div>
    )
}

export default SelectedStudents