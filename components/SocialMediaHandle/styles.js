import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 20%; 
  display: grid;
  grid-column-gap: 15px;
  grid-template-columns: repeat(3, auto);
  margin-bottom: 5px;
`;

export const IconContainer = styled.div`
  display: flex; 
  align-items: center;

  a { 
    color: inherit;
    font-weight: bold; 
    margin-left: 8px;
    text-decoration: none;
  }

  a, svg { 
    font-size: 20px;
  }  

  ${({ isInvert }) => isInvert && css`
    a { 
      color: #FFF;
    }
  `}
`;