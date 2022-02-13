import React from 'react'
import styled from 'styled-components'

export enum ButtonType {
  OPERATOR = 'OPERATOR',
  NUMBER = 'NUMBER',
  EQUAL = 'EQUAL',
  CLEAR = 'CLEAR',
  DOT = 'DOT',
  PERCENT = 'PERCENT',
  PLUS_MINUS = 'PLUS_MINUS',
}

type Props = {
  type?: ButtonType;
  label: string;
  position?: [x: number, y: number];
  width?: number;
};


const StyledButton = styled.div`
    background: #323232;
    text-align: center;
    border:none;
    border-radius: 50px;
    padding: 15px;
    font-size: 2em;
    color: #fff;
    
`;

 const Button: React.FC<Props> = ({
   type = ButtonType,
   label,
   position,
   width
  }) => {
   const styles:React.CSSProperties = {};
if (position) {
        styles.gridColumnStart = position[0]+1;
        styles.gridRowStart = position[1]+1;
    }

    if (width) {
        styles.gridColumnEnd = `span ${width}`;
    }

    if (type === ButtonType.NUMBER) {
        styles.background = '#323232';
    } else if (type === ButtonType.OPERATOR) {
        styles.background = 'orange';
    } else if (type === ButtonType.EQUAL) {
        styles.background = 'orange';
    } else if (type === ButtonType.CLEAR) {
        styles.background = 'lightgrey';
        styles.color = '#000';
    } else if (type === ButtonType.DOT) {
        styles.background = '#323232';
    } else if (type === ButtonType.PERCENT) {
        styles.background = 'lightgrey';
        styles.color = '#000';
    } else if (type === ButtonType.PLUS_MINUS) {
        styles.background = 'lightgrey';
        styles.color = '#000';
    }


  return (<>
    <StyledButton style={styles}>{label}</StyledButton>
  </>)
}


export default Button