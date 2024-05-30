import styled from "styled-components";

const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-image: linear-gradient(to bottom, #000000, #2d3748);
  color: #ffffff;
  border-radius: 20px / 10px;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:before {
    font-family: "Font Awesome 5 Free";
    content: "\f105"; /* example icon */
    margin-right: 0.5rem;
  }

  &:hover {
    transform: scale(1.05);
    background-color: #2d3748;
  }

  &:first-child {
    margin-top: 0;
  }
`;

export default Button;
