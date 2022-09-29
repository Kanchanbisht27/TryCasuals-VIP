import React from "react";
import C from "./c";

function B(props){
    return(
        <div className="p-5 bg-green-500">
            <C {...props} ></C>

        </div>
    )
}
export default B;