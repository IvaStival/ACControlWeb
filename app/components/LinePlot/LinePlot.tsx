"use client";
import * as d3 from "d3";

import { useRef, useEffect } from "react";

type data_type = {
  data: Array<number>;
  data2: Array<number>;
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
};

export default function LinePlot({
  data,
  data2,
  width = 900,
  height = 300,
  marginTop = 20,
  marginRight = 40,
  marginBottom = 30,
  marginLeft = 40,
}: data_type) {
  const gx = useRef(null);
  const gy = useRef(null);

  const x = d3.scaleLinear(
    [0, data.length - 1],
    [marginLeft, width - marginRight]
  );
  let [min = 0, max = 0] = d3.extent(data);

  const y = d3.scaleLinear(
    [min - 1, max + 1],
    [height - marginBottom, marginTop]
  );

  const line = d3.line((d, i) => x(i), y).curve(d3.curveBasis);
  const line2 = d3.line((d, i) => x(i), y).curve(d3.curveBasis);

  // console.log(data);
  useEffect(
    () =>
      void d3
        .select<SVGSVGElement, unknown>(gx.current!)
        .call(d3.axisBottom(x)),
    [gx, x]
  );
  useEffect(() => {
    void d3.select<SVGSVGElement, unknown>(gy.current!).call(d3.axisLeft(y)),
      [gy, y];
  });

  return (
    <svg width={width} height={height}>
      <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
      <g ref={gy} transform={`translate(${marginLeft},0)`} />
      <path
        className="fill-blue"
        fill="none"
        stroke="blue"
        strokeWidth="1"
        d={line(data)!}
      />
      <g fill="white" stroke="currentColor " strokeWidth="1" />

      <path fill="none" stroke="green" strokeWidth="1" d={line(data2)!} />
      <g fill="white" stroke="currentColor" strokeWidth="1" />

      {/* {data.map((d, i) => (
          <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
        ))} */}
      {/* </g> */}
    </svg>
  );
}
