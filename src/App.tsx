import 'reactflow/dist/style.css';
import ReactFlow, { Background, Connection, ConnectionMode, Controls, addEdge, useEdgesState, useNodesState } from 'reactflow';
import {zinc} from "tailwindcss/colors"
import { Square } from './components/Square';
import { useCallback } from 'react';
import { DefaultEdges } from './components/edges/Defalutedges';

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
        >
          <Background 
          gap={18}
            size={2}
            color={zinc[200]}
            
          />
          <Controls />
        </ReactFlow>
      </div>
    </>
  )
}

export default App
