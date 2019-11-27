import React from 'react';

const About = ( props ) => {
    return (
        <>
            <h1 className="splash-header">About the Pizza Builders..</h1>
            <div className="info-card">
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h2>The Team</h2>
                    <p>Jayne: Hi, I'm Jayne and...</p>
                    <p>Adi: Hi, I'm Adi and...</p>
                    <p>Jasper: Hi, I'm Jasper and...</p>
                </div>
            </div>
            <div className="info-card">
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h2>The Technology</h2>
                    <p>Front-End: Scss, React</p>
                    <p>Back-End: MySQL, Laravel</p>
                </div>
            </div>
        </>
    )
}

export default About;
