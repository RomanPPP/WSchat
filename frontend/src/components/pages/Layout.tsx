import * as React from "react";
export default function Layout({children } : {children : React.ReactNode}){
    return (
        <div >
          <h2 >React Ws Chat</h2>
          {children}
        </div>
      );
}