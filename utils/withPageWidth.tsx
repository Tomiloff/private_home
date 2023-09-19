import { FC, ComponentType, useState, useEffect } from "react";

export const withPageWidth = <P extends object>(Child: ComponentType<P>): FC<P> => {

  const PageWidthContainer: FC<P> = (props) => {
    
    const [pageWidth, setPageWidth] = useState(0)

    const handleResize = () => {
      setPageWidth(window.innerWidth)
    }

    useEffect(() => {
      setPageWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, [pageWidth]);
   
    return (
      <Child 
        pageWidth={pageWidth}
        {...props} 
      />
    )
  };

  return PageWidthContainer;
};