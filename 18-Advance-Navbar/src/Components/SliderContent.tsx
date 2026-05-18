import React from "react";

interface Props {

}

const ComponentName: React.FC<Props> = (props) => {
    return (
        <div className="bg-[#ffffff]">
            <div className="flex flex-wrap items-center justify-center gap-6 py-4">

                {/* Image */}
                <img
                    src="https://i.pinimg.com/736x/7d/36/35/7d3635001102e1b9a4f551f6bbd0247b.jpg"
                    alt=""
                    className="w-100 h-100 object-cover shrink-0"
                />

                {/* Text Section */}
                <div className="flex flex-col items-center justify-center text-center max-w-md">
                    <h1 className="text-3xl font-bold">
                        Heading
                    </h1>

                    <p className="mt-3 text-gray-600">
                        Your paragraph text goes here. When the screen becomes smaller,
                        this text automatically shifts below the image instead of shrinking it.
                    </p>
                </div>

            </div>


        </div>
    );
};

export default ComponentName;