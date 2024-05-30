import React from "react";
import styled from "styled-components";
import {
  GithubLink,
  TwitterLink,
  LinkedInLink,
  InstagramLink,
} from "../keys/links_and_stuff";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  background-color: #ffffff;
  color: #4a4a4a;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  border-top: 1px solid #eaeaea;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const LinkGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #4a4a4a;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #000000;
  }
`;

const SocialGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: #4a4a4a;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #000000;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <LinkGroup>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Projects</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </LinkGroup>
        <SocialGroup>
          <SocialLink href={GithubLink}>
            <i className="fab fa-github"></i>
          </SocialLink>
          <SocialLink href={TwitterLink}>
            <i className="fab fa-twitter"></i>
          </SocialLink>
          <SocialLink href={LinkedInLink}>
            <i className="fab fa-linkedin"></i>
          </SocialLink>
          <SocialLink href={InstagramLink}>
            <i className="fab fa-instagram"></i>
          </SocialLink>
        </SocialGroup>
        <Copyright>© David Oh 2018 - 2024</Copyright>
      </FooterContent>
    </FooterContainer>
  );
}
