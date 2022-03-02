import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getOwnBalance, transfer, approve } from "../Web3Client";
const Container = styled.div`
  height: 100vh;
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
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Info = styled.div`
  height: 500px;
  width: 700px;
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
const PaymentContainer = styled.div`
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: auto;
`;
const ButtonS = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const SubmitButton = styled.button`
  border: none;
  color: white;
  width: 100%;
  font-size: 20px;
  background-color: green;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
`;
const sharedStyles = css`
  background-color: grey;

  padding: 15px;
  color: white;
  margin: 10px 0 20px 0;
  border-radius: 5px;
  border: none;
  font-size: 20px;
`;
const FormInput = styled.input`
  width: 100%;
  ${sharedStyles}
`;
const Form = styled.form`
  padding: 40px;
  max-width: 700px;
  width: 100%;
  height: auto;
  background-color: white;

  label {
    color: black;
    font-size: 20px;
  }
`;
const Error = styled.h1`
  height: 40px;
  color: red;
  padding: 6px;
  font-size: 15px;
`;

const Label = styled.label`
  display: block;
  text-align: center;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ButtonBal = styled.button`
  background: #2952e3;
  color: white;
  text-transform: uppercase;
  border: none;
  padding: 20px;
  font-size: 12px;
  font-weight: 100;
  letter-spacing: 10px;
  appearance: none;
  border-radius: 4px;
  width: auto;
  cursor: pointer;
  font-weight: bolder;
  &:hover {
    background-color: #2546bd;
  }
`;
const Side = styled.div`
  display: flex;
  flex-direction: column;
`;

const Balance = styled.div`
  flex: 1;
  margin: auto;
  margin-top: 20px;
`;

const Transact = () => {
  const [transfer, setTransfer] = useState(false);
  const [balance, setBalance] = useState(0);
  const [approved, setApproved] = useState(false);
  const fetchBalance = () => {
    getOwnBalance()
      .then((balance) => {
        setBalance(balance);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleApprove = () => {
    approve()
      .then((tx) => {
        setApproved(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const initialValues = {
    token: "",
    purpose: "",
    address: "",
  };
  const validationSchema = Yup.object({
    token: Yup.string().required("required"),
    purpose: Yup.string().required("required"),
    address: Yup.string().max(42).required("required"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      const handleTransfer = (e) => {
        transfer(values.address, values.token)
          .then((tx) => {
            console.log(tx);
            setTransfer(true);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      handleTransfer();
    },
  });
  return (
    <Container>
      <Info>
        <PaymentContainer>
          <Form onSubmit={formik.handleSubmit}>
            <label htmlFor="token">Token</label>
            <FormInput
              type="string"
              id="token"
              token="token"
              {...formik.getFieldProps("token")}
            />
            {formik.errors.token && formik.touched.token ? (
              <Error>{formik.errors.token}</Error>
            ) : null}
            <label htmlFor="purpose">Purpose</label>
            <FormInput
              type="text"
              id="purpose"
              token="purpose"
              {...formik.getFieldProps("purpose")}
            />
            {formik.errors.purpose && formik.touched.purpose ? (
              <Error>{formik.errors.purpose}</Error>
            ) : null}
            <label htmlFor="token">Wallet-Address</label>
            <FormInput
              type="string"
              id="address"
              token="address"
              {...formik.getFieldProps("address")}
            />
            {formik.errors.address && formik.touched.address ? (
              <Error>{formik.errors.address}</Error>
            ) : null}
            <ButtonS>
              <SubmitButton type="submit">Submit</SubmitButton>
            </ButtonS>
          </Form>
        </PaymentContainer>
        <Side>
          <Balance>
            <ButtonBal onClick={handleApprove}>Approve</ButtonBal>
          </Balance>
          <Balance>
            <Label>your current balance is:</Label>
            <Label>{balance / 10 ** 18}</Label>
            <ButtonBal onClick={fetchBalance}>Balance</ButtonBal>
          </Balance>
        </Side>
      </Info>
    </Container>
  );
};

export default Transact;
