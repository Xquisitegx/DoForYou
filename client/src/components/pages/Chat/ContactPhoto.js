import axios from "axios";

import React, { useEffect, useState } from "react";
import styled from "styled-components";

function ContactPhoto(username) {
    const handleImgError = (e) => {
        e.target.src = "../images/profile/default.png";
    };
    const ContactPhotoBox = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    const ContactPhoto = styled.div`
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const ContactPhotoImage = styled.img`
        width: 50px;
        height: 50px;
        border-radius: 50%;
    `;

    return (
        <>
            <ContactPhotoBox>
                <ContactPhoto>
                    {username ? (
                        <ContactPhotoImage
                            src={`http://localhost:8000/api/users/profile/${username.username._id}`}
                            onError={handleImgError}
                            alt="default profile"
                        />
                    ) : (
                        <></>
                    )}
                </ContactPhoto>
            </ContactPhotoBox>
        </>
    );
}

export default ContactPhoto;
