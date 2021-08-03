import 'styles/pages/HomePage.scss';
import React from 'react'
import headshot from 'assets/images/hayato-headshot.JPG';

const HomePage = () => {
    return (
        <div className="content">
            <h1 className="header-text">Welcome</h1>
            <p className="welcome-text">Welcome to Hayato's homepage. Get to know Hayato as he takes you through a wonderful journey of Front-End imagination.</p>
            <img src={headshot} alt="hayato" className="headshot"/>
        </div>
    );
};

export default HomePage;
