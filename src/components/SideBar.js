import React from 'react'
import NavItem from './NavItem'

function SideBar(){
    return (
        <div>
             {/* <!-- Sidebar --> */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Admin</div>
                </a>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />
                
                <NavItem text="Dashboard" icon="fas fa-fw fa-tachometer-alt" active="active"/>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">Actions</div>

                {/* <!-- Nav Item - Pages --> */}
                <NavItem text="Pages" icon="fas fa-fw fa-folder"/>

                {/* <!-- Nav Item - Charts --> */}
                <NavItem text="Charts" icon="fas fa-fw fa-chart-area"/>

                {/* <!-- Nav Item - Tables --> */}
                <NavItem text="Tables" icon="fas fa-fw fa-table"/>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/* <!-- End of Sidebar --> */}
        </div>
    );
}

export default SideBar;