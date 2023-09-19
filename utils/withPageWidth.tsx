import { FC, ComponentType, useState, useEffect } from "react";

export const withPageWidth = <P extends object>(Child: ComponentType<P>): FC<P> => {

  const PageWidthContainer: FC<P> = (props) => {
    
    const [pageWidth, setPageWidth] = useState(typeof window && window.innerWidth)

    const handleResize = () => {
      setPageWidth(typeof window && window.innerWidth)
    }

    useEffect(() => {
      typeof window && window.addEventListener('resize', handleResize);

      return () => typeof window && window.removeEventListener('resize', handleResize);
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