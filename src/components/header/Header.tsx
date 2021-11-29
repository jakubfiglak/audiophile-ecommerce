import React from 'react';
import styled from 'styled-components';
import { LayoutContentWrapper } from '../layout/LayoutContentWrapper';
import { DesktopMenu } from '../menu/DesktopMenu';
import HamburgerIcon from '../../assets/svg/icon-hamburger.svg';
import CartIcon from '../../assets/svg/icon-cart.svg';
import Logo from '../../assets/svg/logo.svg';
import { breakpointFrom } from '../../styles/breakpoints';

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.darkGray};
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 2.4rem;
  font-size: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ${breakpointFrom('tablet')} {
    padding: 3.2rem 0;
    margin: 0 4rem;

    .logo {
      margin-left: 4.2rem;
    }

    .cart {
      margin-left: auto;
    }
  }

  ${breakpointFrom('desktop')} {
    padding: 3.2rem 0;
    margin: 0;

    .logo {
      margin-left: 0;
    }

    .hamburger {
      display: none;
    }
  }
`;

const StyledDesktopMenu = styled(DesktopMenu)`
  margin-left: 20rem;
  display: none;

  ${breakpointFrom('desktop')} {
    display: flex;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <LayoutContentWrapper>
        <StyledContainer>
          <HamburgerIcon className="hamburger" />
          <Logo className="logo" />
          <StyledDesktopMenu />
          <CartIcon className="cart" />
        </StyledContainer>
      </LayoutContentWrapper>
    </StyledHeader>
  );
};
