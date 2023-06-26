'use client'
import {useChat } from 'ai/react';
import {EchoChat} from '../components/echoChat.js';
import {UserChat} from '../components/userChat.js';
import { useEffect, useRef } from 'react';
import Link from 'next/link'

export default function Page() {
    const { messages, input, handleInputChange, handleSubmit } = useChat()
    const messageContainerRef = useRef(null);

    useEffect(() => {
      scrollMessageContainerToBottom();
    }, [messages]);

    const clearMessage = () => {
      window.location.reload(true); // Navigate to the root URL to reset the chat
    };

    const scrollMessageContainerToBottom = () => {
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop =
          messageContainerRef.current.scrollHeight;
      }
    };

    return (
      <div className>
        <Link href = "/">
        <img className = " fixed ml-3 mt-3" src = "back-home.svg" width={40} height={15} alt = "people"></img>
        </Link>

        <div ref={messageContainerRef} className = "h-[92vh] overflow-y-auto">
        {messages.length > 0
          ? messages.map(m => (
              <div key={m.id} className="whitespace-pre-wrap">
                {m.role === 'user' ? <UserChat content = {m.content}/> : <EchoChat content = {m.content}/>}
              </div>
            ))
          : null}
        </div>

        <div className = "flex">
          <form onSubmit={handleSubmit} className = "ml-[2vw] mr-[1vw]">
            <input
            className = "w-[85vw] h-[6vh] bg-[#ECEBEB] pl-[2vw] rounded drop-shadow-md relative focus:outline-none"
              // className="fixed bottom-0 w-full p-2 mb-8 border border-gray-300 rounded shadow-xl"
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
            />
            <button className = "absolute right-[13vw] bottom-[3vh] px-4 py-1 ">
            <img src = "paper-plane-right-bold.png" width={25}/>
            </button>
          </form>

          <button className = "border w-[10vw] bg-[#ECEBEB] font-bold rounded hover:bg-[#D9D9D9] h-[6vh]" onClick={clearMessage}>
          + New Chat
          </button>
        </div>

      </div>
    )
}