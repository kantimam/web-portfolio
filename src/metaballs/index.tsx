import {useRef, useLayoutEffect } from 'react';
import * as React from 'react';
import { MetaBalls as MetaBallsRenderer } from './metaballsLogic';


export interface minMax{
  min: number;
  max: number;
}

export type propTypes = {
  orbData?: Array<{
    size?: number;

    posX?: number;
    posY?: number;

    colorR?: number;
    colorG?: number;
    colorB?: number;

    moveX?: number;
    moveY?: number;
  }>,
  innerContainer?:  React.ReactElement;
  children?: any;
  childContainerFlex?: "row" | "row-reverse" | "column" | "column-reverse";
  shiftColor?: minMax | undefined;
  deflectMovement?: minMax | undefined;
  fragmentShader?: string | undefined;
}


export const defaultInnerContainer=<div className="metaBalls-innerContainer" style={{width: "100%", height: "100%"}}/>



const MetaBalls: React.FC<propTypes> = ({ orbData, innerContainer=defaultInnerContainer, children, childContainerFlex, shiftColor, deflectMovement, fragmentShader }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let innerRef = useRef<HTMLElement>(null);


  useLayoutEffect(() => {
    let metaball: MetaBallsRenderer;
    if(canvasRef.current && innerRef.current){
      metaball = new MetaBallsRenderer(canvasRef.current, innerRef.current, deflectMovement, shiftColor, orbData)
      if(fragmentShader) metaball.fragmentShader=fragmentShader;
      metaball.create();
      metaball.render();
    }
    return () => {
      if(metaball){
        metaball.destroy();
      }
    };
  }, [])



  return (
    <div id="metaballContainer" style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden"}}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", position: "absolute", left: 0, top: 0 }} />
      <div style={{ width: "100%", height: "100%", position: "absolute", left: 0, top: 0, display: "flex", flexDirection: childContainerFlex? childContainerFlex : "row"}}>
        {React.cloneElement(innerContainer,{ref:innerRef}, null)}  {/* can be used to further contain the orbs while having some of the glow spread over the entire page*/}
        {children&&
          <div style={childContainerFlex?{ height: "100%", flex: 1}:{ width: "100%", height: "100%", position: "absolute", left: 0, top: 0 }}>
            {children} { /*YOUR FULL PAGE CONTENT GOES HERE*/}
          </div>
        }
      </div>
    </div>

  );
}

export default MetaBalls;
