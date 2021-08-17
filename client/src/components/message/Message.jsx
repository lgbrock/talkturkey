import './message.css';
import { format } from 'timeago.js';

const Message = ({ message, own }) => {
	return (
		<div className={own ? 'message own' : 'message'}>
			<div className='messageTop'>
				<img
					className='messageImg'
					src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
					alt=''
				/>
				<p className='messageText'>{message.text}</p>
			</div>
			<div className='messageBottom'>{format(message.createdAt)}</div>
		</div>
	);
};

export default Message;
