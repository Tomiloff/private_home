import { FC, ComponentType, useState } from "react";

export const withStateModalWindow = <P extends object>(Child: ComponentType<P>): FC<P> => {

  const WithStateModalWindowContainer: FC<P> = (props) => {
    
    const [show, setShow] = useState(false);
   
    return (
      <Child 
        show={show}
        setShow={setShow}
        {...props} 
      />
    )
  };

  return WithStateModalWindowContainer;
};