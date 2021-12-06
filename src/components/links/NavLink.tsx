import { Link } from 'gatsby';
import styled from 'styled-components';

export const StyledNavLink = styled(Link)`
  display: block;
  font-size: 1.3rem;
  line-height: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transition};
  letter-spacing: 2px;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
