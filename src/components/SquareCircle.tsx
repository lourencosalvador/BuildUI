import { NodeProps,Handle, Position } from "reactflow";
import {NodeResizer} from "@reactflow/node-resizer"
import "@reactflow/node-resizer/dist/style.css"
import { violet, rose, zinc } from "tailwindcss/colors";
import { useColor } from "../hook/SelectColor";

export function SquareCircle({selected}: NodeProps){
 const {color} = useColor(rose[500])
    return(
        <div 
        style={{ backgroundColor: `${color[500]}`}}
        className=" rounded-full w-full h-full min-w-[200px] min-h-[200px]">

            <NodeResizer 
              minHeight={200}
              minWidth={200}
              isVisible={selected}
              lineClassName="border-blue-400"
              handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
            />
             
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