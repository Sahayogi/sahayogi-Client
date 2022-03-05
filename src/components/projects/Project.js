import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getRaiseFunds,claimByBene } from '../../Web3Client';

const Container = styled.div`
  flex: 1;
  margin: 4px;
  position: relative;
  background-color: #111;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-image: linear-gradient(
    to left,
    #8c908c,
    #777c7a,
    #646969,
    #535657,
    #424445,
    #393b3c,
    #313233,
    #292a2b,
    #262828,
    #242626,
    #222323,
    #202120
  );

  color: #fff;
  border-radius: 2px;
  margin: 15px 15px;
  border-radius: 1rem;
`;
const Image = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 1rem 1rem 0 0;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  color: gray;
  position: relative;
`;
const Info = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 20px;

  gap:1rem;
`;
const Title = styled.h1`
  color: white;
  font-size: 20px;
`;

const Dbutton = styled.button`
  border: none;
  padding: 15px 30px;
  /* background-color: rgb(61, 60, 60); */
  background-color: black;
  cursor: pointer;
  color: white;
  font-weight: 600;
  border-radius: 2px;
  position: relative;
  &:hover {
    background-color: grey;
  }
`;
const Status = styled.div`
  background-color: #5cb85c;
  padding: 5px;
  color: white;
  border: none;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 4px;
  color: #333;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 20px;
`;
const Label = styled.label`
  color: white;
  font-weight: bolder;
  margin-top: 20px;
`;

const Line = styled.div`
  width: 320px;
  height: 5px;
  margin-top: 20px;
  /* background: #0ebeff; */
  background-color: white;
`;

const DAmount = ({ frCount, setDAmount, dAmount }) => {
  getRaiseFunds(frCount)
    .then((dAmount) => {
      setDAmount(dAmount);
    })
    .catch((err) => {
      console.log(err);
    });
  return <>{dAmount.donated}</>;
};

const Project = ({ item, donate, show, setFrcount, frcount }) => {
  const [dAmount, setDAmount] = useState('');
  const [count, setCount] = useState('');
  const [frData, setFrData] = useState('');
  const [claimed,setClaimed] = useState(false);

  const handleDonate = (_id) => {
    show((prev) => !prev);
    setFrcount(_id);
    alert(_id);
    // console.log();
  };
  const FundRaisePart = ({ fundRaisingCount }) => {
    return <p>{fundRaisingCount}</p>;

    // Get Data from blockchain equivalent to frCount and render donated amount set frData after block call

    return <></>;
  };
  // const getDonatedAmount = () => {
  //   countOfFunding().then((count) => {
  //     console.log("count:", count);
  //     setCount(count);
  //     getRaiseFunds(count)
  //       .then((dAmount) => {
  //         setDAmount(dAmount);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });
  // };

  // useEffect(() => {
  //   getDonatedAmount();
  // }, []);
  const handleClaimByBene = (projectId) => {
    claimByBene(projectId).then((tx)=>{
      console.log(tx);
      setClaimed(true);
    }).catch((err)=>{
      console.log(err);
    })

    }

  return (
    <Container>
      {/* <Image src={item.description} /> */}
      <Image>
        {item.start && <Status />}
        <label>{item.description}</label>
      </Image>
      <Info>
        <Title>{item.projectName}</Title>
        {/* <p>{item.frCount}</p> */}
        <Line></Line>
        <Label>Donations (SYT)</Label>
        {/* <p>{item.collectedToken}</p> */}
        {/* <Count></Count> */}
        <Title>
          {/* Render Donated amount using items.frCount which calls contract */}
          <FundRaisePart fundRaisingCount={item.frCount} />
          {/* {dAmount.donated} */}
        </Title>
        <Title>{item.targetedArea}</Title>
        {item.start && (
          <p>
            starts at {new Date(parseInt(item.start) * 1000).toLocaleString()}
          </p>
        )}

        {item.end && (
          <p>Ends at {new Date(parseInt(item.end) * 1000).toLocaleString()}</p>
        )}
        {/* <Status>{item.frCount}</Status> */}
        {donate && (
          <Dbutton onClick={() => handleDonate(item.frCount)}>
            DONATE NOW
          </Dbutton>
         
        )}
         <Dbutton onClick={handleClaimByBene}>
            ClaimbYbENE
          </Dbutton>
      </Info>
    </Container>
  );
};

export default Project;
