import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../constants/Constant";
import { doDonate } from "../../Web3Client";
import Project from "./Project";

const Container = styled.div`
  min-height: calc(100vh - 80px);

  display: flex;
  padding: 60px 40px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Popup = styled.div`
  height: 100px;
  width: 100px;
  z-index: 100;
  background-color: white;
  position: fixed;
`;
const Projects = ({ donate }) => {
  const [show, setShow] = useState(false);
  const [donated,setDonated]= useState(false);
  const [projectId,setProjectId]=useState("");
  const [amount,setAmount]= useState(0);
  const registerDonate = () => {
    doDonate(projectId,amount).then(tx=>{
      console.log(tx);
      setDonated(true);
    }).catch((err)=>{
      console.log(err);
    
    })
    console.log(projectId);
    console.log(amount)

  };
  const handleCross=()=>{
    setShow(false)
  }

  return (
    <>
      <Container>
        {show && (
          <Popup>
            {/* <input type="string" placeholder="id" /> */}
            <input type="string" placeholder="amount" onChange={(e)=>setAmount(e.target.value)}/>
            <button onClick={handleCross}>X</button>
            <button onClick={registerDonate}>ok</button>
          </Popup>
        )}
        {projects.map((item, index) => (
          <Project item={item} show={setShow} setProjectId={setProjectId} key={item.id} donate={donate} />
        ))}
      </Container>
    </>
  );
};

export default Projects;
