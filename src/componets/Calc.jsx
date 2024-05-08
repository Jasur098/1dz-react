import  { useState } from 'react'

export const Calc = () => {
    const [resualt,setResualt] = useState(0)
    const [input,setInput] = useState(0)
    const [input2,setInput2] = useState(0)



  return (
    <div>
<input type="text" onChange={(event)=> setInput(+event.target.value)}/>
<input type="text" onChange={(event)=> setInput2(+event.target.value)}/>


<button onClick={()=> {setResualt(input+input2)}} >+</button>
<button onClick={()=> {setResualt(input-input2)}} >-</button>
<button onClick={()=> {setResualt(input/input2)}} >/</button>
<button onClick={()=> {setResualt(input*input2)}} >*</button>

<p>=</p>

<h1>{resualt}</h1>

    </div>
  )
}
