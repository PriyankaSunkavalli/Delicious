import React,{useState} from 'react';
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Form=styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;
    
`
const InputContainer=styled.div`
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
    width: 100%;
    padding: 20px;
    border-radius: 100px;
    margin: 0px 150px;
    input{
        width: 100%;
        background-color: black;
        padding: 5px;
        outline: none;
        border: none;
        color: white;
        margin-left: 20px;
    }
`

const Search = () => {
    const navigate=useNavigate()
    const [search,setSearch]=useState('')
    const formSubmit=(e)=>{
        e.preventDefault()
        navigate(`/search/${search}`)
    }
  return (
    <Form onSubmit={formSubmit}>
      <InputContainer>
          <FaSearch></FaSearch>
      <input placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      </InputContainer>
    </Form>
  );
}

export default Search;
