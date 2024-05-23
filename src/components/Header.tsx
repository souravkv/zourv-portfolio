import img1 from '../assets/zourv.png';

export default function Header() {

    return (<div className=" text-xs md:text-md  bg-zinc-900 text-white flex p-5 md:p-7 md:px-12 justify-between items-center">


        <div className=' w-12 h-12 md:w-20   md:h-20'> <img className='rounded-full' src={img1} /> </div>
        <ul className=" flex  ">
            <li className="    p-4" >home</li>
            <li className=" p-4">about</li>
            <li className=" p-4 ">works</li>
        </ul>
    </div>)
}