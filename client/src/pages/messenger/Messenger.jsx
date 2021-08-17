import './messenger.css';
import Navbar from '../../components/navbar/Navbar';
import Conversation from '../../components/conversations/Conversation';
import Message from '../../components/message/Message';

const Messenger = () => {
	return (
		<>
			<Navbar />
			<div className='messenger'>
				<div className='chatMenu'>
					<div className='chatMenuWrapper'>
						<input placeholder='Search for friends' className='chatMenuInput' />
						<Conversation />
						<Conversation />
						<Conversation />
					</div>
				</div>
				<div className='chatBox'>
					<div className='chatBoxWrapper'>
						<div className='chatBoxTop'>
							<Message />
						</div>
						<div className='chatBoxBottom'></div>
					</div>
				</div>
				<div className='chatOnline'>
					<div className='chatOnlineWrapper'>Online</div>
				</div>
			</div>
		</>
	);
};

export default Messenger;
