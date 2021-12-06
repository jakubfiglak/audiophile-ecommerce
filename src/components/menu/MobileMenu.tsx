import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CategoryCard } from '../category-card/CategoryCard';
import { MobileMenuQuery } from '../../../graphql/generated-types';
import { breakpointFrom } from '../../styles/breakpoints';

const StyledContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6.8rem;

  ${breakpointFrom('tablet')} {
    flex-direction: row;
    gap: 1rem;
  }

  ${breakpointFrom('desktop')} {
    gap: 3rem;
  }
`;

const StyledCardWrapper = styled(motion.div)`
  flex: 1;
`;

type Props = { className?: string };

const variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

export const MobileMenu = ({ className }: Props) => {
  const data = useStaticQuery<MobileMenuQuery>(graphql`
    query MobileMenu {
      allSanityCategory(sort: { fields: orderRank, order: ASC }) {
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
        <StyledCardWrapper key={id} variants={variants}>
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
