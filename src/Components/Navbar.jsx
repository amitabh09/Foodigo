import img_logo from '../assets/logo.png'
import img_login from '../assets/login.png'

const Navbar = () => {
    return(
        <>
        <div className='navContainer flexRow justifyAround alignCenter'>
            <div className='navContainer1 flexRow justifyCenter alignCenter'>
                <img className='width3' src={img_logo} alt="no image" />
                <select className='drowpdown drowpdownHoverGrey width14 height2 bgGrey ml1'>
                    <option value="option1">Bengaluru</option>
                    <option value="option2">New Delhi</option>
                    <option value="option3">Lucknow</option>
                </select>
            </div>
            <div className='navContainer2 flexRow justifyAround alignCenter'>
                <input className='searchBar width14 height2' type="text" name="" id="" />
                <div className='flexRow alignCenter'><img src={img_login} />Offer</div>
                <div className='flexRow alignCenter'><img src={img_login} />Help</div>
                <div className='flexRow alignCenter'><img src={img_login} />SignIn</div>
                <div className='flexRow alignCenter'><img src={img_login} />Cart</div>
                
            </div>
        </div>
        </>
    );
}

export default Navbar;