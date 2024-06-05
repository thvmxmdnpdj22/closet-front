import React from "react";

const ProfileBox = ({
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
        <div className="profile-box">
            <div className="profile-image">
                {imageUrl ? (
                    <img 
                        src={imageUrl} 
                        alt="프로필 이미지" 
                        onError={onErrorImg} 
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                ) : (
                    <div style={{ width: '150px', height: '150px', backgroundColor: '#ddd' }}>
                        이미지 없음
                    </div>
                )}
                <input 
                    type="file" 
                    ref={imgRef} 
                    style={{ display: 'none' }} 
                    onChange={onChangeImage} 
                />
                <button onClick={onClickFileBtn}>이미지 선택</button>
            </div>
            <div className="profile-info">
                <div className="profile-field">
                    <label>닉네임</label>
                    <input 
                        type="text" 
                        value={nickname} 
                        onChange={(e) => setNickname(e.target.value)} 
                        disabled={!isEditingNickname}
                    />
                    <button onClick={() => setIsEditingNickname(!isEditingNickname)}>
                        {isEditingNickname ? '저장' : '수정'}
                    </button>
                </div>
                <div className="profile-field">
                    <label>주소</label>
                    <input 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        disabled={!isEditingAddress}
                    />
                    <button onClick={() => setIsEditingAddress(!isEditingAddress)}>
                        {isEditingAddress ? '저장' : '수정'}
                    </button>
                </div>
                <div className="profile-field">
                    <label>전화번호</label>
                    <input 
                        type="text" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        disabled={!isEditingPhoneNumber}
                    />
                    <button onClick={() => setIsEditingPhoneNumber(!isEditingPhoneNumber)}>
                        {isEditingPhoneNumber ? '저장' : '수정'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileBox;