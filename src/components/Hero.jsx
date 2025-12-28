import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="grid gap-4 bg-[url('./src/assets/yellow.jpg')] relative items-center bg-cover min-h-screen ">
       <div className="ml-2 md:text-5xl text-3xl font-bold flex flex-col p-20 text-white -mt-20">
        <div className="bg-yellow-900/20 -ml-9 pl-0 pr-16">
        <span><h1 className="text-yellow-200"><span className="text-6xl">T</span>IMELESS CLOTHING PIECE</h1></span>
        <span className="text-blue-200 ml-7">FAIL LETS GO</span>
        </div>
        <div className="flex justify-between items-center mx-auto mt-3">
           <button type="button" className="bg-teal-950 font-normal text-xl
            md:px-20 md:py-4  px-14 py-3 rounded-2xl 
            hover:cursor-pointer" onClick={()=> navigate('ordersum', { replace: true })}>BUY NOW</button>
        </div> 
       </div>
    </section>
  )
}
export default Hero;
