import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userImage, setUserImage] = useState([]);
  const [index, setIndex] = useState(0);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`,
    );
    setUserImage(response.data);
  };

  let showUserData = (
    <h1 className="text-2xl absolute  top-1/2 left-1/2 -translate-1/2 -translate-1/2">
      Loading...
    </h1>
  );

  if (userImage.length > 0) {
    showUserData = userImage.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_black">
            <div className="h-50 w-60 bg-white overflow-hidden rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h1 className="font-bold">{elem.author}</h1>
          </a>
        </div>
      );
    });
  }

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  return (
    <div className="p-4 text-white bg-black h-screen overflow-auto">
      {/* <button 
      className='text-white p-8 border-2 border-amber-200'
      onClick={()=>{
        getData()
      }} >Get Data</button> */}
      <div className=" flex flex-wrap gap-2 h-[155%] ">{showUserData}</div>
      <div className="flex justify-center items-center my-4 ">
        <button
          style={{ opacity: index == 0 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
              setUserImage([]);
            }
          }}
          className="bg-amber-300 p-4 border-2 border-black rounded text-black font-bold cursor-pointer active:scale-95"
        >
          Prev
        </button>
        <h1 className="text-2xl mx-5"> Page No. {index + 1}</h1>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserImage([]);
          }}
          className="bg-amber-300 p-4 border-2 border-black rounded text-black font-bold cursor-pointer active:scale-95"
        >
          Next
        </button>
      </div>
      
    </div>
  );
};

export default App;
