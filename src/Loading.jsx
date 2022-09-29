import React from "react";
import {ImSpinner10} from "react-icons/im";


function Loading() {
return <div className="grow text-indigo-700 text-3xl flex items-center justify-center  ">
<ImSpinner10 className="animate-spin text-5xl"/></div>  
}

export default Loading;


//=> agar loading wala icon ko spin krna h tho class lagani padegi ya className="animate-spin"