import React from "react";

import { Card, CardActions, CardContent, styled } from "@material-ui/core";

import { User } from "interfaces";

const StyledCard = styled(Card)(() => ({
  margin: 10,
  width: 300,
  display: "inline-block",
  transition: "transform .5s",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.05)"
  }
}));

// We can also type our function props with a function signature
interface DefaultCardProps {
  user: User;
  onUserClicked: (user: User) => void;
}

export const DefaultCard = (props: DefaultCardProps): JSX.Element => {
  const { user, onUserClicked } = props;

  return (
    <StyledCard onClick={() => onUserClicked(user)}>
      <CardContent>
        <div>{user.name}</div>
        <br />
        <div>{`Email: ${user.email}`}</div>
        <div>{`Company: ${user.company.name}`}</div>
      </CardContent>
      <CardActions />
    </StyledCard>
  );
};
