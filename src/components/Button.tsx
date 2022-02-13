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
    border-radius: 50px;
    padding: 15px;
    font-size: 2em;
    
`;

 const Button: React.FC<Props> = ({label,position,width}) => {
   const styles:React.CSSProperties = {};
if (position) {
        styles.gridColumnStart = position[0]+1;
        styles.gridRowStart = position[1]+1;
    }

    if (width) {
        styles.gridColumnEnd = `span ${width}`;
    }

  return (<>
    <StyledButton style={styles}>{label}</StyledButton>
  </>)
}


export default Button