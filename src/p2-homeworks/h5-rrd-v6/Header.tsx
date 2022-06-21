import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import css from './Header.module.css'


function Header() {

    const activeClassName = css.activeLink
    const usualClassName = css.usualLink

    return (

        <>
            <div className={css.sidenav}>
                <span className={css.navLink}>
                    <NavLink className={({isActive}) =>
                        isActive ? activeClassName : usualClassName
                    } to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
                </span>
                <span className={css.navLink}>
                    <NavLink className={({isActive}) =>
                        isActive ? activeClassName : usualClassName
                    } to={PATH.JUNIOR}>Junior</NavLink>
                </span>
                <span className={css.navLink}>
                    <NavLink className={({isActive}) =>
                        isActive ? activeClassName : usualClassName
                    } to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
                </span>
            </div>
        </>



        /*<div>
            <div><NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink></div>
            <div><NavLink to={PATH.JUNIOR}>Junior</NavLink></div>
            <div><NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink></div>



        </div>*/



        /*<>
            <div className={css.area}></div>
            <nav className={css.mainMenu}>
                <ul>
                    {/!*<li>
                        <NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.JUNIOR}>Junior</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
                    </li>*!/}
                    <li>
                        <a href="#">
                            <i className={`${css.fa} ${css.faHome} ${css.faTwoX}`}></i>
                            <span className={css.navText}>
                            Dashboard
                        </span>
                        </a>
                    </li>
                    <li className={css.hasSubnav}>
                        <a href="#">
                            <i className={`${css.fa} ${css.faLaptop} ${css.faTwoX}`}></i>
                            <span className={css.navText}>
                            Stars Components
                        </span>
                        </a>

                    </li>
                    <li className={css.hasSubnav}>
                        <a href="#">
                            <i className={`${css.fa} ${css.faList} ${css.faTwoX}`}></i>
                            <span className={css.navText}>
                            Forms
                        </span>
                        </a>

                    </li>
                    <li className={css.hasSubnav}>
                        <a href="#">
                            <i className={`${css.fa} ${css.faFolderOpen} ${css.faTwoX}`}></i>
                            <span className={css.navText}>
                            Pages
                        </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>*/
    )
}

export default Header
