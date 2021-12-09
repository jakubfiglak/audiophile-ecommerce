import React from 'react';
import styled from 'styled-components';
import { CartItem } from './CartItem';
import { LinkButton } from '../buttons/Button';
import { useCartState } from '../../context/cart/useCartState';
import { formatPrice } from '../../utils/helpers';
import { breakpointFrom } from '../../styles/breakpoints';

const StyledContainer = styled.div`
  margin: 2.4rem;
  padding: 3.2rem 2.8rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${breakpointFrom('tablet')} {
    position: absolute;
    width: 377px;
    top: 3rem;
    right: 4rem;
    padding: 3.2rem;
  }

  ${breakpointFrom('desktop')} {
    top: 3.6rem;
    right: 16.5rem;
  }
`;

const StyledHeadingContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeading = styled.h4`
  font-size: 1.8rem;
  line-height: 2.5rem;
  letter-spacing: 1.3px;
`;

const StyledButton = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.5rem;
  line-height: 2.5rem;
  opacity: 0.5;
  text-decoration: underline;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &[disabled] {
    cursor: auto;
  }

  :not([disabled]) :hover {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;

const StyledItemsContainer = styled.div`
  margin: 3.2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.4rem;
`;

const StyledTotal = styled.p`
  text-transform: uppercase;
  opacity: 0.5;
`;

const StyledPrice = styled.p`
  font-size: 1.8rem;
  line-height: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const StyledLinkButton = styled(LinkButton)`
  width: 100%;
`;

export const Cart = () => {
  const { items, clearCart, totalPrice } = useCartState();

  return (
    <StyledContainer>
      <StyledHeadingContainer>
        <StyledHeading>Cart ({items.length})</StyledHeading>
        <StyledButton
          type="button"
          onClick={clearCart}
          disabled={items.length === 0}
        >
          Remove all
        </StyledButton>
      </StyledHeadingContainer>
      <StyledItemsContainer>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </StyledItemsContainer>
      <StyledTotalContainer>
        <StyledTotal>Total</StyledTotal>
        <StyledPrice>{formatPrice(totalPrice)}</StyledPrice>
      </StyledTotalContainer>
      <StyledLinkButton label="Checkout" to="/" />
    </StyledContainer>
  );
};
