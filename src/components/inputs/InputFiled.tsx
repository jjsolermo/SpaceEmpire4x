import React , {useState} from 'react';
import './InputFiled.css';

interface IContainerProps {
    name: string;
    value:number;
    passValue:any;
  }


  const InputFiled: React.FC<IContainerProps> = (props) => {
 
    const onChange = e => {
      props.passValue(e.value);
    };
  
    return (
      <div className="container">
        <strong>{props.name}</strong>
        <input type="number" min={0} value={props.value}  onChange={onChange}></input>
      </div>
    );
  };
  
  export default InputFiled;