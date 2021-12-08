import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import { LayoutContentWrapper } from '../layout/LayoutContentWrapper';
import { breakpointFrom } from '../../styles/breakpoints';

const StyledSection = styled.section`
  margin-top: 8.8rem;

  p {
    opacity: 0.5;
  }

  ${breakpointFrom('tablet')} {
    margin-top: 12rem;
  }

  ${breakpointFrom('desktop')} {
    margin-top: 16rem;
  }
`;

const StyledContainer = styled.div`
  ${breakpointFrom('desktop')} {
    display: flex;
  }
`;

const StyledFeaturesContainer = styled.article`
  flex-basis: 635px;
`;

const StyledHeading = styled.h2`
  margin-bottom: 2.4rem;
  font-size: 2.4rem;
  line-height: 3.6rem;
  letter-spacing: 0.9px;

  ${breakpointFrom('tablet')} {
    margin-bottom: 3.2rem;
    font-size: 3.2rem;
    letter-spacing: 1.2px;
    flex-basis: 50%;
  }
`;

const StyledInTheBoxContainer = styled.article`
  margin-top: 8.8rem;

  ${breakpointFrom('tablet')} {
    display: flex;
    margin-top: 12rem;
  }

  ${breakpointFrom('desktop')} {
    display: block;
    margin: 0 0 0 12.5rem;
    flex: 1;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex-basis: 50%;
`;

const StyledListItem = styled.li`
  font-size: 1.5rem;
  line-height: 2.5rem;
  display: flex;
  align-items: flex-start;

  .quantity {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    opacity: 1;
    flex: 0 0 4rem;
  }

  .name {
    opacity: 0.5;
  }
`;

type Props = {
  features: any;
  boxContent: Array<{ name: string; quantity: number }>;
};

export const ProductAdditionalInfoSection = ({
  features,
  boxContent,
}: Props) => {
  return (
    <StyledSection>
      <LayoutContentWrapper>
        <StyledContainer>
          <StyledFeaturesContainer>
            <StyledHeading>Features</StyledHeading>
            <BlockContent blocks={features} />
          </StyledFeaturesContainer>
          <StyledInTheBoxContainer>
            <StyledHeading>In the box</StyledHeading>
            <StyledList>
              {boxContent.map((item) => (
                <StyledListItem key={item.name}>
                  <span className="quantity">{item.quantity}x</span>
                  <span className="name">{item.name}</span>
                </StyledListItem>
              ))}
            </StyledList>
          </StyledInTheBoxContainer>
        </StyledContainer>
      </LayoutContentWrapper>
    </StyledSection>
  );
};
