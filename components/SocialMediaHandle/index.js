import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Container, IconContainer } from "./styles";

const socialMedias = [
  {
    icon: <FaTwitter fill="#1DA1F2"/>,
    user: "@lauradotjs",
    href: "https://twitter.com/lauradotjs"
  },
  {
    icon: <FaLinkedin fill="#1DA1F2" />,
    user: "LauraBeatris",
    href: "https://www.linkedin.com/in/laurabeatris/"
  },
  {
    icon: <FaGithub fill="#00000" />,
    user: "LauraBeatris",
    href: "https://github.com/LauraBeatris"
  }
]

const SocialMediaHandle = ({ isInvert = false }) => (
  <Container>
    {
      socialMedias.map(({
        icon,
        user, 
        href, 
      }, index) => (
        <IconContainer 
          isInvert={isInvert} 
          key={String(index)}
        >
          {icon}
          <a href={href} target="_blank" rel="author">
            {user}
          </a>
        </IconContainer>
      ))
    }
  </Container>
);

export default SocialMediaHandle;