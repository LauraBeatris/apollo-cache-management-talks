import React, { useEffect, useState } from "react"; 

import SocialMediaHandle from "../SocialMediaHandle";
import { FooterContainer } from "./styles";

const Layout = ({ 
  isInvert = false, 
  showFooter = true,
  children, 
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted){
    return null;
  }

  return (
    <>
      {children}
  
      {
        showFooter && (
          <FooterContainer>
            <SocialMediaHandle isInvert={isInvert}/>
          </FooterContainer>
        )
      }
    </>
  );
}

export default Layout;