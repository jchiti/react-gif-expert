import {useState} from 'react';
import { Addcategory, GifGrid } from './components';



export const GifExpertApp = () => {

  const [categories, setcategories] = useState(['one Punch']);

  const onAddcategory = (newcategory) =>{
    
    if (categories.includes(newcategory)) return;
    
    setcategories([newcategory,...categories]);

  }

  return (
    
    <>
    <h1>GifExpertApp</h1>
    
    <Addcategory 
      onNewcategory={(value) =>onAddcategory(value)}

    />


    
   
      {
      categories.map((category) => (
        <GifGrid 
          key={category} 
          category={category}/>
        ))
      
      }
    
      

   
    </>
  )
}
