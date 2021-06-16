import React , {useState} from 'react';
import './InputFiled.css';

interface IContainerProps {
    name: string;
    value:number;
  }


  const InputFiled: React.FC<IContainerProps> = (props : IContainerProps) => {
    const{
      name,
      value
    } = props;

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