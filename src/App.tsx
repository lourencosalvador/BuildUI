import 'reactflow/dist/style.css';
import ReactFlow, { Background, Connection, ConnectionMode, Controls, addEdge, useEdgesState, useNodesState } from 'reactflow';
import {transparent, violet, zinc} from "tailwindcss/colors"
import { Square } from './components/Square';
import { useCallback, useState } from 'react';
import { DefaultEdges } from './components/edges/Defalutedges';
import * as Toolbar from '@radix-ui/react-toolbar'
import { PopoverRH } from './components/Popover';
import { SquareCircle } from './components/SquareCircle';
import { useColor } from './hook/SelectColor';
import { colorSelect } from './data';


const Node_Types ={
  square: Square,
  circle: SquareCircle
}

const Edge_Types = {
  default: DefaultEdges,
}
 const Initial_Nodes = [
 
 ] satisfies Node[]


function App() {
   const [edges, setEdges, onEdgesChange] = useEdgesState([])
   const { colorDefinida, setColor } = useColor();
   const [node, setNode, onNodesChange] = useNodesState(
    Initial_Nodes
  )
   
   const onConnect = useCallback((connection: Connection)=> {
      return setEdges(edges => addEdge(connection, edges))
   }, [])
   
  



   function addNewEdge(tipoNode: string){
      setNode(nodes => [
        ...nodes,
        {
          id: crypto.randomUUID(),
          type: tipoNode,
          position: {
            x: 750,
            y:350,
          },
          data: {},
         }
      ])
   }

  return (
    <>
      <div className="w-screen h-screen" >
        <ReactFlow
         nodeTypes={Node_Types}
         edgeTypes={Edge_Types}
         nodes={node}
         edges={edges}
         onEdgesChange={onEdgesChange}
         onConnect={onConnect} 
         onNodesChange={onNodesChange}
         connectionMode={ConnectionMode.Loose}
         defaultEdgeOptions={{
          type: 'default',
         }}
         style={{ backgroundColor: colorDefinida  }}
        >
          <Background 
          gap={18}
            size={0}
            color={transparent}
          />
          <Controls 
           color='bg-white'
          />
         
        </ReactFlow>
        

        <Toolbar.Root className='fixed rotate-90 top-[200px] left-[60px] -translate-x-1/2 bg-zinc-700  rounded-2xl shadow-lg  px-8 h-20 w-96 overflow-hidden flex gap-8'>
          <Toolbar.Button 
          onClick={() => addNewEdge('square')}
          className='w-32 h-32 bg-violet-500  rounded transition-transform mt-6 hover:-translate-y-2 '
          />
           <Toolbar.Button 
       onClick={() => addNewEdge('circle')}
          className='w-32 h-32 bg-rose-500  rounded-full transition-transform mt-6 hover:-translate-y-2 '
          />
        </Toolbar.Root>

        <div className='fixed flex justify-center items-center top-[40px] left-[1050px] -translate-x-1/2 bg-zinc-700 rounded shadow-lg  px-8  w-[60px] transition-[1s]  h-[50px]  hover:w-[200px] '>
            <PopoverRH />
           
        </div>
        <div className='fixed flex justify-center items-center top-[40px] left-[1130px] -translate-x-1/2 bg-zinc-700 rounded shadow-lg  px-8  w-[60px] transition-[1s]  h-[50px] hover:h-[170px] overflow-hidden'>
           <h2 className='fixed top-[12px] left-[8px] text-violet-300 font-semibold'>Colors</h2>
           <ul id='bodyColor' className='w-auto h-auto fixed top-[80px] left-[7px] flex flex-col gap-2 hover:cursor-pointer'>
                <li onClick={() => setColor('ROSE')} className='w-[50px] h-[20px] bg-blue-900' title='zinc' />
                <li onClick={() => setColor('VIOLET')} className='w-[50px] h-[20px] bg-cyan-900' title='violet' />
                <li onClick={() => setColor('DEFAULT')} className='w-[50px] h-[20px] bg-zinc-400' title='violet' />
            </ul>
        </div>
      </div>
    </>
  )
}

export default App
