import './UploadForm.scss';
import image from '../../assets/Images/Upload-video-preview.jpg'
import iconImage from '../../assets/Icons/publish.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useRef } from 'react';

const UploadForm = () => {

    let navigate = useNavigate()
    const routeChange = () => {
        alert("You've upload the video!")
        navigate('/')
    }
    const homeRoute = () =>{
        navigate('/')
    }

    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    const uploadVideo = async (e) => {
        e.preventDefault()
        const videoData = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            image: 'http://localhost:8080/images/image0.jpg'
        }
        await axios.post('http://localhost:8080/videos', videoData);
        titleRef.current.value = '';
        descriptionRef.current.value = '';
    }

    return (
        <>
            <div className='upload__container'>
                <h1 className='upload__title'>Upload Video</h1>
                <h2 className='upload__thumbnail--title'>VIDEO THUMBNAIL</h2>
                <img className='upload__img' src={image} alt='thumbnail-image'></img>
                <form onSubmit={uploadVideo}>
                    <div className='form__top'>
                        <label className='form__top--title'>TITLE YOUR VIDEO</label>
                        <input ref={titleRef} className='form__top--input' placeholder="Add a title to your video"></input>
                    </div>
                    <div className='form__mid'>
                        <label className='form__mid--description'>ADD A VIDEO DESCRIPTION</label>
                        <input ref={descriptionRef} className='form__mid--input' placeholder="Add a description to your video"></input>
                    </div>
                    <div className='form__bot'>
                        <button type='submit' onClick={uploadVideo} className='form__bot--publish'><img className='form__bot--icon' src={iconImage} alt='publish-icon' />PUBLISH</button>
                        <button onClick={homeRoute} className='form__bot--cancel'>CANCEL</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UploadForm;
