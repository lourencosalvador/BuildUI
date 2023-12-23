import 'reactflow/dist/style.css';
import ReactFlow, { Background, Connection, ConnectionMode, Controls, addEdge, useEdgesState, useNodesState } from 'reactflow';
import {transparent, zinc} from "tailwindcss/colors"
import { Square } from './components/Square';
import { useCallback } from 'react';
import { DefaultEdges } from './components/edges/Defalutedges';
import * as Toolbar from '@radix-ui/react-toolbar'
import { PopoverRH } from './components/Popover';
import { Player1 } from './components/Player';


const Node_Types ={
  square: Square
}

const Edge_Types = {
  default: DefaultEdges,
}
 const Initial_Nodes = [
   {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 200,
      y:400,
      className: 'annotation',
    },
    animated: true,
    data: {},
   },
   {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 1000,
      y:400,
    },
    data: {},
   }
 ] satisfies Node[]

function App() {
   const [edges, setEdges, onEdgesChange] = useEdgesState([])
   const [node, setNode, onNodesChange] = useNodesState(Initial_Nodes)

   const onConnect = useCallback((connection: Connection)=> {
      return setEdges(edges => addEdge(connection, edges))
   }, [])


   function addNewEdge(){
      setNode(nodes => [
        ...nodes,
        {
          id: crypto.randomUUID(),
          type: 'square',
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
         style={{ backgroundColor: zinc[800] }}
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
        

        <Toolbar.Root className='fixed rotate-90 top-[200px] left-[60px] -translate-x-1/2 bg-zinc-700 rounded-2xl shadow-lg  px-8 h-20 w-96 overflow-hidden'>
          <Toolbar.Button 
          onClick={addNewEdge}
          className='w-32 h-32 bg-violet-500  rounded transition-transform mt-6 hover:-translate-y-2 '
          />
          
        </Toolbar.Root>

        <div className='fixed flex justify-center items-center top-[40px] left-[1050px] -translate-x-1/2 bg-zinc-700 rounded shadow-lg  px-8  w-[60px] transition-[1s]  h-[50px]  hover:w-[200px] '>
            <PopoverRH />
           
        </div>
      </div>
    </>
  )
}

export default App
