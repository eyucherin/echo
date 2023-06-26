import React from 'react'

export const UserChat = (props) => {
  return (
    <div className = "flex flex-row-reverse mr-[2vw] my-[2vh]">
        <div className = "flex">
        <div className = " flex flex-col justify-center max-w-[67vw]">
            <div className = " flex justify-end bg-[#5781D1] text-white p-4 rounded-xl">{props.content}</div>
        </div>
        <div className = "relative">
            <div className = "w-[7.5vw] flex justify-center align-middle">
              <img className = "" src = "you.png" width={75}/>
            </div>
            <div className = "absolute top-[5vw] w-[90%] flex justify-center align-middle "> You</div>
        </div>
        </div>
    </div>
  )
}
