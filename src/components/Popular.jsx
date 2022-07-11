import axios from 'axios';
import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Wrapper=styled.div`
    margin:4rem 0rem,

`
const Card=styled.div`
    min-height: 25rem;
    img{
        border-radius: 20px;
    }
`
const Popular = () => {
    const api=`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_APIKEY}&number=9`
    console.log({api})
    const [recipe,setrecipe]=useState([])
    const getData=()=>{
        axios.get(api)
        .then(Response=>setrecipe(Response.data.recipes))
        .catch(error=>console.log(error))
    }
    useEffect(()=>{
        getData()
    },[])

    console.log({recipe})

  return (
    <div>
    <Wrapper>
    <h3>Popular Pics</h3>
    <Splide options={{perPage:4}}>
    {recipe.map((re)=>(
        <SplideSlide>
          <Card key={re.id}>
              <p>{re.title}</p>
              <img src={re.image}></img>
          </Card>
          </SplideSlide>
      ))}
      </Splide>
    </Wrapper>
    </div>
  );
}

export default Popular;
