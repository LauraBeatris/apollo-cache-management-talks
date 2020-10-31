import React from "react"; 

import SocialMediaHandle from "../SocialMediaHandle";
import { FooterContainer } from "./styles";

const Layout = ({ 
  isInvert = false, 
  showFooter = true,
  children, 
}) => (
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

export default Layout;