import axios from 'axios';
import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Wrapper=styled.div`
    margin:4rem 0rem,

`
const Card=styled.div`
    overflow: hidden;
    height: 250px;
    position: relative;
    img{
        border-radius: 20px;
        width: 100%;
        height: 100%;
        object-fit:none;

    }
    p{
        position: absolute;
        color: white;
        width: 100%;
        bottom: 5px;
        padding: 20px;
        max-width: 190px;
    }
`
const Overlay=styled.div`
    position: absolute;
    background-color: black;
    opacity: 0.4;
    width: 100%;
    height: 100%;
    border-radius: 20px;
`
const Veggie = () => {
    const api=`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_APIKEY}&number=9&tag=vegetarian`
    console.log({api})
    const [recipe,setrecipe]=useState([])
    const getData=()=>{
        let checkData=localStorage.getItem('veggie')
        if(checkData){
            setrecipe(JSON.parse(checkData))
        }
        else{
        axios.get(api)
        .then(Response=>{
            localStorage.setItem('veggie',JSON.stringify(Response.data.recipes))
            setrecipe(Response.data.recipes)
        })
        .catch(error=>console.log(error))
        }
        
    }
    useEffect(()=>{
        getData()
    },[])

    console.log({recipe})

  return (
    <div>
    <Wrapper>
    <h3>Vegetarian Pics</h3>
    <Splide options={{perPage:4 ,arrows:false, pagination:false, drag:'free', gap:'5rem'}}>
    {recipe.map((re)=>(
        <SplideSlide>
          <Card key={re.id}>
          <Overlay></Overlay>
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

export default Veggie;
