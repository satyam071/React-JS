import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import SliderContent from "./Components/SliderContent";




interface Props {

}
const meetingData=[
  {
    date:"14/05/2026",
    participants:[
      {name:"Rishabh",email:"rishu123@gmail.com",duration: 125},
      {name:"Satyam",email:"sam123@gmail.com",duration: 5},
    ]
  },
  {
    date:"13/05/2026",
    participants:[
      {name:"Aman",email:"Amu123@gmail.com",duration: 105},
    ]
  }
]

const ComponentName: React.FC<Props> = (props) => {

  

  return (
    <div className="bg-black" >
      <Navbar />
      <Slider/>
      <SliderContent/>
      



    </div>
  );
};

export default ComponentName;