import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Container, IconContainer } from "./styles";

const socialMedias = [
  {
    icon: <FaTwitter fill="#1DA1F2"/>,
    user: "@lauradotjs"
  },
  {
    icon: <FaLinkedin fill="#1DA1F2" />,
    user: "LauraBeatris"
  },
  {
    icon: <FaGithub fill="#00000" />,
    user: "LauraBeatris"
  }
]

const SocialMediaHandle = () => (
  <Container>
    {
      socialMedias.map((socialMedia, index) => (
        <IconContainer key={String(index)}>
          {socialMedia.icon}
          <span>{socialMedia.user}</span>
        </IconContainer>
      ))
    }
  </Container>
);

export default SocialMediaHandle;