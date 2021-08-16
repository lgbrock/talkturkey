import './navbar.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
	const { user } = useContext(AuthContext);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	return (
		<div className='navbarContainer'>
			<div className='navbarLeft'>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<span className='logo'>Talk Turkey</span>
				</Link>
			</div>
			<div className='navbarCenter'>
				<div className='searchbar'>
					<Search className='searchIcon' />
					<input
						placeholder='Search for friend, post or video'
						className='searchInput'
					/>
				</div>
			</div>
			<div className='navbarRight'>
				<div className='navbarLinks'>
					<span className='navbarLink'>Homepage</span>
					<span className='navbarLink'>Timeline</span>
				</div>
				<div className='navbarIcons'>
					<div className='navbarIconItem'>
						<Person />
						<span className='navbarIconBadge'>1</span>
					</div>
					<div className='navbarIconItem'>
						<Chat />
						<span className='navbarIconBadge'>2</span>
					</div>
					<div className='navbarIconItem'>
						<Notifications />
						<span className='navbarIconBadge'>1</span>
					</div>
				</div>
				<Link to={`/profile/${user.username}`}>
					<img
						src={
							user.profilePicture
								? PF + user.profilePicture
								: PF + 'person/noAvatar.png'
						}
						alt=''
						className='navbarImg'
					/>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
