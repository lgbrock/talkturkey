import './message.css';

const Message = () => {
	return (
		<div className='message'>
			<div className='messageTop'>
				<img className='messageImg' src='' alt='' />
			</div>
			<p className='messageText'>Hello, this is a message!</p>
			<div className='messageBottom'>1 hour ago</div>
		</div>
	);
};

export default Message;
