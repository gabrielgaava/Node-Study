import React from "react";

interface Props {
  user: { name: string; email: string };
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <p>
        <strong>- Nome: </strong>
        {user.name}
      </p>
      <p>
        <strong>- Email: </strong>
        {user.email}
      </p>
    </div>
  );
};

export default User;
