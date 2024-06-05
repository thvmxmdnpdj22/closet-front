import React, { useRef, useState } from "react";
import ProfilePresenter from './ProfilePresenter';
import { useNavigate } from "react-router-dom";

const ProfileContainer = () => {
    const navigate = useNavigate();
    
    const [nickName, setNickName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const imgRef = useRef();

    const [isEditingNickname, setIsEditingNickname] = useState(false);
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);

    const onChangeImage = (e) => {
        const reader = new FileReader();
        const file = imgRef.current.files[0];

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageUrl(reader.result);
        };
    };

    const onClickFileBtn = () => {
        imgRef.current.click();
    };

    const onErrorImg = (e) => {
        e.target.src = 'https://via.placeholder.com/150'; // 대체 이미지 URL을 넣어주세요.
    };

    return (
        <ProfilePresenter
            navigate={navigate}
            nickname={nickName}
            address={address}
            phoneNumber={phoneNumber}
            imageUrl={imageUrl}
            setNickname={setNickName}
            setAddress={setAddress}
            setPhoneNumber={setPhoneNumber}
            onChangeImage={onChangeImage}
            onClickFileBtn={onClickFileBtn}
            imgRef={imgRef}
            onErrorImg={onErrorImg}
            isEditingNickname={isEditingNickname}
            setIsEditingNickname={setIsEditingNickname}
            isEditingAddress={isEditingAddress}
            setIsEditingAddress={setIsEditingAddress}
            isEditingPhoneNumber={isEditingPhoneNumber}
            setIsEditingPhoneNumber={setIsEditingPhoneNumber}
        />
    );
}

export default ProfileContainer;