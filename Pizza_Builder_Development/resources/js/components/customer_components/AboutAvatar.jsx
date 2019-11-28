import React from 'react';

const AboutAvatar = ( props ) => {
    return (
        <>
            <div className="avatar-image__parent">
                <div className="avatar-image" style={{ backgroundImage: `url(${props.imageLink})` }}>
                    {/* <img style={{ width: "160px" }} src={props.imageLink} alt="about_avatar" /> */}
                </div >
                <p>{props.name}</p>
                {
                    ( props.name === "Jasper" ) ? <><p>Front-End, Back-End</p></> : <p>Front-End</p>
                }
            </div>
        </>
    )
}

export default AboutAvatar;
