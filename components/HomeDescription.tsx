import styled from "styled-components";
import { ReactNode } from "react";

interface HomeDescriptionProps {
  children: ReactNode;
}

const DescriptionText = styled.p`
  font-size: 1.125rem; /* Matches your original text size */
  color: #4a5568; /* Same color as text-gray-700 */
  margin-top: 1rem;
  line-height: 1.6; /* Improved readability */
`;

const HomeDescription = ({ children }: HomeDescriptionProps) => {
  return <DescriptionText>{children}</DescriptionText>;
};

export default HomeDescription;
