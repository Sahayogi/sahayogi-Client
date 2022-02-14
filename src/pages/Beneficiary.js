import React from "react";
import styled, { css } from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { style } from "@mui/system";

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
`;
const PaymentContainer = styled.div`
  color: white;
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
const CancelButton = styled.button`
  border: none;
  color: black;
  width: 100%;
  font-size: 20px;
  background-color: transparent;
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
  height:60vh;
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
const Title = styled.h1`
  color: white;
  padding-bottom: 20px;
`;
const Beneficiary = () => {
  const initialValues = {
    token: "",
    purpose: "",
    code:""
  };
  const validationSchema = Yup.object({
    token: Yup.number().required("required"),
    purpose: Yup.string().required("required"),
    code: Yup.string().max(6).required("required"),

  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container>
      <Title>PAYMENT TO VENDOR</Title>
      <PaymentContainer>
        <Form onSubmit={formik.handleSubmit}>
          <label htmlFor="token">Token</label>
          <FormInput
            type="number"
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
          <label htmlFor="token">Vendor-Code</label>
          <FormInput
            type="text"
            id="code"
            token="code"
            {...formik.getFieldProps("code")}
          />
          {formik.errors.code && formik.touched.code ? (
            <Error>{formik.errors.code}</Error>
          ) : null}
          <ButtonS>
            <SubmitButton type="submit">Submit</SubmitButton>
            <CancelButton type="submit">Cancel</CancelButton>
          </ButtonS>
        </Form>
      </PaymentContainer>
    </Container>
  );
};

export default Beneficiary;
