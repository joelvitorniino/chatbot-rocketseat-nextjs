import { use, useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io('http://localhost:3001')

interface Message {
    author: string;
    message: string;
}

let messageObject;
const setMessageObject = (author: string, message: string) => {
    if(author.length && message.length) {
        messageObject = {
            author: author,
            message: message
        };

        socket.emit("sendMessage", messageObject);

        return messageObject;
    };
};

export default function Chat() {
    const [author, setAuthor] = useState("");
    const [chosenUsername, setChosenUsername] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        socketInitializer();
    }, []);

    const socketInitializer = async () => {
        socket.on("receivedMessage", (message: Message) => {
            setMessageObject(message.author, message.message);

            setMessages((currentMsg) => [
                ...currentMsg,
                { author: message.author, message: message.message }
            ]);

            setMessage("");

            console.log(messages)
        });
    };

    const handleKeypress = (e: any) => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
          if (message) {
            socketInitializer();
          }
        };
    };

    return (
        <div className="h-full box-border">
            <form className="h-full flex justify-center items-center flex-col">
                <input type="text" name="name" className="w-600 border border-solid border-whiteLight h-12 pl-0 pr-5 text-sm" placeholder="Digite seu nome:" value={author} onChange={(e) => setAuthor(e.target.value)} onKeyUp={handleKeypress} />
                <input type="text" name="message" className="w-600 border border-solid border-whiteLight h-12 pl-0 pr-5 text-sm" placeholder="Digite sua mensagem:" value={message} onChange={(e) => setMessage(e.target.value)} />
                
                <button className="w-600 h-12 text-sm bg-blueLight text-center leading-md font-bold text-white mt-3 hover:text-gray-300" onClick={() => {
                    setChosenUsername(author)
                    socketInitializer()
                }}>Enviar</button>

                <div className="w-600 h-400 ml-5 mr-0 border border-solid border-whiteLight p-5 overflow-y-auto">
                { messages.map((msg, i) => {
                    return (
                        <p>{msg.author}: {msg.message}</p>
                    )
                })}
                </div>
            </form>
        <br />
        </div> 
    )
}