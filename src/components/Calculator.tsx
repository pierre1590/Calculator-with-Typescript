import React from 'react'
import styled from 'styled-components'
import Button, {ButtonType} from './Button'



const Container = styled.div`
    flex: 1;
`;

const Grid = styled.div`
    display: grid;    
    grid-template-columns: repeat(4, 80px);
    grid-template-rows:120px repeat(5, 80px);
    grid-gap: 10px;
    margin-top: 80%;
`;

const Display = styled.div`
    grid-column-end: span 4;
    background: #000;
    text-align: right;
    border:none;
    border-radius: 20px;
    font-size: 6.2em;
    color: #fff;
`

const Calculator = () => {
  return (
    <Container>
      <Grid>
        <Display >45</Display>
        <Button type={ButtonType.CLEAR} label="AC" position={[0,1]} />
        <Button type={ButtonType.PERCENT} label="%" position={[2,1]} />
        <Button type={ButtonType.PLUS_MINUS} label="+/-" position={[1,1]} />
        <Button type={ButtonType.OPERATOR} label="÷" position={[3,1]} />
        <Button type={ButtonType.OPERATOR} label="x" position={[3,2]} />
        <Button type={ButtonType.OPERATOR} label="-" position={[3,3]} />
        <Button type={ButtonType.OPERATOR} label="+" position={[3,4]} />
        <Button type={ButtonType.NUMBER} label="9" position={[2,2]} />
        <Button type={ButtonType.NUMBER} label="8" position={[1,2]} />
        <Button type={ButtonType.NUMBER} label="7" position={[0,2]} />
        <Button type={ButtonType.NUMBER} label="6" position={[2,3]} />
        <Button type={ButtonType.NUMBER} label="5" position={[1,3]} />
        <Button type={ButtonType.NUMBER} label="4" position={[0,3]} />  
        <Button type={ButtonType.NUMBER} label="3" position={[2,4]} />
        <Button type={ButtonType.NUMBER} label="2" position={[1,4]} />
        <Button type={ButtonType.NUMBER} label="1" position={[0,4]} />  
        <Button type={ButtonType.NUMBER} label="0" position={[0,5]} width={2}/>
        <Button type={ButtonType.DOT} label="," position={[2,5]} />
        <Button type={ButtonType.EQUAL} label="=" position={[3,5]} />
      </Grid>
    </Container>
  );
};

export default Calculator;
