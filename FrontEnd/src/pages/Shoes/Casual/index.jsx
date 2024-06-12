import React, {useEffect, useState} from "react";
import "./style.css";
import FloatingShoe from "./components/FloatingShoe";
import { Link } from "react-router-dom";
import state from "./config/voltioHelper"; 
import { proxy, useSnapshot } from "valtio";
import ManualShoe from "./components/ManualShoe";

const index = () => {
  const snap = useSnapshot(state);

return(
<>

{ 
  snap.isAuto ? <FloatingShoe />: <ManualShoe />
}
  
  
</>
)
}


export default index;
