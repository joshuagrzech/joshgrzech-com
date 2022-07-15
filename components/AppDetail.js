import React from 'react';

import {
  Controller,
  Scene,
} from 'react-scrollmagic';
import gradients from './gradients';
import { Tween, Timeline, SplitWords, SplitChars } from 'react-gsap';

import { ImageSequence } from './ScrollSequence';
import whatbill1 from './whatbill-1'
import whatbill2 from './whatbill-2'
import whatbill3 from './whatbill-3'
import whatbill4 from './whatbill-4'

export default function AppDetail({ details, isMobile, browserDimensions }) {

  const pathToImages = (path) => {
    switch (path) {
      case "./whatbill-1":
        return whatbill1;
      case "./whatbill-2":
        return whatbill2;
      case "./whatbill-3":
        return whatbill3;
      case "./whatbill-4":
        return whatbill4;
      default:
        return whatbill1
    }
  }




  return (
    <div style={{ height: "100%"}}>
      <Controller>

        {details.map((detail, index) => (
          <Scene duration={browserDimensions.height * 4} key={index}
            triggerHook="onLeave" pin>
            {(progress) => (
              <div style={{paddingTop: 60}}>
                 {isMobile && (
                  
                  <div
                    style={{
                      zIndex: 100,
                      fontSize: isMobile ? "1.5rem" : "4rem",
                      flex: 1,
                      fontWeight: "bold",
                      color: "#fff",
                      textShadow: "0px 0px 10px rgba(0,0,0,0.5)",
                      marginLeft: 10,
                      textAlign: "center",
                      marginBottom: 20,
                      y: 0,
                    }}
                  >
              
                  {detail.caption}
             
            </div>
          )}
              <div
                style={{
                  ...gradients[index],
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: "center",
                  width: isMobile ? "95%" : "100%",
                  height: isMobile ? browserDimensions.height * 0.75 : "100%",
                  borderRadius: "10px",
                  marginTop: isMobile ? 0 : browserDimensions.height * 0.05,
                  marginLeft: isMobile ? browserDimensions.width * 0.03 : 0,
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
                }}
              >
            
                {!isMobile && index % 2 === 0 && (
                  
                        <div
                          style={{
                            zIndex: 100,
                            fontSize: isMobile ? "2rem" : "4rem",
                            flex: 1,
                            fontWeight: "bold",
                            color: "#fff",
                            textShadow: "0px 0px 10px rgba(0,0,0,0.5)",
                            marginLeft: 10,
                            textAlign: "center",
                            y: 0,
                          }}
                        >
                    
                        {detail.caption}
                   
                  </div>
                )}

                <div style={{ width: isMobile ? "100%" : 400, height: isMobile ? 800 : 700 }}>
                  <ImageSequence progress={progress} images={pathToImages(detail.video)} />
                </div>
                {!isMobile && index % 2 !== 0 && (
                  <div
                    style={{
                      zIndex: 100,
                      fontSize: isMobile ? "2rem" : "4rem",
                      flex: 1,
                      fontWeight: "bold",
                      color: "#fff",
                      textShadow: "0px 0px 10px rgba(0,0,0,0.5)",
                      marginRight: isMobile ? "0" : "2rem",
                      textAlign: "center",
                    }}
                  >
                    {detail.caption}
                  </div>
                )}
             
             
              </div>
              </div>
            )}
          </Scene>
        ))}
      </Controller>
    </div>
  );
}
