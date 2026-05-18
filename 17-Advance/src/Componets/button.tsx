import React from "react";

interface props {
    name?:string;
 }//Button dosen't have any props

const Button: React.FC<props> = ({ name = "Hello I am button component" }: props) => {
    return <button>{name}</button>
};


export default Button;
