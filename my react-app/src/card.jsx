import profileimg from './assets/profile/profile.jpg';
function Card(){
    return(
        <div className="Card">
            <img className='Card-img' src={profileimg} alt='profile p' style={{width: "30%", height: "20%"}}></img>
            <h1 className='Card-title'>Kiprotich Marion</h1>
            <p className='Card-text'>Am a frontend developer currently am working with safaricom house nairobi</p>
        </div>
    );
}
export default Card
