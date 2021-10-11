import React, { useState, useEffect } from "react";

import { Paper, styled, Typography } from "@material-ui/core";

import { CardList } from "components/CardList";

import { User } from "interfaces";

const StyledPaper = styled(Paper)(() => ({
  textAlign: "center",
  padding: 10
}));

export const PageComponent = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      // If we type our interface correctly we can use them
      // to type the api response correctly as well ':User[]'
      .then((fetchedUsers: User[]) => setUsers(fetchedUsers));
  }, []);

  return (
    <StyledPaper>
      <Typography gutterBottom color="primary" variant="h2" align="center">
        Users:
      </Typography>
      <CardList users={users} />
    </StyledPaper>
  );
};
