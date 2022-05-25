import * as React from "react";
import "./styles.css";
import { User, Message, ChatRoom } from "../../types";





export const Chat = (props: {chatRoom: ChatRoom}) => {
	

	return (
		<div className="chat">
			<div className="chat-messages">
				{props.chatRoom.messages.map((message) => {
					return (
						<div className="chat-messages-message">
							{message.sender.alias}: {message.text}
						</div>
					);
				})}
			</div>
			<input></input>
		</div>
	);
};