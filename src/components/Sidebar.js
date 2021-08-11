import { Avatar } from '@material-ui/core';
import React from 'react';

const Sidebar = () => {

    const recentItem = (topic) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1628418064700-f65f874f0fb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>John Doe</h2>
                <h4>john.doe@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar_stat">
                    <p>Vues du profil</p>
                    <p className="sidebar_statNumber">2,700</p>
                </div>
                <div className="sidebar_stat">
                    <p>Vues de vos post</p> 
                    <p className="sidebar_statNumber">15,700</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    );
};

export default Sidebar;