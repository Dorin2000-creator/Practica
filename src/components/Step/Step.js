import React, { useContext } from "react";
import { FormContext } from "../../App";
import { Client, Account, Success } from "../Form";

function Step() {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <Client />;
      break;
    case 1:
      stepContent = <Account/>;
      break;
    case 2:
      stepContent = <Success />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Step;
