import React from 'react'

function NavItem(props){
    return (
            // <!-- Nav Item - Dashboard --> 
           <li className={"nav-item " + props.active}>
                <a className="nav-link" href="/">
                    <i className={props.icon}></i>
                    <span>{props.text}</span>
                </a>
            </li>
    );
}

export default NavItem;