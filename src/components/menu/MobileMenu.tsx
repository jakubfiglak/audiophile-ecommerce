import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { CategoryCard } from '../category-card/CategoryCard';
import { MobileMenuQuery } from '../../../graphql/generated-types';
import { breakpointFrom } from '../../styles/breakpoints';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.8rem;
  padding: 8.4rem 2.4rem 3.5rem;
  background: ${({ theme }) => theme.colors.white};

  ${breakpointFrom('tablet')} {
    flex-direction: row;
    padding: 10.8rem 4rem 6.7rem;
    gap: 1rem;
  }
`;

const StyledCardWrapper = styled.div`
  flex: 1;
`;

type Props = { className?: string };

export const MobileMenu = ({ className }: Props) => {
  const data = useStaticQuery<MobileMenuQuery>(graphql`
    query MobileMenu {
      allSanityCategory {
        nodes {
          id
          name
          slug {
            current
          }
          image {
            alt
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const categories = data.allSanityCategory.nodes;

  return (
    <StyledContainer className={className}>
      {categories.map(({ id, name, slug, image }) => (
        <StyledCardWrapper key={id}>
          <CategoryCard
            title={name}
            linkTo={`/${slug.current}`}
            image={{ data: image.asset.gatsbyImageData, alt: image.alt }}
          />
        </StyledCardWrapper>
      ))}
    </StyledContainer>
  );
};
