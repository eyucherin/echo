import Link from 'next/link'
import Image from 'next/image'

export const runtime = 'edge'

export default function Home() {
  return (<div className='h-[100vh] flex justify-center items-center mx-[13%] md:mx-[20%]'>
    <div className = "lg:flex  w-[100%]">
      <div className = "lg:hidden">
      <div>
          <h1 className = "text-[7vw] md:text-[5vw] font-semibold">Meet Echo</h1>
          <div className = "text-[2.5vw] md:text-[1.3vw]">
        </div>
          <div className = "text-base">Your next generative AI chat bot.Designed to cater the needs of <span className = "text-[#CD662C] font-semibold">everyone</span> and <span className = "text-[#BE11DA] font-semibold">anyone</span>.</div>
        </div>

      </div>
      <div className = "hidden lg:block w-[50%]">
      <div className = "flex md:flex-col">
        <div>
          <h1 className = "text-[7vw] md:text-[5vw] font-semibold">Meet Echo</h1>
          <div className = "text-[1.5vw]">Your next generative AI chat bot.</div>
          <div className = "text-[1.5vw]">Designed to cater the needs of</div>
          <div className = "text-[1.5vw]"><span className = "text-[#CD662C] font-semibold">everyone</span> and <span className = "text-[#BE11DA] font-semibold">anyone</span>.</div>
        </div>

        <button className = "border-2 border-black py-1 rounded-3xl font-semibold mt-6 bg-white shadow-xl hover:shadow  text-sm w-[50%] md:w-[40%] lg:w-[40%] ml-3 md:ml-0 h-[4vh]">
          <div className = "flex justify-center items-center">
          <Link href="/dash"> Chat with Echo</Link>
          <div className = "ml-1">{'>'}</div>
          </div>
        </button>

      </div>
      </div>
      <div className = "lg:w-[50%] flex  justify-center lg:justify-end my-[3vh]">
      <Image className = "ml-1" src = "front-humans.svg" width={450} height={100} alt = "people"></Image>
      </div>

      <div className = "lg:hidden flex justify-center">
        <button className = "border-2 border-black py-1 rounded-3xl font-semibold mt-6 bg-white shadow-xl hover:shadow  text-xs w-[50%] md:w-[33%] ml-3 md:ml-0 h-[4vh]">
          <div className = "flex justify-center items-center">
          <Link href="/dash"> Chat with Echo</Link>
          <div className = "ml-1">{'>'}</div>
          </div>
        </button>
      </div>
    </div>
  </div>)
}
