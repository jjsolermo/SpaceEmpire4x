import React , {useState} from 'react';
import './InputFiled.css';

interface ContainerProps {
    name: string;
    value:number;
  }


  const InputFiled: React.FC<ContainerProps> = (name , value) => {

    const [inputValue, setInputValue] = useState(value); // ''

    const handleInputChange = ( ) => {
        setInputValue( inputValue );
    }

    return (
      <div className="container">
        <strong>{name}</strong>
        <input type="number" value={ inputValue } onChange={ handleInputChange }></input>
      </div>
    );
  };
  
  export default InputFiled;