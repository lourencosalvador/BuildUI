import React from "react";
import { EdgeProps, getSmoothStepPath } from "reactflow";
import { CustomEdgeLabel } from "../TextEdges/textEdges";

export function DefaultEdges({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
  }: EdgeProps){
 const [edgePath] =  getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
 });
 const customStyle = {
   stroke: 'gray', // Cor cinza para a linha
   strokeWidth: 2, // Largura da linha (opcional, ajuste conforme necessário)
   fill: 'none',
 };


 return (
   <>
     <path 
      id={id}
      style={{ ...style, ...customStyle }}
      className="react-flow_edge-path"
      d={edgePath}
      markerEnd={markerEnd}
      
    />
    
   </>
 )
}