import { useRef, useState } from "react";
import { Handle, NodeProps, NodeResizer, Position } from "reactflow";


export function SquareText({selected}: NodeProps){
    const text = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState('')
  if(text.current){
    console.log(text.current.value)
  }

  const handleInputChange = () => {
    if (text.current) {
      console.log(text.current.value);
      setValue(text.current.value)
      text.current.value = ''
    }
  };
 return(
    <div 
    className=" rounded-full w-full h-full min-w-[200px] min-h-[100px]">

        <NodeResizer 
          minHeight={200}
          minWidth={200}
          isVisible={selected}
          lineClassName="border-blue-400"
          handleClassName="h-3 w-3 bg-white border-2  bg-transparent"
        />
          <input type="text" 
              ref={text}
             onBlur={handleInputChange}
              className="bg-transparent outline-none text-cyan-100 text-[17px] px-4 font-semibold"
             />
             <p className="text-center text-slate-200 text-[30px] font-semibold  px-3">{value}</p>
      
    </div>
 )
}