import React from 'react';
import './navbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbarWrapper'>
				<div className='topLeft'>
					<span className='logo'>turkey admin.</span>
				</div>
				<div className='topRight'>
					<div className='navbarIconContainer'>
						<NotificationsNone />
						<span className='topIconBadge'>2</span>
					</div>
					<div className='navbarIconContainer'>
						<Language />
						<span className='topIconBadge'>2</span>
					</div>
					<div className='navbarIconContainer'>
						<Settings />
					</div>
					<img
						src='./images/profilePicNoBackground'
						alt=''
						className='topAvatar'
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
