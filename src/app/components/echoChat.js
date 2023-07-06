import React from 'react'

const EchoChat = (props) => {
  return (
    <div className = "flex ml-[2vw] my-[2vh]">
      <div className = "flex">
      <div className = "relative">
            <div className = "w-[7.5vw] flex justify-center align-middle">
                <img src = "echo.png" width={100}/>
            </div>
            {/* <div className = "absolute top-[5.5vw] left-1 pr-1 w-[100%] flex justify-center align-middle">Echo</div> */}
        </div>
        <div className = "flex flex-col justify-center max-w-[70%]">
            <div className = "bg-[#D9D9D9] p-4 rounded-xl">{props.content}</div>
        </div>
      </div>
    </div>
  )
}

export default EchoChat
