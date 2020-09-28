import React from "react";

interface Props {
  user: { name: string; email: string };
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <strong>{user.name}</strong>
      <br />
      <strong>{user.email}</strong>
      <br />
      <br />
    </div>
  );
};

export default User;
