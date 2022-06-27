import { useState } from "react";
import { CandidateContext } from "../../context/state";

export const CandidateContextLayout = (props: any) => {
  const [value, setValue] = useState('');

  return (
    <>
      <CandidateContext.Provider value={{id: value, setID: setValue}}>
        {props?.children ? props.children : <></>}
      </CandidateContext.Provider>
    </>
  );
}
