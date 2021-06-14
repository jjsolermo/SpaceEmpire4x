import React from 'react';
import './InputFiled.css';

interface ContainerProps {
    name: string;
    value:number;
  }


  const InputFiled: React.FC<ContainerProps> = ({ name ,value}) => {
    return (
      <div className="container">
        <strong>{name}</strong>
        <input type="number"></input>
      </div>
    );
  };
  
  export default InputFiled;