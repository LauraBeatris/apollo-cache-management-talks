import React from "react"; 

import SocialMediaHandle from "../SocialMediaHandle";
import { FooterContainer } from "./styles";

const Layout = ({ children, showFooter = true }) => (
  <>
    {children}

    {
      showFooter && (
        <FooterContainer>
          <SocialMediaHandle />
        </FooterContainer>
      )
    }
  </>
);

export default Layout;