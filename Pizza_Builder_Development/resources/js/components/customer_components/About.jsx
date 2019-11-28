import React from 'react';
import AboutAvatar from './AboutAvatar.jsx';

const About = ( props ) => {
    return (
        <>
            <h1 className="splash-header">About the Pizza Builders..</h1>
            <div className="info-card">
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h2>The Team</h2>
                    <div className="avatar-group__container">
                        <AboutAvatar imageLink={"/image/avatars/jayne.png"} name={"Jayne"} />
                        <AboutAvatar imageLink={"/image/avatars/jasper.png"} name={"Adi"} />
                        <AboutAvatar imageLink={"/image/avatars/jasper.png"} name={"Jasper"} />
                    </div>
                </div>
            </div>
            <div className="info-card">
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h2>Primary goal:</h2>
                    <p>
                        To add enjoyment to the process of ordering pizza by means of a great user-experience and design.
                    </p>
                </div>
            </div>
            <div className="info-card">
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h2>The Technology</h2>
                    <p>Front-End: Scss, React</p>
                    <p>Back-End: MySQL, Laravel</p>
                </div>
            </div>

            <div className="info-card">
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h2>Special Thanks</h2>
                    <p>Sam, Andrew, Jan, Tim, Slavo, Gerard, Riccardo and many more...</p>
                </div>
            </div>
        </>
    )
}

export default About;
