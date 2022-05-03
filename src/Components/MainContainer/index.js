
import React, { useEffect, useState } from "react";
import { Container, TextTitle, TextContent, IconFrame, Button, IconButton} from "./styles";
import {ImgFrame} from '../../assets/icon-music.svg';

const MainContainer = () => {

  const [info, setInfo] = useState({});

  const [newInfo, setNewInfo] = useState(info)
 
  useEffect(() => {
    const getAdvice = async(url) => {
      let res= await fetch(url),
      json= await res.json();
      //  console.log('Esta es la primera vez de json', json.slip.id)
      let info = {
       id: json.slip.id,
       content: json.slip.advice,
      }
        setInfo(info)
      
    }
    getAdvice('https://api.adviceslip.com/advice');
    
  },
  [newInfo])

  const handleClick = () => {
    setNewInfo(info)
  }
  

  return (
    <Container>
      <TextTitle>Advice #{info.id}</TextTitle>
      <TextContent>{info.content}</TextContent>
      <Button onClick={handleClick} >
        <IconButton></IconButton>
      </Button>
    </Container>
  )
}

export default MainContainer