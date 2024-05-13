'use client';

import * as d3 from 'd3';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function Axis({ hAxis }: { hAxis: number; }) {
  const Axis = () => {
    const ticks = useMemo(() => {
      const xScale = d3.scaleLinear()
        .domain([-5, 5])
        .range([10, 290]);
      const yScale = d3.scaleLinear()
        .range([290, 290]);
      console.log("yScale:", yScale(100));
      return xScale.ticks()
        .map(value => ({
          value,
          xOffset: xScale(value),
          yOffset: yScale(value)
        }));
    }, []);
    return (
      <div className={'m-auto p-4'}>
        <svg width={300} height={300}>
          <path
            d="M 9.5 290.5 H 290.5 M 150 0.5 V 290.5"
            fill="transparent"
            stroke="currentColor"
          />
          {ticks.map(({ value, xOffset, yOffset }: { value: number, xOffset: number, yOffset: number; }) => (
            <g
              key={value}
              transform={`translate(${xOffset}, ${yOffset})`}
            >
              <line
                y2="6"
                stroke="currentColor"
              />
              <text
                key={value}
                style={{
                  fontSize: "10px",
                  textAnchor: "middle",
                  transform: "translate(5px,-10px)"
                }}>
                {value}
              </text>
            </g>
          ))}
        </svg>
      </div>
    );
  };
  return (
    <div className={"h-full"}>
      <Axis />
    </div>
  );
};
