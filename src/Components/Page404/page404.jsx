import React from 'react';
import HorizontalRule from '../HorizontalRule/HorizontalRule';
import { Link } from 'react-router-dom';
import '../../css/page404.css';

const Page404 = () => {

    // Add details for the 404 page
    return (
        <section id="page404">
            <h1 className="page404-heading">Page 404</h1>
            <p className="page404-paragraph">No such page exists</p>
            <div className="link-section">
                <b><i><u><Link style={{ color: 'green' }} to="/">Go Home</Link></u></i></b>
            </div>
            <HorizontalRule />
        </section>
    )

}

export default Page404;