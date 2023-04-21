import { Route, Routes, Navigate } from "react-router";
import Students from "../../components/Students";
import StudentDetails from "../../components/StudentDetails";
import AddStudent from "../../components/AddStudent/AddStudent";
import SelectedStudents from "../../components/SelectedStudents";



export default function PageRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<Students />} />
            <Route path="students" element={<Students />} />
            <Route path="students/:id" element={<StudentDetails />} />
            <Route path="add-student" element={<AddStudent />} />
            <Route path="selected-students" element={<SelectedStudents />} />
            {/* Put your page routes here...  */}
        </Routes>
    );
}


{/* <Routes>
<Route path="products" element={<Products />}>
    <Route path=":id" element={<ProductDetails />} />
</Route>

<Route path="create-product" element={<NewProductHook />} />
</Routes> */}


