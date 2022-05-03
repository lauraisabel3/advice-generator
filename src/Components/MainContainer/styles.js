import styled from "@emotion/styled";
import { FiRefreshCw } from 'react-icons/fi';
import { breakPoints as bp } from "../../styles/break-points";

const Container = styled.div `
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 20px;
  background-color: hsl(193, 38%, 86%);
  box-shadow: 12px 12px 40px -6px hsl(205, 38%, 86%);
`

const TextTitle = styled.h1 `
  text-align: center;
  font-size: 1.4rem;
  color: hsl(218, 23%, 16%);

  ${bp.desktop} {
    font-size: 1.6rem;
  }
`

const TextContent = styled.p `
  text-align: center;
  margin: 8px 0 20px 0;
  font-size: 1.6rem;
  color: hsl(217, 19%, 24%);

  ${bp.desktop} {
    font-size: 2rem;
  }
`


const Button = styled.button`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: hsl(150, 100%, 66%);
  border: none;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`

const IconButton = styled(FiRefreshCw) `
  width: 40px;
  height: 40px;
  color: white;
  transition: 0.5s;


`

export { Container, TextTitle, TextContent, Button, IconButton }