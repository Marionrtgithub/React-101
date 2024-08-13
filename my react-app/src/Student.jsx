import proptype from "prop-types"
function Student(props){
    return(
        <div className="Student">
           <p>Name: {props.name}</p>
           <p>Age: {props.age}</p>
           <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
 Student.proptype ={
    name: proptype.string,
    age: proptype.number,
    isStudent: proptype.bool,
 }
Student.defaultprop ={
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student
