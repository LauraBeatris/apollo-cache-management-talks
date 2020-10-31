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

  span { 
    font-weight: bold; 
    margin-left: 8px;
  }

  span, svg { 
    font-size: 20px;
  }  

  ${({ isInvert }) => isInvert && css`
    span { 
      color: #FFF;
    }
  `}
`;