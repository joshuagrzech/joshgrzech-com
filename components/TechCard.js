import React from "react";


import Image from "next/image";

export default function TechCard({children, backgroundImage}) {
  
  return (

                <div
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, .5)",
                    backgroundImage: backgroundImage ?? "none",
                    backdropFilter: "blur(5px)",
                    color: "white",
                    borderRadius: 20,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, .25)",
                    padding: "10px",
                    margin: "10px",
                    textAlign: "center",
                    fontFamily: "Roboto",
                    textShadow: "0 0 10px rgba(0,0,0,0.5)",
                  }}
                >
                  
                  {children}
                </div>
     
  );
}
