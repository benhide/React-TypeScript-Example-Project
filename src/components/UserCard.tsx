import React from 'react';

import { Card, CardContent, CardHeader, Typography, styled } from '@material-ui/core';

import { User } from 'interfaces';

import { useDate } from 'hooks/useDate';

const StyledUserCard = styled(Card)(({ theme }) => ({
  margin: 20,
  padding: 10,
  backgroundColor: theme.palette.background.default,
}));

interface UserCardProps {
  user: User | null;
}

export const UserCard = (props: UserCardProps): JSX.Element => {
  const { user } = props;

  // Because our hook is correctly typed, return typed,
  // we know what it is here as well, e.g. 'time' is a string
  // (hover over 'time' below)
  const { formattedDate, time } = useDate();

  if (!user)
    return (
      <StyledUserCard>
        <CardHeader subheader={`${formattedDate} - ${time}`} />
      </StyledUserCard>
    );

  return (
    <StyledUserCard>
      <CardHeader subheader={`${formattedDate} - ${time}`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
          {/* Trying to acces a property which does exist shows us the error ('postcode')*/}
          {user.address.postcode}
        </Typography>
        <Typography variant="body2" color="secondary">
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </Typography>
      </CardContent>
    </StyledUserCard>
  );
};
