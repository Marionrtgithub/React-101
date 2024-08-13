 import proptype from 'prop-types';
 function UserGreeding(props){
    //condition rendering
   /* if(props.isLoggedIn){
        return <h2 className="welcom-massege">Welcome {props.username}</h2>
    }
    return <h2 className="login-prompt">Plese log in to continue</h2>
 }*/
// use of ternary operator
const welcommassege =  <h2 className='welcome-massege'>Welcome {props.username}</h2>;
const loginpromp =  <h2 className='login-prompt'>Please log in to continue</h2>
    return (props.isLoggedIn? welcommassege :loginpromp );
//proptype
 UserGreeding.proptype={
    isLoggedIn: proptype.bool,
    username: proptype.string,
 }
//defaultprop
 UserGreeding.defaultprops={
    isLoggedIn: false,
    username: "Guest",
 }
}
 export default UserGreeding
