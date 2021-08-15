import 'styles/pages/NotFoundPage.scss';
import React, { useEffect } from 'react';

const NotFoundPage = () => {
    useEffect(() => {
        console.log('in!');
        return () => console.log('out')
    }, []);

    return (
        <div className="content">
            <h1 className="header">
                404
            </h1>
        </div>
    );
};

export default NotFoundPage;
