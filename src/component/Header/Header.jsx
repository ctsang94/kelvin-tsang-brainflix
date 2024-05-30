import './Header.scss';
import LogoImage from '../../assets/Logo/BrainFlix-logo.svg'
import HeaderImage from "../../assets/Images/Mohan-muruge.jpg"

const Header = () => {
    return (
        <header className="header">
            <img className='header__logo' src={LogoImage}></img>
            <div className='header__mid'>
                <input className='header__input' placeholder='Search'></input>
                <img className='header__img' src={HeaderImage}></img>
            </div>    
            <button className='header__btn' >UPLOAD</button>
        </header>
    )
}

export default Header;