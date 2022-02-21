import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Vendor from "./Vendor";
import axios from "axios";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

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
  grid-template-columns: auto auto auto;
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 35px;
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

const CopyButton = styled.button`
  padding-bottom: 20px;
  font-size: 10px;
  cursor: pointer;
  border: none;
  background: none;
  color: white;
  margin-left: 10px;
`;
const VendorInfo = () => {
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
        "http://localhost:5005/api/vendor/info",
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
      <Vendor />
      <BankInfo>
        {posts.map((post) => {
          return (
            <BankC key={post._id}>
              <h4>{post.username}</h4>
              <h4>{post.phoneNumber}</h4>
              <h4>{post.address}</h4>
              <h4>
                {post.walletAddress ? post.walletAddress : "-"}
                {post.walletAddress ? (
                  <CopyButton
                    style={{ height: "10px" }}
                    onClick={() => {
                      navigator.clipboard.writeText(post.walletAddress);
                    }}
                  >
                    <ContentCopyIcon />
                  </CopyButton>
                ) : (
                  ""
                )}
              </h4>
            </BankC>
          );
        })}
      </BankInfo>
    </Container>
  );
};

export default VendorInfo;
