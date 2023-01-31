import 'styles/pages/AboutPage.scss';
import React from 'react';
import chili from 'assets/images/chili.JPG';
import moustache from 'assets/images/hayato-moustache.JPG';

const AboutPage = () => {
  return (
    <div className="content">
      <h1 className="header-text">About</h1>
      <p className="text">
        Hayato loves to swim at the beach.
        <br />
        He enjoys reading, and coding, and playing video games.
        <br />
        He can usually be found at the kitchen sink, washing dishes.
      </p>

      <h2 className="subheader">Hayato's favorite cuisine: Tex-Mex</h2>
      <img src={chili} className="image" alt="bowl of chili, hayato's favorite" />

      <h2 className="subheader">Hayato with a moustache</h2>
      <img src={moustache} className="image" alt="Hayato had a moustache for about 5 minutes" />
    </div>
  );
};

export default AboutPage;
