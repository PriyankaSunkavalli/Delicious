import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const Grid=styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
gap: 50px;
margin: 30px 0px;
 img{
     border-radius: 20px;
 }
    
`

const Cuisine = () => {
    let params=useParams()
    const [data,setData]=useState([])
    const getData=(category)=>{
        const api=`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&number=9&cuisine=${category}`
        fetch(api)
        .then(res=>res.json())
        .then(output=>{
            console.log(output)
            setData(output.results)
        })
        .catch(error=>console.log(error))


    }
    useEffect(()=>{
        console.log(params)
        getData(params.category)
    },[params.category])
  return (
    <Grid>
     { data.map((d)=>(
          <div>
              <img src={d.image}></img>
              <h4>{d.title}</h4>
          </div>
          ))}
    </Grid>
  );
}

export default Cuisine;
