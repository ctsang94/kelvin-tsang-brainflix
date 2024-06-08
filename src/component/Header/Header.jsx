import './Header.scss';
import logoImage from '../../assets/Logo/BrainFlix-logo.svg'
import headerImage from "../../assets/Images/Mohan-muruge.jpg"
import iconImage from '../../assets/Icons/upload.svg'

const Header = () => {
    return (
        <header className="header">
            <a href='/'><img className='header__logo' src={logoImage}></img></a>
            <div className='header__mid'>
                <input className='header__input' placeholder='Search'></input>
                <img className='header__img' src={headerImage}></img>
            </div>
            <a href='/upload'><button className='header__btn'><img className='header__btn--icon' src={iconImage}></img>UPLOAD</button></a>
            <img className='header__img--tablet' src={headerImage}></img>
        </header>
    )
}

export default Header;
