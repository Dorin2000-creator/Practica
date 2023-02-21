import React, { useContext, useEffect } from "react";
import { FormContext } from "../../App";
import "./main.css"

function Stepper() {
  const { activeStepIndex } = useContext(FormContext);
  useEffect(() => {
    const stepperItems = document.querySelectorAll(".step");
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });
  }, [activeStepIndex]);
  return (

    // <div className="steps">
    //   <div className="stepscolor">
    //   <div className="stepname">
    //     Client Details
    //   </div>
      
    //   <div className="stepname">
    //     Account Details
    //   </div>
      
    //   <div className="stepname">
    //     Approved
    //   </div>
    //   </div> 
    // </div>
<div className="container">	
<div className="arrow-steps clearfix">
          <div className="step "> Clien details </div>
          <div className="step"> Account details</div>
          <div className="step"> Approved </div>
          
</div>
</div>
  );
}

export default Stepper;
