import React, { useState } from 'react'
import Values from 'values.js';
import SingleColor from './SingleColor';
const Colors = () => {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState([]);
  const generateColor = (e) => {
    e.preventDefault();
    // console.log(color)
    try{
      const data = new Values(color).all(10)
      setList(data);
      setError(false);
    //console.log(data)

    }catch(error){
      console.log(error);
      setError(true);
    }
    console.log(list)
  }
  return (
    <>
        <div className="container p-4 col-lg-5 mx-auto shadow">
          <h1 className='text-center display-4'>
            Color Generator
          </h1>
          <form>
            <label htmlFor="">Colors</label>
            <input value={color} onChange={(e)=>setColor(e.target.value)} className={`form-control ${error ?'border-danger' : 'border-sucess'}`} type="text" placeholder='eg.blue' />
            <button onClick={generateColor} className='btn btn-dark w-100 my-2'>
              Generate
            </button>
          </form>
        </div>
        <div className="row col-lg-11 mx-auto mt-3">
        {list.map((item,index)=>{
          return <SingleColor key={index} {...item} i={index} code={item.hex}/>
        })}
        </div>
    </>
  )
}

export default Colors