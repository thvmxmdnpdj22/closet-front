import React from "react";
import './Profile.css';
import ProfileBox from "./component/ProfileBox";

const ProfilePresenter = ({
    navigate,
    nickname,
    address,
    phoneNumber,
    imageUrl,
    setNickname,
    setAddress,
    setPhoneNumber,
    onChangeImage,
    onClickFileBtn,
    imgRef,
    onErrorImg,
    isEditingNickname,
    setIsEditingNickname,
    isEditingAddress,
    setIsEditingAddress,
    isEditingPhoneNumber,
    setIsEditingPhoneNumber
}) => {
    return (
        <div>
            <h1>내 정보</h1>
            <ProfileBox
                nickname={nickname}
                address={address}
                phoneNumber={phoneNumber}
                imageUrl={imageUrl}
                setNickname={setNickname}
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
        </div>
    );
}

export default ProfilePresenter;