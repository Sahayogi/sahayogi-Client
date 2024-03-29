import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getRaiseFunds, claimByBene, reFund } from "../../Web3Client";
import { AiOutlineNotification } from "react-icons/ai";
import { getFrInfo } from "../../Web3Client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Container = styled.div`
  position: relative;
  background-color: #111;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(
    circle,
    #3c3d3f,
    #2f3132,
    #242525,
    #191a19,
    #0d0d0c
  );
  /* background-image: linear-gradient(315deg, #000000 0%, #7f8c8d 74%); */
  color: #fff;
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
  margin-bottom: 30px;

  gap: 1rem;
`;
const Title = styled.h1`
  color: white;
  font-size: 20px;
`;

const Dbutton = styled.button`
  border: none;
  padding: 15px 30px;
  background-color: #161a1d;
  cursor: pointer;
  color: white;
  font-weight: 600;
  border-radius: 2px;
  position: relative;
  &:hover {
    background-color: grey;
  }
`;
const Rbutton = styled.button`
  border: none;
  padding: 15px 30px;
  background-color: red;
  cursor: pointer;
  color: white;
  font-weight: 600;
  border-radius: 2px;
  position: relative;
  &:hover {
    background-color: red;
  }
`;
const StatusOpen = styled.div`
  background-color: green;
  padding: 5px;
  border: none;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 20px;
`;
const StatusClosed = styled.div`
  background-color: orange;
  padding: 5px;
  border: none;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 20px;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: lightgreen;
  font-weight: bolder;
  margin-top: 5px;
`;

const Line = styled.div`
  width: 400px;
  height: 3px;
  margin-top: 20px;
  background-color: silver;
`;
const View = styled.div`
  cursor: pointer;
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
  const [dAmount, setDAmount] = useState("");
  const [count, setCount] = useState("");
  const [frData, setFrData] = useState("");
  const [claimed, setClaimed] = useState(false);
  const [refund, setRefund] = useState(false);
  const role = localStorage.getItem("role");
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

  const handleClaimByBene = (projectId) => {
    claimByBene(projectId)
      .then((tx) => {
        console.log(tx);
        setClaimed(true);
        toast.success("Claimed Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to Claim", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleRefund = (projectId) => {
    reFund(projectId)
      .then((tx) => {
        console.log(tx);
        setRefund(true);
        toast.success("Refunded Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Cannot Refund", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  const showInfo = (frId) => {
    getFrInfo(frId)
      .then((information) => {
        const message = `Donated: ${
          information.DONATED_ / 10 ** 18
        } SYT \n Goal: ${information.GOAL_ / 10 ** 18} SYT`;
        console.log(information);
        toast.info(message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <ToastContainer />
      {/* <Image src={item.description} /> */}
      <Image>
        {item.start &&
          new Date(item.start * 1000) < new Date() &&
          new Date() < new Date(item.end * 1000) && <StatusOpen />}
        {item.start && new Date(item.end * 1000) < new Date() && (
          <StatusClosed />
        )}
        <label>{item.description}</label>
      </Image>
      <Info>
        <Title>{item.projectName}</Title>
        <Title>{item.targetedArea}</Title>

        <Line></Line>
        {item.frCount && (
          <Label>
            <Label>DONATIONS</Label>
            <View
              onClick={() => {
                showInfo(item.frCount);
              }}
            >
              Click to view
            </View>
            {/* {dAmount.donated} */}
          </Label>
        )}
        {item.start && (
          <p>
            Starts at {new Date(parseInt(item.start) * 1000).toLocaleString()}
          </p>
        )}

        {item.end && (
          <p>Ends at {new Date(parseInt(item.end) * 1000).toLocaleString()}</p>
        )}
        {/* <Status>{item.frCount}</Status> */}
        {/* <ButtonRenderer item={item} /> */}
        {new Date(item.start * 1000) < new Date() &&
          new Date() < new Date(item.end * 1000) && (
            <Dbutton onClick={() => handleDonate(item.frCount)}>
              DONATE NOW
            </Dbutton>
          )}
        {!item.frCount && (
          <FundNotification>
            <Mike>
              <AiOutlineNotification />
            </Mike>

            <Notice>Fund Not Raised</Notice>
          </FundNotification>
        )}
        {role === "Beneficiary" && item.frCount && (
          <Dbutton onClick={() => handleClaimByBene(item.relateBlockProj)}>
            Claim
          </Dbutton>
        )}
        {role === "Beneficiary" && item.frCount && (
          <Rbutton onClick={() => handleRefund(item.relateBlockProj)}>
            Refund
          </Rbutton>
        )}
      </Info>
      <ToastContainer />
      
    </Container>
  );
};

export default Project;

const FundNotification = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: yellow;
`;
const Notice = styled.label`
  color: yellow;
`;
const Mike = styled.div`
  font-weight: 30px;
`;
