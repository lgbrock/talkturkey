import './message.css';
// import { format } from 'timeago.js';

const Message = ({ message, own }) => {
	return (
		<div className={own ? 'message own' : 'message'}>
			<div className='messageTop'>
				<img
					className='messageImg'
					src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
					alt=''
				/>
				<p className='messageText'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quia
					porro saepe fugiat! Facilis tempora repellat sit quae, provident,
					voluptates labore veniam reprehenderit suscipit dolorum recusandae
					quidem, eos quisquam consequuntur?
				</p>
			</div>
			<div className='messageBottom'>Created 1 hour ago</div>
		</div>
	);
};

export default Message;
