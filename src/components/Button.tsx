import React from 'react'
import styled from 'styled-components'


type Props = {
  label: string;
  position?: [x: number, y: number];
  width?: number;
};


const StyledButton = styled.div`
    background: #e48900;
    text-align: center;
    border:none;
    border-radius: 8px;
    padding: 25px;
    
`;

 const Button: React.FC<Props> = ({label,position,width}) => {
   const styles = {};

    if (position) {
        styles.gridRowStart = position[0];
    }

  return (<>
    <StyledButton>{label}</StyledButton>
  </>)
}


export default Button