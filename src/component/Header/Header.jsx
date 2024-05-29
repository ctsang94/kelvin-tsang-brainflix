import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <img className='header__logo' src='src/assets/Logo/BrainFlix-logo.svg'></img>
            <div className='header__mid'>
                <input className='header__input' placeholder='Search'></input>
                <img className='header__img' src='src/assets/Images/Mohan-muruge.jpg'></img>
            </div>    
            <button className='header__btn' >UPLOAD</button>
        </header>
    )
}

export default Header;