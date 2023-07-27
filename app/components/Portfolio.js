import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

const PortfolioCard= () => {
  return (
    <div class="relative flex max-w-[48rem]  flex-col rounded-xl text-black  bg-clip-border transition-all duration-300 shadow-sm shadow-black ">
        <div class="relative m-0 w-full h-2/5 shrink-0 overflow-hidden rounded-xl rounded-b-none bg-white bg-clip-border">
            <img
                src="/hero.jpeg"
                alt="img"
                class=" object-cover"
            />
        </div>
    <div class="p-6 mb-8">
      <h6 class="mb-4 block font-sans text-base font-semibold capitalize leading-relaxed tracking-normal text-blue-500 antialiased">
        company name
      </h6>
      <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-blac antialiased">
        wonderful portfolio
      </p>
      <div className='flex gap-4 mt-20 items-center '>
        <Link href="" className='inline-block'>
             <p className='text-xl'>Logo</p>
        </Link>
        <Link class="inline-block" href="">
          <button
            class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:bg-blue-500/10 active:bg-blue-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            View site
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  </div>

  )
}
const Portfolio = () => {
    return (
        <div className=' h-screen flex flex-col items-center m-10 p-10 '>
            <h1 className='capitalize  text-xl font-bold tracking-wider pt-10 text-blue-500'>What we've built</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 py-10  m-3 sm:place-content-stretch">
              
                 <PortfolioCard />
                 <PortfolioCard />
                 <PortfolioCard />
                 <PortfolioCard />
            </div>
        </div>
      )
}
export default Portfolio