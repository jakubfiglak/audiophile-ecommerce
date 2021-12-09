import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { IImage } from '../../../graphql/types';
import { useCartState } from '../../context/cart/useCartState';
import { formatPrice } from '../../utils/helpers';
import { NumberInput } from '../inputs/NumberInput';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledImage = styled(GatsbyImage)`
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 64px;
  flex: 0 0 64px;
`;

const StyledNameAndPriceContainer = styled.div`
  margin-left: 1.6rem;
  flex: 1;
`;

const StyledName = styled.h5`
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin: 0;
`;

const StyledPrice = styled.p`
  font-size: 1.4rem;
  line-height: 2.5rem;
  opacity: 0.5;
`;

type Props = {
  id: string;
  image: IImage;
  name: string;
  price: number;
  quantity: number;
};

export const CartItem = ({ id, image, name, price, quantity }: Props) => {
  const { addItem, removeItem } = useCartState();

  return (
    <StyledContainer>
      <StyledImage image={image.data} alt={image.alt} />
      <StyledNameAndPriceContainer>
        <StyledName>{name.split(' ')[0]}</StyledName>
        <StyledPrice>{formatPrice(price)}</StyledPrice>
      </StyledNameAndPriceContainer>
      <NumberInput
        value={quantity}
        onDecrementClick={() => removeItem({ id, quantity: 1 })}
        onIncrementClick={() =>
          addItem({ id, image, name, price, quantity: 1 })
        }
        $small
      />
    </StyledContainer>
  );
};
