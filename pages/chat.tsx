import { use, useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io('http://localhost:3001', { transports: ['websocket'] })

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

    socket.on("receivedMessage", (msg) => {
        setMessages([
            ...messages,
            { author: msg.author, message: msg.message }
        ]);
        setMessage("");
    });
    
    return (
        <div className="h-full box-border flex justify-center items-center flex-col">
                <input type="text" name="name" className="w-600 border border-solid border-whiteLight h-12 pl-0 pr-5 text-sm" placeholder="Digite seu nome:" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <input type="text" name="message" className="w-600 border border-solid border-whiteLight h-12 pl-0 pr-5 text-sm" placeholder="Digite sua mensagem:" value={message} onChange={(e) => setMessage(e.target.value)} />
                
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
        <br />
        </div> 
    )
}