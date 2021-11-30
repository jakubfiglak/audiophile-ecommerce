import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { LayoutContentWrapper } from '../layout/LayoutContentWrapper';
import { DesktopMenu } from '../menu/DesktopMenu';
import { MobileMenu } from '../menu/MobileMenu';
import CartIcon from '../../assets/svg/icon-cart.svg';
import Logo from '../../assets/svg/logo.svg';
import { breakpointFrom } from '../../styles/breakpoints';
import { MenuToggle } from '../menu/MenuToggle';

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.darkGray};
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
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

const StyledMobileMenuContainer = styled(motion.div)`
  overflow: hidden;
  background: ${({ theme }) => theme.colors.blackTransparent};
  position: fixed;
  width: 100%;
  top: 90;
  left: 0;
  height: calc(100vh - 90px);
`;

const StyledMobileMenu = styled(MobileMenu)`
  ${breakpointFrom('desktop')} {
    display: none;
  }
`;

const variants = {
  hidden: { opacity: 0, left: -100 },
  show: {
    opacity: 1,
    left: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    left: 800,
  },
};

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleBurgerClick = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [setIsMobileMenuOpen, isMobileMenuOpen]);

  return (
    <>
      <StyledHeader>
        <LayoutContentWrapper>
          <StyledContainer>
            <MenuToggle
              toggle={handleBurgerClick}
              isOpen={isMobileMenuOpen}
              className="hamburger"
            />
            <Logo className="logo" />
            <StyledDesktopMenu />
            <CartIcon className="cart" />
          </StyledContainer>
        </LayoutContentWrapper>
      </StyledHeader>
      <AnimatePresence>
        {isMobileMenuOpen ? (
          <StyledMobileMenuContainer
            key="mobile-menu"
            variants={variants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <StyledMobileMenu />
          </StyledMobileMenuContainer>
        ) : null}
      </AnimatePresence>
    </>
  );
};
