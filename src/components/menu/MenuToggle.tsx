import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);

const StyledButton = styled.button`
  background: none;
  border: 0;
`;

type Props = {
  toggle: () => void;
  isOpen: boolean;
  className?: string;
  disabled?: boolean;
};

export const MenuToggle = ({ toggle, isOpen, className, disabled }: Props) => (
  <StyledButton
    onClick={toggle}
    type="button"
    className={className}
    disabled={disabled}
  >
    <svg width="23" height="23" viewBox="0 0 23 20">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
        animate={isOpen ? 'open' : 'closed'}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        animate={isOpen ? 'open' : 'closed'}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
        animate={isOpen ? 'open' : 'closed'}
      />
    </svg>
  </StyledButton>
);
