import { ReactNode } from 'react';
import styled from "styled-components";

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
};

const Background = styled.div`
    
`
// const Background = (props: IBackgroundProps) => (
//   <div className={props.color}>{props.children}</div>
// );

export { Background };
