import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  width: 150px;
  line-height: 50px;
  margin: 10px 20px;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  color: black;
  background: white;
  border-radius: 10px;
  transition: 500ms;
  :hover {
    background: #72b3a5;
    box-shadow: 1px 2px 80px 5px rgba(184, 222, 224, 1);
    color: #031233;
  }
`;
