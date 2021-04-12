import styled from "styled-components";

export const FormField = styled.div`
  padding: 10px 0;
  margin: 0 auto;
  label {
    display: inline-block;
  }
  > * {
    width: 100%;
  }
  input {
    display: block;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid red;
    border-radius: 4px;
  }
`;

export const Button = styled.button`
  background-color: blue;
  color: white;
`;
