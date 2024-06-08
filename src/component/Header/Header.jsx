import './Header.scss';
import logoImage from '../../assets/Logo/BrainFlix-logo.svg'
import headerImage from "../../assets/Images/Mohan-muruge.jpg"
import iconImage from '../../assets/Icons/upload.svg'

const Header = () => {
    return (
        <header className="header">
            <a href='/'><img className='header__logo' src={logoImage} alt='brainflix-logo'></img></a>
            <div className='header__mid'>
                <input className='header__mid--input' placeholder='Search'></input>
                <img className='header__mid--img' src={headerImage} alt='avatar-image'></img>
            </div>
            <a href='/upload' className='header__btn'>
                <button className='header__btn'>
                    <img className='header__btn--icon' src={iconImage} alt='upload-icon'/>
                    <span className='header__btn--text'>UPLOAD</span>

                </button>
            </a>
            <img className='header__img--tablet' src={headerImage} alt='avatar-image'></img>
        </header>
    )
}

export default Header;
