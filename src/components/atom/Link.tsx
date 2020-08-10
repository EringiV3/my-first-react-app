// 不要かも

import React, { FC } from 'react';
import { Link as StyledLink } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

type linkProps = { to: string; label: string };
const Link: FC<linkProps> = (props) => {
  const { to, label } = props;
  return (
    <StyledLink
      component={RouterLink}
      to={to}
      underline="none"
      color="textSecondary"
    >
      {label}
    </StyledLink>
  );
};

export default Link;
