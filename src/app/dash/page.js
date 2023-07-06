'use client'
import {useChat } from 'ai/react';
import EchoChat from '../components/echoChat.js';
import UserChat from '../components/userChat.js';
import { useEffect, useRef,useState } from 'react';
import Link from 'next/link'

export default function Page() {

   const getInitialState = () => {
      const value = "GPT-3.5-Turbo";
      return value;
    };

    const initialOption = {
      api: '/api/chat',
   };

    const [value, setValue] = useState(getInitialState);
    const [options, setOptions] = useState(initialOption);

    const { messages, input, handleInputChange, handleSubmit,api } = useChat(options)
    const messageContainerRef = useRef(null);

    const handleChange = (e) => {
      console.log(e.target.value);
      if (e.target.value === "GPT-3.5-Turbo") {
        setOptions({
          api: '/api/chat',
        });
      } else if (e.target.value === "Open Assistant") {
        setOptions({
          api: '/api/chat2',
        });
      };
      setValue(e.target.value);
    };

    useEffect(() => {
      scrollMessageContainerToBottom();
    }, [messages]);

    const clearMessage = () => {
      window.location.reload(true);
    };

    const scrollMessageContainerToBottom = () => {
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop =
          messageContainerRef.current.scrollHeight;
      }
    };

    return (
      <div className>
        <div className = " flex justify-between h-[6vh] px-3  py-[0.5] shadow-md ">
          <Link href = "/">
          <img className = "" src = "back-home.svg" width={40} height={15} alt = "people"></img>
          </Link>

          <div className = "h-[100%] flex justify-center items-center">
            <div className = "mr-2">Model</div>
            <select value={value} onChange={handleChange} className = "font-semibold bg-[#ECEBEB] rounded-md border border-black">
              <option value="GPT-3.5-Turbo">GPT-3.5-Turbo</option>
              <option value="Open Assistant">Open Assistant</option>
              <option value="Compare">Compare</option>
            </select>
          </div>
        </div>

        <div ref={messageContainerRef} className = "h-[86vh] overflow-y-auto">
        {messages.length > 0
          ? messages.map(m => (
              <div key={m.id} className="whitespace-pre-wrap">
                {m.role === 'user' ? <UserChat content = {m.content}/> : <EchoChat content = {m.content}/>}
              </div>
            ))
          : null}
        </div>

        <div className = "flex h-[6vh] my-2">
          <form onSubmit={handleSubmit} className = "ml-[2vw] mr-[1vw]">
            <input
            className = "w-[85vw] h-[6vh] bg-[#ECEBEB] pl-[2vw] rounded drop-shadow-md relative focus:outline-none"
              // className="fixed bottom-0 w-full p-2 mb-8 border border-gray-300 rounded shadow-xl"
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
            />
            <button className = "absolute right-[13vw] bottom-[vh] px-4 py-2 ">
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