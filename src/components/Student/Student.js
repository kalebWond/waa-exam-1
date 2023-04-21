
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


const Student = ({ data }) => {
    return (
        <Link to={"/students/"+data.id}>
            <div className="Content" >
                <p>{data.id}</p>
                <p>{data.name}</p>
            </div>
        </Link>
    );
}

export default Student;




