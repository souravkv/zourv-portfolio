

export default function Profile() {

    return (<div className='  fixed z-40 top-0 w-screen'>
        <div className=' absolute top-0 right-0   md:pb-23  h-screen w-1/2 md:w-[35vw]    bg-[url(https://i.pinimg.com/originals/66/d4/75/66d47512c67f8a7b0494ba67e177b34f.gif)]    '>

            <div className='  bg-gray-200 m-3   md:m-12  flex flex-col h-3/4  mt-[12vh]   justify-between items-center  mr-15 rounded-xl'>
                <div className=' relative'>
                    <img className='  hover:brightness-50  duration-300 brightness-90  h-[10vw] w-96 object-cover  rounded-t-xl ' src='https://i.pinimg.com/originals/2e/ea/b3/2eeab3a597171fb0c8aa8746e39290a6.gif' />
                    <img className='  absolute  -translate-y-9  md:-translate-y-14 m-3 left-1 rounded-full h-10  w-10  md:w-20 md:h-20 ' src="https://i.pinimg.com/originals/d9/f6/b7/d9f6b7bed716e54bf9ee96f74da84c14.gif" />
                </div>
                <div className=' bg-gradient-to-b from-[#001463]  to-[#006553] w-full h-full rounded-b-xl'>

                    <div className=' hover:backdrop-brightness-[60%]  duration-300   backdrop-brightness-[70%] text-gray-100 p-4  pb-10 rounded-xl mx-8 mt-14'>
                        <div className=' text-gray-200 '  >!!ZOURV</div>
                        <div className='text-xs pb-2 font-thin border-b border-gray-500'>sourav</div>

                        <div className='pt-2'>
                            <div className=' text-xs   '> About Me  </div>
                            <div className='  text-xs font-thin'>  HTML : CSS :  JavaScript : Tailwind CSS : Bootstrap5: Python: React.js: SQL : Figma :</div>

                        </div>




                    </div>
                    <div className=' text-xs hover:backdrop-brightness-[60%]  hidden md:block   backdrop-brightness-[70%] text-gray-100 p-4  pb-5 rounded-xl mx-8 mt-5'>
                        <div className='font-sans text-gray-200 pb-2'>Links</div>
                        <ul className='font-thin'>
                            <li>https://github.com/souravkv</li>
                            <li>https://twitter.com/m_aysou</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    </div>)
}