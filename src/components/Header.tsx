
import { useState, useEffect, useRef } from 'react';
import Profile from './Profile';
import { gsap } from 'gsap';

export default function Header() {
    const [profileview, setprofileview] = useState(false);
    const profileRef = useRef(null);

    useEffect(() => {
        if (profileview) {
            gsap.to(profileRef.current, { opacity: 1, duration: 0.3, display: 'block', x: '0' });
        } else {
            gsap.to(profileRef.current, { opacity: 0, duration: 0.3, display: 'none', x: '100' });
        }
    }, [profileview]);

    return (
        <div>
            <div className="text-xs md:text-md bg-black text-white flex p-5 md:p-7 md:px-12 justify-between items-center">
                <div onClick={() => setprofileview(!profileview)} className='w-12 h-12 md:w-20 md:h-20'>
                    <img className='rounded-full' src="https://i.pinimg.com/originals/d9/f6/b7/d9f6b7bed716e54bf9ee96f74da84c14.gif" />
                </div>
                <ul className="flex">
                    <li className="p-4">home</li>
                    <li className="p-4">about</li>
                    <li className="p-4">works</li>
                </ul>
            </div>
            <div className='duration-300 transition-all'>
                <div ref={profileRef} style={{ opacity: 0, display: 'none' }}>
                    {profileview && <Profile />}
                </div>
            </div>
        </div>
    );
}
