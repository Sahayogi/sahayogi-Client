import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Bank from "./Bank";
import axios from "axios";

const Container = styled.div`
  min-height: 100vh;
  background-image: radial-gradient(
    circle,
    #3c3d3f,
    #2f3132,
    #242525,
    #191a19,
    #0d0d0c
  );
  display: flex;
  flex: 1;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const BankInfo = styled.div`
  margin-top: 1rem;
  width: 100%;
  padding: 20px;
  color: white;
  display: grid;
  grid-template-columns: auto auto auto  ;
  gap: 2.5rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const BankC = styled.div`
  background-color: rgb(102, 101, 101);
  flex: 1;
  height: 200px;
  width: 260px;
  margin: 0px 20px;
  padding: 60px;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 15px 19px 11px -6px rgba(237, 230, 230, 0.75);
  -webkit-box-shadow: 15px 19px 11px -6px rgba(237, 230, 230, 0.75);
  -moz-box-shadow: 15px 19px 11px -6px rgba(237, 230, 230, 0.75);
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 300px;
  }
`;

const Info = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      };
      const { data } = await axios.get(
        "http://localhost:5005/api/bank/info",
        config
      );
      console.log(data);
      console.log(data.success);
      console.log(data.data);
      setPosts(data.data);
      console.log("posts:", posts);
      //   setLoading(false);
    } catch (err) {
      console.log(err, "error occured");
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container>
      <Bank />
      <BankInfo>
        <BankC>nepal rastra</BankC>
        {posts.map((post) => {
          return <BankC key={post._id}>{post.username}</BankC>;
        })}
      </BankInfo>
    </Container>
  );
};

export default Info;
