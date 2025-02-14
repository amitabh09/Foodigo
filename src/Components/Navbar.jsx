import img_logo from '../assets/logo.png'
import img_login from '../assets/login.png'

const Navbar = () => {
    const imgLoginStyle ={};
    return(
        <>
        <div className='navContainer marginTotal flexRow justifyBetween alignCenter'>
            <div className='navContainer1 flexRow justifyBetween alignCenter'>
                <img className='width3' src={img_logo} alt="no image" />
                <select className='drowpdown drowpdownHoverGrey width14 height2 bgGrey ml1'>
                    <option value="option1">Bengaluru</option>
                    <option value="option2">New Delhi</option>
                    <option value="option3">Lucknow</option>
                </select>
            </div>
            <div className='navContainer2 flexRow justifyBetween alignCenter'>
                <input className='searchBar width14 height2' type="text" name="" id="" placeholder='Search' />
                <div className='flexRow alignCenter'><img style={imgLoginStyle} src={img_login} /><h1 className='fontCursive'>Offer</h1></div>
                <div className='flexRow alignCenter'><img style={imgLoginStyle} src={img_login} /><h1 className='fontCursive'>Help</h1></div>
                <div className='flexRow alignCenter'><img style={imgLoginStyle} src={img_login} /><h1 className='fontCursive'>SignIn</h1></div>
                <div className='flexRow alignCenter'><img style={imgLoginStyle} src={img_login} /><h1 className='fontCursive'>Cart</h1></div>
            </div>
        </div>
        </>
    );
}

export default Navbar;