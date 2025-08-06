import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="section">
                    <span>{process.env.REACT_APP_NAME} ©</span>

                    <div className="subSection">
                        <ul>
                            <li>
                                <a href="/#">Home</a>
                            </li>

                            <li>
                                <a href="/sign-in/">Sign in</a>
                            </li>

                            <li>
                                <a href="/sign-up/">Sign up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
