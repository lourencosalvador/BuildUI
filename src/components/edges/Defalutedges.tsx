import React from "react";
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
  }: EdgeProps){
 const [edgesPath] =  getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
 });


 return (
    <>
    <path 
      id={id}
      style={style}
      className="react-flow_edge-path"
      d={edgesPath}
      markerEnd={markerEnd}
    />
    </>
 )
}