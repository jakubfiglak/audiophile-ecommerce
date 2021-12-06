import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { StyledNavLink } from '../links/NavLink';
import { DesktopMenuQuery } from '../../../graphql/generated-types';

const StyledContainer = styled.div`
  display: flex;
  gap: 3.4rem;
`;

export type Props = {
  className?: string;
};

export const DesktopMenu = ({ className }: Props) => {
  const data = useStaticQuery<DesktopMenuQuery>(graphql`
    query DesktopMenu {
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

  const categories = data.allSanityCategory.nodes;

  return (
    <StyledContainer className={className}>
      <li>
        <StyledNavLink to="/">home</StyledNavLink>
      </li>
      {categories.map(({ id, slug, name }) => (
        <li key={id}>
          <StyledNavLink to={`/category/${slug.current}`}>{name}</StyledNavLink>
        </li>
      ))}
    </StyledContainer>
  );
};
