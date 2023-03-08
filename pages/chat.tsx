import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { api } from "../lib/axios";

const socket = io("chatbot-rocketseat-api-production.up.railway.app", {
  transports: ["websocket"],
  forceNew: true,
});

interface Message {
  author: string;
  message: string;
}

export default function Chat() {
  const router = useRouter();
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
          { author: messages.author, message: messages.message },
        ]);
      });
    });

    socket.on("receivedMessage", (msg) => {
      setMessages((currentMsg) => [
        ...currentMsg,
        { author: msg.author, message: msg.message },
      ]);
    });

    getUser();

    return function cleanup() {
      socket.removeListener("previousMessages");
      socket.removeListener("receivedMessage");
    };
  }, []);

  useEffect(() => {
    verifyLogin();
  }, [message]);

  const verifyLogin = () => {
    const bearer_token = `Bearer ${localStorage.getItem("access_token")}`;

    api
      .get("/api/register", {
        headers: {
          Authorization: bearer_token,
        },
      })
      .then(() => {
        return;
      })
      .catch((e) => {
        router.push({
          pathname: "/",
        });

        console.log(e);
      });
  };

  const getUser = () => {
    api
      .post("/api/register/getUser", {
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        setAuthor(res.data.username);
      })
      .catch((e) => {
        router.push({
          pathname: "/",
        });

        console.log(e);
      });
  };

  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <div className="h-full">
        <form className="box-border flex justify-center items-center flex-col">
          <input
            type="text"
            name="message"
            className="w-full border border-solid border-whiteLight h-12 pl-0 pr-5 text-sm hover:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
            placeholder=" Digite sua mensagem:"
            value={message}
            required
            minLength={2}
            maxLength={150}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            className="w-full h-12 text-sm bg-blueLight text-center leading-md font-bold text-white mt-3 hover:text-gray-300"
            onClick={handleMessages}
          >
            Enviar
          </button>

          <div className="w-full h-400 ml-5 mr-0 border border-solid border-whiteLight p-5 overflow-y-auto">
            {messages.map((msg, i) => {
              return (
                <strong key={i}>
                  {msg.author}: {msg.message}
                  <br></br>
                </strong>
              );
            })}
          </div>
        </form>
        <br />
      </div>
    </>
  );
}
