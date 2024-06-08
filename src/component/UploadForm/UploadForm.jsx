import './UploadForm.scss';
import image from '../../assets/Images/Upload-video-preview.jpg'
import iconImage from '../../assets/Icons/publish.svg'
import { useNavigate } from 'react-router-dom';

const UploadForm = () => {

    let navigate = useNavigate()
    const routeChange = () => {
        alert("You've upload the video!")
        navigate('/')
    }

    return (
        <>
            <div className='upload__container'>
                <h1 className='upload__title'>Upload Video</h1>
                <h2 className='upload__thumbnail--title'>VIDEO THUMBNAIL</h2>
                <img className='upload__img' src={image} alt='thumbnail-image'></img>
                <form>
                    <div className='form__top'>
                        <label className='form__top--title'>TITLE YOUR VIDEO</label>
                        <input className='form__top--input' placeholder="Add a title to your video"></input>
                    </div>
                    <div className='form__mid'>
                        <label className='form__mid--description'>ADD A VIDEO DESCRIPTION</label>
                        <input className='form__mid--input' placeholder="Add a description to your video"></input>
                    </div>
                    <div className='form__bot'>
                        <button onClick={routeChange} className='form__bot--publish'><img className='form__bot--icon' src={iconImage} alt='publish-icon' />PUBLISH</button>
                        <button className='form__bot--cancel'>CANCEL</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UploadForm;
