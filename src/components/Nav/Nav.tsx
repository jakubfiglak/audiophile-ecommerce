import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import HamburgerIcon from '../../assets/svg/icon-hamburger.svg';
import CartIcon from '../../assets/svg/icon-cart.svg';
import Logo from '../../assets/svg/logo.svg';
import { breakpointFrom } from '../../styles/breakpoints';
import { LayoutContentWrapper } from '../layout/LayoutContentWrapper';

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.darkGray};
`;

const StyledNav = styled.nav`
  padding: 3.2rem 2.4rem;
  font-size: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ${breakpointFrom('tablet')} {
    padding: 3.2rem 0;
    margin: 0 4rem;
  }

  ${breakpointFrom('desktop')} {
    padding: 3.2rem 0;
    margin: 0;
  }
`;

const StyledContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  ${breakpointFrom('tablet')} {
    .logo {
      margin-left: 4.2rem;
    }

    .cart {
      margin-left: auto;
    }
  }

  ${breakpointFrom('desktop')} {
    .logo {
      margin-left: 0;
    }
  }

  ${breakpointFrom('desktop')} {
    .hamburger {
      display: none;
    }
  }
`;

const StyledMenuItemsContainer = styled.div`
  display: none;
  margin-left: 20rem;

  li {
    :hover a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  a {
    font-size: 1.3rem;
    line-height: 2.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    transition: ${({ theme }) => theme.transition};
    letter-spacing: 2px;
  }

  ${breakpointFrom('desktop')} {
    display: flex;
    gap: 3.4rem;
  }
`;

export const Nav = () => {
  return (
    <StyledWrapper>
      <LayoutContentWrapper>
        <StyledNav>
          <StyledContainer>
            <li className="hamburger">
              <HamburgerIcon />
            </li>
            <li className="logo">
              <Logo />
            </li>
            <StyledMenuItemsContainer>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/headphones">headphones</Link>
              </li>
              <li>
                <Link to="/speakers">speakers</Link>
              </li>
              <li>
                <Link to="/earphones">earphones</Link>
              </li>
            </StyledMenuItemsContainer>
            <li className="cart">
              <CartIcon />
            </li>
          </StyledContainer>
        </StyledNav>
      </LayoutContentWrapper>
    </StyledWrapper>
  );
};
