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
  TablePagination,
  TableRow,
  Paper,
  TableSortLabel,
} from "@mui/material";
import { AiOutlineEye } from "react-icons/ai";
import { sliceWalletAddress } from "../../components/constants/Constant";
const ADDRESS = "0x1C92c66caA1040195270909bA44D3EA0c9322b6E";
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
  height: 100%;
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
const Status = styled.div`
  height: 20px;
  width: 35px;
  justify-content: center;
  align-content: center;
  text-align: center;
  background-color: green;
  border: none;
  color: white;
  /* padding: 5px; */
  /* border: 2px solid white; */
`;
const StatusOut = styled.div`
  height: 20px;
  width: 35px;
  justify-content: center;
  align-content: center;
  text-align: center;
  background-color: red;
  border: none;
  color: white;
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
  const [loading, setLoading] = useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleEtherScan = async () => {
    const etherscan = await axios.get(
      endpoints +
        `?module=account&action=tokentx&address=${ADDRESS}&apikey=${apikey}`
    );
    let { result } = etherscan.data;
    setFrom(result);
    setLoading(false);
    console.log("from::", from);
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
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 600 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>

                    <TableCell align="left" style={{ minWidth: 170 }}>
                      Block Hash
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: 170 }}>
                      TimeStamp
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: 170 }}>
                      From
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ minWidth: 50 }}
                    ></TableCell>
                    <TableCell align="left" style={{ minWidth: 170 }}>
                      To
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: 100 }}>
                      Tokens
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {from
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.blockHash}
                        >
                          <TableCell align="left">
                            <AiOutlineEye
                              onClick={() => alert(row.blockHash)}
                            />
                          </TableCell>
                          <TableCell align="left">
                            {sliceWalletAddress(row.blockHash)}
                          </TableCell>
                          <TableCell align="left">
                            {new Date(row.timeStamp * 1000).toLocaleString()}
                          </TableCell>
                          <TableCell align="left">
                            {sliceWalletAddress(row.from)}
                          </TableCell>
                          <TableCell align="left">
                           <>
                              {" "}
                              {row.to ==
                              0x1c92c66caa1040195270909ba44d3ea0c9322b6e
                                ? <Status>IN</Status>
                                : <StatusOut>OUT</StatusOut>}
                            </>
                          </TableCell>
                          <TableCell align="left">
                            {sliceWalletAddress(row.to)}
                          </TableCell>
                          <TableCell align="left">
                            {row.value / 10 ** 18} SYT
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={from.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        )}
      </TransactionTable>
    </Container>
  );
};

export default BeneTransaction;
