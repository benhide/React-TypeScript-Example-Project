import React, { useState } from "react";

import { Paper, styled } from "@material-ui/core";

import { UserCard } from "components/UserCard";
import { DefaultCard } from "components/DefaultCard";

import { User } from "interfaces";

const StyledPaper = styled(Paper)(({ theme }) => ({
  margin: 20,
  padding: 10,
  backgroundColor: theme.palette.background.default
}));

// Rather than PropTypes we can use interfaces
interface CardListProps {
  users: User[];
}

export const CardList = (props: CardListProps): JSX.Element => {
  const { users } = props;

  // Typing our 'useState' hook lets us catch errors early
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onUserClicked = (user: User): void => {
    setSelectedUser(user);
  };

  // Typing helps us see errors earlier
  const onClicked = (user: number): boolean => {
    setSelectedUser(user);
  };

  return (
    <>
      <UserCard user={selectedUser} />
      <StyledPaper>
        {users.map((user) => (
          <DefaultCard
            key={user.id}
            user={user}
            onUserClicked={onUserClicked}
            // Passing props which don't exist shows us errors
            onSomeClickedCallback={onClicked}
          />
        ))}
      </StyledPaper>
    </>
  );
};
