import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { LayoutContentWrapper } from '../layout/LayoutContentWrapper';
import { FooterDataQuery } from '../../../graphql/generated-types';
import { StyledNavLink } from '../links/NavLink';
import FacebookIcon from '../../assets/svg/icon-facebook.inline.svg';
import TwitterIcon from '../../assets/svg/icon-twitter.inline.svg';
import InstagramIcon from '../../assets/svg/icon-instagram.inline.svg';
import { breakpointFrom } from '../../styles/breakpoints';

const StyledContainer = styled.footer`
  background: ${({ theme }) => theme.colors.veryDarkGray};
  color: ${({ theme }) => theme.colors.white};
`;

const StyledInnerWrapper = styled.div`
  padding: 5.2rem 0 3.8rem;
  text-align: center;
  position: relative;

  ${breakpointFrom('tablet')} {
    padding: 6rem 0 4rem;
    text-align: left;
  }
`;

const StyledDecoration = styled.div`
  width: 101px;
  height: 4px;
  background: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  ${breakpointFrom('tablet')} {
    left: 0;
    transform: translateX(0);
  }
`;

const StyledLogoAndNavContainer = styled.div`
  ${breakpointFrom('desktop')} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledLogo = styled.img`
  margin: 0 auto;

  ${breakpointFrom('tablet')} {
    margin: 0;
  }
`;

const StyledNavList = styled.ul`
  list-style: none;
  margin: 4.8rem 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  ${breakpointFrom('tablet')} {
    flex-direction: row;
    gap: 3.4rem;
    margin: 3.2rem 0;
  }

  ${breakpointFrom('desktop')} {
    margin: 0;
  }
`;

const StyledParagraph = styled.p`
  opacity: 0.5;
  margin: 4.8rem 0;

  ${breakpointFrom('tablet')} {
    margin: 3.2rem 0 8rem;
  }

  ${breakpointFrom('desktop')} {
    width: 540px;
    margin: 3.6rem 0 5.6rem;
  }
`;

const StyledCopy = styled.p`
  margin-bottom: 4.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  opacity: 0.5;

  ${breakpointFrom('tablet')} {
    margin-bottom: 0;
  }
`;

const StyledCopyAndIconsContainer = styled.div`
  ${breakpointFrom('tablet')} {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledIconsContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;

  svg {
    :hover path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  path {
    transition: ${({ theme }) => theme.transition};
  }

  ${breakpointFrom('desktop')} {
    margin-top: -126px;
  }
`;

export const Footer = () => {
  const data = useStaticQuery<FooterDataQuery>(graphql`
    query FooterData {
      sanityGlobalData {
        logo {
          asset {
            url
          }
        }
        footerCopy
      }
      allSanityCategory(sort: { fields: orderRank, order: ASC }) {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);

  const logo = data.sanityGlobalData.logo.asset.url;
  const { footerCopy } = data.sanityGlobalData;
  const categories = data.allSanityCategory.nodes;

  return (
    <StyledContainer>
      <LayoutContentWrapper>
        <StyledInnerWrapper>
          <StyledDecoration />
          <StyledLogoAndNavContainer>
            <StyledLogo src={logo} alt="Audiophile logo" />
            <nav>
              <StyledNavList>
                <li>
                  <StyledNavLink to="/">home</StyledNavLink>
                </li>
                {categories.map(({ id, slug, name }) => (
                  <li key={id}>
                    <StyledNavLink to={`/category/${slug.current}`}>
                      {name}
                    </StyledNavLink>
                  </li>
                ))}
              </StyledNavList>
            </nav>
          </StyledLogoAndNavContainer>
          <StyledParagraph>{footerCopy}</StyledParagraph>
          <StyledCopyAndIconsContainer>
            <StyledCopy>Copyright 2021. All Rights Reserved.</StyledCopy>
            <StyledIconsContainer>
              <a
                href="https://www.facebook.com"
                aria-label="Go to Audophile's Facebook page"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Go to Audophile's Twitter page"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Go to Audophile's Instagram page"
              >
                <InstagramIcon />
              </a>
            </StyledIconsContainer>
          </StyledCopyAndIconsContainer>
        </StyledInnerWrapper>
      </LayoutContentWrapper>
    </StyledContainer>
  );
};
