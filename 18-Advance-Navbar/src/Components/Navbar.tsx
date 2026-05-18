import React, { useState } from "react";


interface Props {

}

const ComponentName: React.FC<Props> = (props) => {

    const [sidebar, setSidebar] = useState<string>('hidden');
    const [isMenuOpen, setisMenuOpen] = useState(false)
    return (
        <div>
            <div className=" relative bg-black  flex  p-5 justify-between text-white z-30">
                <h1 className=" ">MYWEB6</h1>
                <div className=" flex justify-between  gap-3 items-center">
                    <p>Home</p>
                    <p>Contact Us</p>
                    <p>About Us</p>
                    <button
                        onClick={() => setisMenuOpen(!isMenuOpen)}
                        className=" cursor-pointer ">
                        <svg className="h-5 mx-3 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="rgb(255, 212, 59)" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
                    </button>

                </div>
            </div>
            <div className={"bg-black/0 fixed w-screen h-screen ease-in-out duration-300 " + (isMenuOpen ? "bg-black/50" : "")}></div>
            <div className={"fixed   top-0 bottom-0 right-0  transition-transform transform w-80 p-5 pt-40 z-20 bg-fuchsia-800 ease-in-out duration-300" + (isMenuOpen ? "" : " translate-x-full")} >


            </div>

        </div>
    );
};

export default ComponentName;