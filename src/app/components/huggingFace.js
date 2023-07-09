import React from 'react'
import { useChat } from 'ai/react';
import EchoChat from '../components/echoChat.js';
import UserChat from '../components/userChat.js';
import { useEffect, useRef } from 'react';

const HuggingFace = (props) => {
    const { messages, input, append, handleInputChange, handleSubmit,api } = useChat({
        api: '/api/chat2',
     })
    const messageContainerRef = useRef(null);

    useEffect(() => {
      scrollMessageContainerToBottom();
    }, [messages]);

    useEffect(() => {
      if ((props.sendVal ?? '').length > 0){
        sendMessage(props.sendVal);
      }
    }, [props.sendVal]);

    const sendMessage = async (val) => {
      const newMessage = {
        role: 'user',
        content: val,
      };

      try {
        const response = await append(newMessage);
      } catch (error) {
        console.error('Error appending message:', error);
      }
    };

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
      <div>
          <div className = "w-[100%] flex justify-center bg-[#D9D9D9] font-medium">Open Assistant</div>
          <div ref={messageContainerRef} className = "h-[80vh] overflow-y-auto">
              {messages.length > 0
              ? messages.map(m => (
                  <div key={m.id} className="whitespace-pre-wrap">
                      {m.role === 'user' ? <UserChat content = {m.content}/> : <EchoChat content = {m.content}/>}
                  </div>
                  ))
              : null}
          </div>

          <div className = {` ${props.full === "true" ? 'visible':'hidden'} flex h-[6vh] my-2`}>
              <form onSubmit={handleSubmit} className = "ml-[2vw] mr-[1vw]">
                  <input
                  className = {`w-[82vw] md:w-[85vw] h-[6vh] bg-[#ECEBEB] pl-[2vw] rounded drop-shadow-md relative focus:outline-none`}
                  // className="fixed bottom-0 w-full p-2 mb-8 border border-gray-300 rounded shadow-xl"
                  value={input}
                  placeholder="Say something..."
                  onChange={handleInputChange}
                  />
                <button className = {`${props.full === "true" ? 'right-[15vw] lg:right-[13vw]':'left-[42vw]' } absolute  bottom-[vh] px-4 py-2`}>
                  <img src = "paper-plane-right-bold.png" width={25}/>
                </button>
              </form>

            <button className = {`border w-[13vw] lg:w-[10vw] bg-[#ECEBEB] font-semibold rounded hover:bg-[#D9D9D9] h-[6vh]  text-sm md:text-base`} onClick={clearMessage}>
              + New Chat
            </button>
          </div>
      </div>
    )
  }

export default HuggingFace;
