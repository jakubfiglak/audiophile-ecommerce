import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { DesktopMenuQuery } from '../../../graphql/generated-types';

const StyledContainer = styled.div`
  display: flex;
  gap: 3.4rem;

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
`;

export type Props = {
  className?: string;
};

export const DesktopMenu = ({ className }: Props) => {
  const data = useStaticQuery<DesktopMenuQuery>(graphql`
    query DesktopMenu {
      allSanityCategory {
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
        <Link to="/">home</Link>
      </li>
      {categories.map(({ id, slug, name }) => (
        <li key={id}>
          <Link to={slug.current}>{name}</Link>
        </li>
      ))}
    </StyledContainer>
  );
};
