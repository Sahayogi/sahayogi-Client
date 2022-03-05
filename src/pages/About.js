import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/sahayogi.png';
import axios from 'axios';

const Container = styled.div`
  min-height: calc(100vh - 80px);
  background-image: radial-gradient(
    circle,
    #3c3d3f,
    #2f3132,
    #242525,
    #191a19,
    #0d0d0c
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  @media only screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Description = styled.label`
  color: white;
`;
const Photo = styled.img`
  height: 80px;
  object-fit: cover;
  display: flex;
  justify-content: center;
`;
const Supply = styled.div`
  color: white;
  display: flex;
`;
const SupplyC = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(102, 101, 101);
`;
const Users = styled.div`
  color: white;
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 10px;
  justify-content: center;
  align-items: center;
`;
const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 150px;
  margin: 0px 10px;
  padding: 60px;
  border-radius: 1rem;
  cursor: pointer;
  background-color: rgb(102, 101, 101);
  box-shadow: 15px 19px 11px -6px rgba(237, 230, 230, 0.75);
  -webkit-box-shadow: 15px 19px 11px -6px rgba(237, 230, 230, 0.75);
  -moz-box-shadow: 15px 19px 11px -6px rgba(237, 230, 230, 0.75);
`;
const ItemName = styled.label`
  font-size: 20px;
`;
const Count = styled.label`
  padding-top: 10px;
  text-align: center;
  font-size: 20px;
  color: white;
`;

const About = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState(false);
  const fetchPosts = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.get(
        'http://localhost:5005/api/info/about',
        config
      );
      // console.log(data);
      // console.log(data.success);
      // console.log(data.data);
      setData(data.data);
      // setPosts(data.data);
      // console.log('posts:', posts);
      // setLoading(false);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <Container>
      <Header>
        <Photo src={logo} alt='' />
        <Description>CASH AND VOUCHER ASSISTANCE USING BLOCKCHAIN</Description>
      </Header>
      <Supply>
        <SupplyC>
          {error && { error }}
          <ItemName>total supply</ItemName>
          <Count>5</Count>
        </SupplyC>
      </Supply>
      <Users>
        <Item>
          <ItemName>VENDOR</ItemName>
          <Count>{data.vendors}</Count>
        </Item>
        <Item>
          <ItemName>Projects</ItemName>
          <Count>{data.projects}</Count>
        </Item>
        <Item>
          <ItemName>Bank</ItemName>
          <Count>{data.banks}</Count>
        </Item>
        <Item>
          <ItemName>Beneficiary</ItemName>
          <Count>{data.beneficiaries}</Count>
        </Item>
      </Users>
    </Container>
  );
};

export default About;
