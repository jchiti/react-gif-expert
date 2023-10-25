import { useState } from 'react';


export const Addcategory = ({onNewcategory}) => {

    const [inputvalue, setinputvalue] = useState('one punch');

    const oninputChanged = ({target}) => {
        setinputvalue(target.value);

    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputvalue.trim().length<= 1) return;

        // setcategories(categories => [inputvalue,...categories]);
        onNewcategory(inputvalue.trim());
        setinputvalue('');
    }

  return (
    <form onSubmit={onSubmit}>
    <input
    type="text"
    placeholder="buscar gifs"
    value={inputvalue}
    onChange={oninputChanged}
    
    
    />
    </form>
  )
}
