import { use, useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io('http://localhost:3001', { transports: ['websocket'], forceNew: true },)

interface Message {
    author: string;
    message: string;
}

export default function Chat() {
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    const handleMessages = (e: any) => {
        socket.emit("sendMessage", { author, message });
    };

    useEffect(() => {
        socket.on("connection", null as any);
        socket.on("previousMessages", (msg) => {
            msg.forEach((messages: Message) => {
                setMessages((currentMsg) => [
                    ...currentMsg,
                    { author: messages.author, message: messages.message }
                ]);
            });
        });

        socket.on("receivedMessage", (msg) => {
            setMessages((currentMsg) => [
                ...currentMsg,
                { author: msg.author, message: msg.message }
            ]);
        });

        return function cleanup() {
            socket.removeListener("previousMessages");
            socket.removeListener("receivedMessage");
        }
    }, []);
    
    return (
        <div className="h-full">
                <form className="box-border flex justify-center items-center flex-col">
                <input type="text" name="name" className="w-600 border border-solid border-whiteLight h-12 pl-0 pr-5 text-sm hover:border-blue-600 transition duration-200 ease-in-out" placeholder=" Digite seu nome:" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <input type="text" name="message" className="w-600 border border-solid border-whiteLight h-12 pl-0 pr-5 text-sm hover:border-blue-600 transition duration-200 ease-in-out" placeholder=" Digite sua mensagem:" value={message} onChange={(e) => setMessage(e.target.value)} />
                
                <button className="w-600 h-12 text-sm bg-blueLight text-center leading-md font-bold text-white mt-3 hover:text-gray-300" onClick={handleMessages} onSubmit={(e) => e.preventDefault()}>Enviar</button>

                <div className="w-600 h-400 ml-5 mr-0 border border-solid border-whiteLight p-5 overflow-y-auto">
                    {
                        messages.map((msg, i) => {
                            return (
                                <strong key={i}>{msg.author}: {msg.message}<br></br></strong>
                            )
                        })
                    }
                </div>
                </form>
        <br />
        </div> 
    )
}