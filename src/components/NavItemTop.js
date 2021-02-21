import React from 'react'

function NavItemTop(props)
{
    return(
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="/" id={props.id}>
                <i className={props.icon}></i>
                {/* <!-- Counter - Alerts --> */}
                <span className="badge badge-danger badge-counter">{props.num}+</span>
            </a>
        </li>
    );
}

export default NavItemTop;