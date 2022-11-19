import axios from "axios";
import './AddStudent.css';

const NewProductHook = (props) => {



    return (
        <div className="NewProduct">

            <form  >
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

export default NewProductHook;