import 'styles/pages/HomePage.scss';
// import headshot from 'assets/images/hayato-headshot.JPG';

const HomePage = () => {
    return (
        <div className='content page Home'>
            {/* <h1 className='header-text'>Welcome</h1>
            <p className='welcome-text'>
                Welcome to Hayato's homepage. Get to know Hayato as he takes you
                through a wonderful journey of Front-End imagination.
            </p>
            <img src={headshot} alt='hayato' className='headshot' /> */}

            <p>Welcome to my portfolio website!</p>

            <p>
                I'm a software engineer with a passion for creating innovative,
                user-friendly applications. I specialize in developing web-based
                solutions using cutting-edge technologies.
            </p>

            <p>
                On this site, you'll find examples of my work, including
                projects I've completed for clients and personal projects I've
                undertaken to hone my skills. You can also learn more about my
                experience and background, as well as the technologies and
                programming languages I'm proficient in.
            </p>

            <p>
                Whether you're a potential client or simply someone who's
                interested in the work I do, I hope you'll find this site
                informative and engaging. If you have any questions or would
                like to discuss a potential project, please don't hesitate to
                contact me.
            </p>

            <p>Thank you for visiting!</p>
        </div>
    );
};

export default HomePage;
