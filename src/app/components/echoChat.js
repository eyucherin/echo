import React from 'react'

const EchoChat = (props) => {
  return (
    <div className = "flex ml-[1vw] my-[2vh]">
      <div className = "flex">
      <div className = "relative">
            <div className = "flex justify-center align-middle w-[14vw] sm:w-[7.5vw]">
                <img src = "echo.png" width={100}/>
            </div>
            {/* <div className = "absolute top-[5.5vw] left-1 pr-1 w-[100%] flex justify-center align-middle">Echo</div> */}
        </div>
        <div className = "flex flex-col justify-center max-w-[70%]">
            <div className = "bg-[#D9D9D9] rounded-xl text-sm p-2 sm:p-3">{props.content}</div>
        </div>
      </div>
    </div>
  )
}

export default EchoChat
