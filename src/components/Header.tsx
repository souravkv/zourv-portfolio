import img1 from '../assets/zourv.png';

export default function Header(){

    return(<div className=" bg-zinc-900 text-white flex p-7 px-12 justify-between items-center">


    <div className='w-20   h-20'> <img className='rounded-full' src={img1}/> </div>
   <ul className=" flex  ">
    <li className=" p-4" >home</li>
    <li className=" p-4">about</li>
    <li className=" p-4 ">works</li>
   </ul>
    </div>)
}