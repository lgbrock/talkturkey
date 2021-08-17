import './messenger.css';
import Navbar from '../../components/navbar/Navbar';
import Conversation from '../../components/conversations/Conversation';
import Message from '../../components/message/Message';
import ChatOnline from '../../components/chatOnline/ChatOnline';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
// import { io } from "socket.io-client";

const Messenger = () => {
	const [conversations, setConversations] = useState([]);
	const [currentChat, setCurrentChat] = useState(null);
	const [messages, setMessages] = useState([]);
	const { user } = useContext(AuthContext);
	const scrollRef = useRef();

	useEffect(() => {
		const getConversations = async () => {
			try {
				const res = await axios.get('/conversations/' + user._id);
				setConversations(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getConversations();
	}, [user._id]);

	useEffect(() => {
		const getMessages = async () => {
			try {
				const res = await axios.get('/messages/' + currentChat?._id);
				setMessages(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getMessages();
	}, [currentChat]);

	useEffect(() => {
		scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	return (
		<>
			<Navbar />
			<div className='messenger'>
				<div className='chatMenu'>
					<div className='chatMenuWrapper'>
						<input placeholder='Search for friends' className='chatMenuInput' />
						{conversations.map((c) => (
							<div onClick={() => setCurrentChat(c)}>
								<Conversation conversation={c} currentUser={user} />
							</div>
						))}
					</div>
				</div>
				<div className='chatBox'>
					<div className='chatBoxWrapper'>
						{currentChat ? (
							<>
								<div className='chatBoxTop'>
									{messages.map((m) => (
										<div ref={scrollRef}>
											<Message message={m} own={m.sender === user._id} />
										</div>
									))}
								</div>
								{/* <div className='chatBoxBottom'>
									<textarea
										className='chatMessageInput'
										placeholder='write something...'
										onChange={(e) => setNewMessage(e.target.value)}
										value={newMessage}
									></textarea>
									<button className='chatSubmitButton' onClick={handleSubmit}>
										Send
									</button>
								</div> */}
							</>
						) : (
							<span className='noConversationText'>
								Open a conversation to start a chat.
							</span>
						)}
					</div>
				</div>
				<div className='chatOnline'>
					<div className='chatOnlineWrapper'>
						<ChatOnline />
					</div>
				</div>
			</div>
		</>
	);
};

export default Messenger;
