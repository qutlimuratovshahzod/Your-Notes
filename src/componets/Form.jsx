import React from 'react'
import { useState } from 'react'
     export const Form = ({list, setList})=>{
        const[value, SetValue] = useState('')
        const [text, setText] = useState('')
        function submitHandler(event){
            event.preventDefault()
            let obj={
                input: value,
                text:text
            }
            setList([...list, obj])
            SetValue('')
            setText('')
        }
  return (
    <form className='p-1.5' onSubmit={(event)=>submitHandler(event)}>
        <input placeholder='WRITE PLEASE' className='m-1 w-4' value={value} onChange={(event)=> SetValue(event.target.value)} type="text" /> <br />
        <textarea placeholder='WRITE PLEASE' className='m-2.5 resize-none w-4' value={text} onChange={(event)=> setText(event.target.value)}></textarea>
       <br /> <button>Send</button>
    </form>
  )
}
export default Form