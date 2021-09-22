import { axiosInstance } from '../../config';
import { useEffect, useState } from 'react';
import './chatOnline.css';

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
	const [friends, setFriends] = useState([]);
	const [onlineFriends, setOnlineFriends] = useState([]);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	useEffect(() => {
		const getFriends = async () => {
			const res = await axiosInstance.get('/users/friends/' + currentId);
			setFriends(res.data);
		};

		getFriends();
	}, [currentId]);

	useEffect(() => {
		setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
	}, [friends, onlineUsers]);

	const handleClick = async (user) => {
		try {
			const res = await axiosInstance.get(
				`/conversations/find/${currentId}/${user._id}`
			);
			setCurrentChat(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='chatOnline'>
			{onlineFriends.map((o) => (
				<div className='chatOnlineFriend' onClick={() => handleClick(o)}>
					<div className='chatOnlineImgContainer'>
						<img
							className='chatOnlineImg'
							src={
								o?.profilePicture
									? PF + o.profilePicture
									: PF + 'person/noAvatar.png'
							}
							alt=''
						/>
						<div className='chatOnlineBadge'></div>
					</div>
					<span className='chatOnlineName'>{o?.username}</span>
				</div>
			))}
		</div>
	);
};

export default ChatOnline;
