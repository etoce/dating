type User = {
	id: string,
	alias: string,
	email?: string, 
	password?: string
};

type Message = {
	sender: User,
	text: string,
	timestamp: Date
};

type ChatRoom = {
	users: User[],
	messages: Message[],
	createdDate: Date
};

export {
	User, Message, ChatRoom
};
