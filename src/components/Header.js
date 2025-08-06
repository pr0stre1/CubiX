import React from 'react';
import './Header.css';
import {useAuth} from "./hooks/AuthProvider";
import {RiLoginCircleLine, RiLogoutCircleRLine} from "@remixicon/react";

function Header() {
    const auth = useAuth();

    return (
        <>
            <header className='header'>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Website</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <a href="/#targets">Targets</a>
                        </li>

                        <li>
                            <a href="/#team">Team</a>
                        </li>

                        <li>
                            <a href="/#projects">Projects</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <a href={auth?.user ? '/' : '/sign-in'} onClick={() => auth?.user ? auth.logOut() : ''}>
                                {auth?.user ? auth.user.username : 'sign in'} {auth?.user?.username ?
                                <RiLogoutCircleRLine size={20}/> : <RiLoginCircleLine size={20}/>}
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
