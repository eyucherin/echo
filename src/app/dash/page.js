'use client'
import {useState,useEffect } from 'react';
import Link from 'next/link'
import OpenAI from '../components/openAI.js';
import HuggingFace from '../components/huggingFace.js';

export default function Page() {

    const [value, setValue] = useState("GPT-3.5-Turbo");
    const [inputVal, setInputVal] = useState("")
    const [sendVal,setSendVal]  = useState("")
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        setWindowSize(window.innerWidth);
      };

      if (typeof window !== 'undefined') {
        setWindowSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
      }
  

      if(windowSize <= 500 && value === "Compare"){
        setValue("GPT-3.5-Turbo")
          setInputVal("")
          setSendVal("")
      }
  
      // Clean up the event listener on component unmount
      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('resize', handleResize);
        }
      };
    }, [windowSize,value]);

    const handleChange = (e) => {
      setValue(e.target.value);
      if(e.target.value === "Compare"){
        setInputVal("")
        setSendVal("")
      }
    };

    const inputChange = (e) => {
      setInputVal(e.target.value)
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setSendVal(inputVal)
      setInputVal("")
    };
    return (
      <div className >
        <div className = " flex justify-between h-[6vh] px-3  py-[0.5] shadow-md ">
          <Link href = "/">
          <img className = "" src = "back-home.svg" width={40} height={15} alt = "people"></img>
          </Link>

          <div className = "h-[100%] flex justify-center items-center">
            <div className = "mr-2">Model</div>
            <select value={value} onChange={handleChange} className = "font-semibold bg-[#ECEBEB] rounded-md border border-black">
              <option value="GPT-3.5-Turbo">GPT-3.5-Turbo</option>
              <option value="Open Assistant">Open Assistant</option>
              {windowSize > 500 ? <option value="Compare">Compare</option> : null}
            </select>
          </div>
        </div>
        {value === "GPT-3.5-Turbo" ?
          <OpenAI full = {"true"}/> :
          value === "Open Assistant" ?
          <HuggingFace full = {"true"}/> :
          <div className = {`flex ${windowSize > 500 ? "visible": "hidden"}`}>
            <div className = "w-[50%] border border-neutral-300 m-2">
                <OpenAI full = {"false"} sendVal = {sendVal} inputVal = {inputVal}/>
                <form onSubmit={handleSubmit} className = {`ml-[2vw] mr-[1vw] my-2`}>
                  <input
                  className = {`w-[45vw] h-[6vh] bg-[#ECEBEB] pl-[2vw] rounded drop-shadow-md relative focus:outline-none`}
                  value={inputVal}
                  placeholder="Say something..."
                  onChange={inputChange}
                  />
                <button className = {`left-[42vw] absolute  bottom-[vh] px-4 py-2`}>
                <img src = "paper-plane-right-bold.png" width={25}/>
                </button>
              </form>
            </div>
            <div className = "w-[50%] border border-neutral-300 m-2">
              <HuggingFace full = {"false"} sendVal = {sendVal} inputVal = {inputVal}/>
              <form onSubmit={handleSubmit} className = {`ml-[2vw] mr-[1vw] my-2`}>
                  <input
                  className = {`w-[45vw] h-[6vh] bg-[#ECEBEB] pl-[2vw] rounded drop-shadow-md relative focus:outline-none`}
                  value={inputVal}
                  placeholder="Say something..."
                  onChange={inputChange}
                  />
                <button className = {`right-[3vw] absolute  bottom-[vh] px-4 py-2`}>
                <img src = "paper-plane-right-bold.png" width={25}/>
                </button>
              </form>
            </div>
          </div>
        }
      </div>
    )
}