import React, { useState } from "react";

interface Props {

}

const ComponentName: React.FC<Props> = (props) => {
    const tabTitles = [25, 50, 150, 200];
    const [selectedIndex, setSelectedIndex] = useState(0);
    console.log(selectedIndex)


    return (
        <div>
            <div className="bg-purple-400">
                <div className=" relative max-w-md mx-auto box-border ">
                    <div className="flex font-bold py-5 text-center gap-3 ">
                        {tabTitles.map((titles, index) => (
                            <div onClick={() => (setSelectedIndex(index))} className="flex-1 shrink-0 text-center cursor-pointer ">
                                {titles} <span>⭐</span>
                            </div>

                        ))}

                    </div>
                    <div className="bg-black absolute h-1 w-1/5 ease-in-out duration-300" style={{ left: `${selectedIndex * 25}%` }} ></div>




                </div>

            </div>

        </div>
    );
};

export default ComponentName;