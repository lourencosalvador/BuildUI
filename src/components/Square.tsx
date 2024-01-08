import { NodeProps,Handle, Position } from "reactflow";
import {NodeResizer} from "@reactflow/node-resizer"
import "@reactflow/node-resizer/dist/style.css"
import { zinc, violet } from "tailwindcss/colors";
import { useColor } from "../hook/SelectColor";
import { useRef, useState } from "react";


export function Square({  selected  }: NodeProps) {
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
        style={{ backgroundColor: violet[500]}}
        className={` rounded w-full h-full min-w-[200px] min-h-[200px] flex flex-col justify-center items-center`}>
       
            <NodeResizer 
              minHeight={200}
              minWidth={200}
              isVisible={selected}
              lineClassName="border-blue-400"
              handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
              
            />
             <input type="text" 
              ref={text}
             onBlur={handleInputChange}
              className="bg-transparent outline-none text-cyan-100 text-[17px] px-4 font-semibold"
             />
             <p className="text-center text-slate-200 text-[17px] font-semibold px-3">{value}</p>
           <Handle 
           id="right" 
           type="source" 
           position={Position.Right}
           className="-right-5 w-3 h-3 bg-zinc-400 border-none"
           
           />
           <Handle
            id="lef" 
            type="source"
             position={Position.Left}
             className="-left-5 w-3 h-3 bg-zinc-400 border-none"
             />
               <Handle 
           id="top" 
           type="source" 
           position={Position.Top}
           className="-top-5 w-3 h-3 bg-zinc-400 border-none"
           />
           <Handle
            id="button" 
            type="source"
             position={Position.Bottom}
             className="-bottom-5 w-3 h-3 bg-zinc-400 border-none"
             />
        </div>
        
    )
}
