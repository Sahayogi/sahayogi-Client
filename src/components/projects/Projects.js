import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { projects } from "../constants/Constant";
import { doDonate } from "../../Web3Client";
import { countOfFunding } from "../../utils/getBlockchainData";
import Project from "./Project";
import axios from "axios";


const Container = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  padding: 60px 40px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const MainPopup = styled.div`
  z-index: 100;
  width: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Popup = styled.div`
  z-index: 100;
  background-color: white;
  position: absolute;
  background: #fff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  height: 60vh;
  border: 1px solid black;
  width: 40%;
  margin-top: 25%;
  background: rgb(39, 51, 89, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  display: flex;
  color: white;
  flex: 1;
  margin: auto;
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: none;
  ::placeholder {
    color: white;
    font-size: small;
  }
`;
const H1 = styled.h1`
  margin-top: 60px;
  color: #ddd;
  padding: 20px;
  font-weight: 700;
  font-family: "Roboto";
  line-height: 1.8;
  word-spacing: 10px;
  text-align: center;
`;
const Button = styled.button`
  height: 40px;
  width: auto;
  padding: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  flex: 1;
  margin: auto;
  border: none;
  align-self: center;
  border-radius: 10px;
  background-color: #24a0ed;
  color: white;
  font-size: 16px;
  font-weight: bolder;
  margin-top: 20px;
  &:hover {
    background-color: #2546bd;
  }
`;
const CloseButton = styled.button`
  position: relative;
  float: right;
  background: red;
  color: white;
  top: -5px;
  right: -5px;
  padding: 10px;
`;
const Label = styled.label`
  padding-left: 60px;
  text-align: center;
  color: white;
`;
const Projects = ({ donate }) => {
  const [show, setShow] = useState(false);
  const [donated, setDonated] = useState(false);
  const [amount, setAmount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [frcount, setFrcount] = useState("");
  

  const fetchPosts = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        "http://localhost:5005/api/project/",
        config
      );
      console.log(data);
      console.log(data.success);
      console.log(data.data);
      setPosts(data.data);
      console.log("posts:", posts);
      setLoading(false);
    } catch (err) {
      console.log(err, "error occured");
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

 

  const registerDonate = () => {

    countOfFunding().then((frcount) => {
      console.log("count:", frcount);
      setFrcount(frcount);
        alert(frcount);

         doDonate(frcount, amount)
      .then((tx) => {
        console.log(tx);
        setDonated(true);
        alert(`${amount} & ${frcount}`);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("frcount:", frcount);
    console.log(amount);
    });
  };
  const handleCross = () => {
    setShow(false);
  };

  return (
    <Container>
      {show && (
        <MainPopup>
          <Popup>
            {/* <input type="string" placeholder="id" /> */}
            <CloseButton onClick={handleCross}>X</CloseButton>
            <H1>Charity is An Act of A soft Heart.</H1>
            <Label>Enter Amount to donate</Label>
            <Input
              type="string"
              placeholder="amount"
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button onClick={registerDonate}>ok</Button>
          </Popup>
        </MainPopup>
      )}
      {posts.map((item, index) => (
        <Project
          item={item}
          show={setShow}
          setFrcount={setFrcount}
          key={item.id}
          donate={donate}
        />
      ))}
    </Container>
  );
};

export default Projects;
