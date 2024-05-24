import img2 from '../assets/linker.png';
import img3 from '../assets/spotx.png';


export default function Hero() {
    return (
        <>
            <div className=' text-gray-500 '>
                <div className="p-8 text-gray-500 md:mb-10">
                    <div className="font-thin text-5xl md:text-[22vh] ">Welcome to my portfolio</div>
                </div>
                <div className="grid grid-cols-2 w-full  gap-4">
                    <img
                        src='https://images.unsplash.com/photo-1715783768839-73794cbce337?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt="First Image"
                        className="hover:brightness-50 ease-out duration-200 w-full h-full object-cover"
                    />
                    <div className="grid grid-rows-2 gap-4">
                        <div onClick={() => { window.open('https://linke-r.vercel.app/', '_blank') }} className='  hover:brightness-50 ease-out duration-200'>

                            <img src={img2} alt="Second Image" className="w-full h-full object-cover" />
                        </div>
                        <img onClick={() => { window.open('https://spotx-zeta.vercel.app/', '_blank') }}
                            src={img3}

                            className=" hover:brightness-50 ease-out duration-200 w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="    p-8 font-thin  md:text-[22vh] ">Future of design System</div>



            </div>

            {/* <div className="  font-thin text-[22vh] tracking-1">Future of design System</div> */}


        </>
    );
}
