import { EdgeProps, getSmoothStepPath } from "reactflow";

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
    animated,
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
   stroke: '#FF0072',
   strokeWidth: 2, 
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