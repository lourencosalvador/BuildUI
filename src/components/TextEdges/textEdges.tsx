import { EdgeText } from 'reactflow';

type CustomEdgeLabelProps = {
  label: string;
};

export function CustomEdgeLabel({ label }: CustomEdgeLabelProps) {
  return (
    <EdgeText
      x={100}
      y={100}
      label={label}
      labelStyle={{ fill: 'white' }}
      labelShowBg
      labelBgStyle={{ fill: 'red' }}
      labelBgPadding={[2, 4]}
      labelBgBorderRadius={2}
    />
  );
}
