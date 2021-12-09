import React, { useCallback, useState, useEffect, useRef } from 'react';
import { globalHistory } from '@reach/router';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { LayoutContentWrapper } from '../layout/LayoutContentWrapper';
import { DesktopMenu } from '../menu/DesktopMenu';
import { MobileMenu } from '../menu/MobileMenu';
import CartIcon from '../../assets/svg/icon-cart.inline.svg';
import Logo from '../../assets/svg/logo.inline.svg';
import { breakpointFrom } from '../../styles/breakpoints';
import { MenuToggle } from '../menu/MenuToggle';
import { useCartState } from '../../context/cart/useCartState';
import { Cart } from '../cart/Cart';
import { useClickOutside } from '../../hooks/useClickOutside';

type Props = {
  backgroundBlack: boolean;
};

const StyledHeader = styled.header<Props>`
  z-index: 10;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background: ${({ theme, backgroundBlack }) =>
    backgroundBlack ? theme.colors.black : theme.colors.darkGray};
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 0;
  font-size: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ${breakpointFrom('tablet')} {
    margin: 0 4rem;

    .logo {
      margin-left: 4.2rem;
    }

    .cart {
      margin-left: auto;
    }
  }

  ${breakpointFrom('desktop')} {
    margin: 0;

    .logo {
      margin-left: 0;
    }

    .hamburger {
      display: none;
    }
  }
`;

const StyledCartIconContainer = styled.div`
  position: relative;
`;

const StyledCartButton = styled.button`
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;

  path: {
    transition: ${({ theme }) => theme.transition};
  }

  :hover path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledCartItemsCount = styled(motion.span)`
  position: absolute;
  right: -10px;
  top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
`;

const StyledDesktopMenu = styled(DesktopMenu)`
  margin-left: 20rem;
  display: none;

  ${breakpointFrom('desktop')} {
    display: flex;
  }
`;

const StyledBackdrop = styled(motion.div)`
  z-index: 2;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.blackTransparent};
  position: fixed;
  width: 100%;
  top: ${({ theme }) => theme.navHeight};
  left: 0;
  min-height: ${({ theme }) => `calc(100vh - ${theme.navHeight})`};
`;

const StyledMobileMenuContainer = styled.div`
  padding: 8.4rem 2.4rem 3.5rem;
  background: ${({ theme }) => theme.colors.white};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius};

  ${breakpointFrom('tablet')} {
    padding: 10.8rem 4rem 6.7rem;
  }
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

const cartItemsCountVariants = {
  hidden: { scale: 0 },
  show: { scale: 1 },
  exit: { scale: 0 },
};

export const Header = ({ backgroundBlack }: Props) => {
  const { items } = useCartState();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  useClickOutside(mobileMenuRef, () => setIsMobileMenuOpen(false));
  useClickOutside(cartRef, () => setIsCartOpen(false));

  useEffect(() => {
    globalHistory.listen(({ action }) => {
      if (action === 'PUSH' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      if (action === 'PUSH' && isCartOpen) {
        setIsCartOpen(false);
      }
    });
  }, []);

  const handleBurgerClick = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const handleCartClick = useCallback(() => {
    setIsCartOpen(!isCartOpen);
  }, [isCartOpen]);

  return (
    <>
      <StyledHeader backgroundBlack={backgroundBlack}>
        <LayoutContentWrapper>
          <StyledContainer>
            <MenuToggle
              toggle={handleBurgerClick}
              isOpen={isMobileMenuOpen}
              className="hamburger"
              disabled={isCartOpen}
            />
            <Logo className="logo" />
            <StyledDesktopMenu />
            <StyledCartIconContainer className="cart">
              <StyledCartButton
                onClick={handleCartClick}
                disabled={isMobileMenuOpen}
                type="button"
                aria-label={isCartOpen ? 'Close cart' : 'Open cart'}
              >
                <CartIcon />
              </StyledCartButton>
              <AnimatePresence>
                {items.length > 0 ? (
                  <StyledCartItemsCount
                    variants={cartItemsCountVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {items.length}
                  </StyledCartItemsCount>
                ) : null}
              </AnimatePresence>
            </StyledCartIconContainer>
          </StyledContainer>
        </LayoutContentWrapper>
      </StyledHeader>
      <AnimatePresence>
        {isMobileMenuOpen ? (
          <StyledBackdrop
            variants={variants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <StyledMobileMenuContainer ref={mobileMenuRef}>
              <StyledMobileMenu />
            </StyledMobileMenuContainer>
          </StyledBackdrop>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {isCartOpen ? (
          <StyledBackdrop
            variants={variants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <div ref={cartRef}>
              <Cart />
            </div>
          </StyledBackdrop>
        ) : null}
      </AnimatePresence>
    </>
  );
};
