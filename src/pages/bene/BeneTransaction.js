import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Beneficiary from "./Beneficiary";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { AiOutlineEye } from "react-icons/ai";
import { sliceWalletAddress } from "../../components/constants/Constant";
const ADDRESS = "0xb780522e0941142AA1AA97c6b58440fC618d1C56";
const apikey = "C1ZSWKRYWAZNKY6P2RX7BTTTGCAQ4QS4KJ";
const endpoints = "https://api-ropsten.etherscan.io/api";

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
const TransactionTable = styled.div`
  height:100%;
  width: 100%;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const MainLoader = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  /* border: 2px solid white; */
`;

const Loader = styled.div`
  flex: 1;
  margin: auto;
  margin-top: 200px;
  margin-bottom: 200px;
  height: calc(100vh);
  border: 16px solid #f3f3f3;
  border-top: 16px solid black;
  border-radius: 50%;
  width: 130px;
  height: 130px;
  animation: spin 0.5s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const BeneTransaction = () => {
  const [from, setFrom] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleEtherScan = async () => {
    const etherscan = await axios.get(
      endpoints +
        `?module=account&action=txlist&address=${ADDRESS}&apikey=${apikey}`
    );
    let { result } = etherscan.data;
    setFrom(result);
    setLoading(false);
    console.log(from);
  };

  useEffect(() => {
    handleEtherScan();
  }, []);
  return (
    <Container>
      <Beneficiary />
      <TransactionTable>
        {loading && (
          <div>
            <MainLoader>
              <Loader></Loader>
            </MainLoader>
          </div>
        )}
        {!loading && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>T-Index</TableCell>
                  <TableCell align="left">B-Hash</TableCell>
                  <TableCell align="left">B-Num</TableCell>
                  <TableCell align="left">From</TableCell>
                  <TableCell align="left">To</TableCell>
                  <TableCell align="left">Tokens</TableCell>
                  <TableCell align="left">Timestamp</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {from.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <AiOutlineEye onClick={() => alert(row.blockHash)} />
                      {row.transactionIndex}
                    </TableCell>
                    <TableCell align="left">
                      {sliceWalletAddress(row.blockHash)}
                    </TableCell>
                    <TableCell align="left">{row.blockNumber}</TableCell>

                    <TableCell align="left">
                      {sliceWalletAddress(row.from)}
                    </TableCell>
                    <TableCell align="left">
                      {sliceWalletAddress(row.to)}
                    </TableCell>
                    <TableCell align="left">{row.token}</TableCell>

                    <TableCell align="left">
                      {new Date(row.timeStamp * 1000).toLocaleString()}
                    </TableCell>
                    <TableCell align="center">
                      <button className="statusButton">
                        {row.isError == 0 ? "Success" : "Failed"}
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </TransactionTable>
    </Container>
  );
};

export default BeneTransaction;
