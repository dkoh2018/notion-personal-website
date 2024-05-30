import styled, { css } from "styled-components";

const commonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-image: linear-gradient(to bottom, #000000, #2d3748);
  color: #ffffff;
  border-radius: 20px / 10px;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-size: 1rem; /* Ensure consistent font size */

  &:before {
    font-family: "Font Awesome 5 Free";
    content: "\f105";
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

const StyledButton = styled.button`
  ${commonStyles}
  border: none; /* Ensure no border is added to buttons */
`;

const StyledLink = styled.a`
  ${commonStyles}
`;

interface ButtonProps {
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  href,
  target,
  rel,
  children,
}) => {
  if (href) {
    return (
      <StyledLink href={href} target={target} rel={rel}>
        {children}
      </StyledLink>
    );
  }
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
