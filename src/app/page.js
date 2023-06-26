import Link from 'next/link'
import Image from 'next/image'

export const runtime = 'edge'

export default function Home() {
  return (<div className='h-[100vh] flex justify-center items-center mx-[13%]'>
    <div className = "flex  w-[100%]">
      <div className = "w-[50%]">
        <h1 className = "text-[5vw] font-semibold">Meet Echo</h1>
        <div className = "text-[1.3vw]">
          <div>You&#39;re next generative AI chat bot.</div>
          <div>Designed to cater the needs of</div>
          <div><span className = "text-[#CD662C] font-semibold">everyone</span> and <span className = "text-[#BE11DA] font-semibold">anyone</span>.</div>
        </div>

        <button className = "border-2 border-black px-5 py-1 rounded-3xl font-semibold mt-6 bg-white shadow-xl hover:shadow">
          <div className = "flex">
          <Link href="/dash"> Chat with Echo</Link>
          <Image className = "ml-1" src = "caret-right-bold.svg" width={20} height={15} alt = "people"></Image>
          </div>
        </button>

      </div>
      <div className = "w-[50%] flex justify-end">
      <Image className = "ml-1" src = "front-humans.svg" width={450} height={100} alt = "people"></Image>
      </div>
    </div>
  </div>)
}
