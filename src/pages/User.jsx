import React from "react";
import { useParams } from "react-router";

const User = () => {
  const { userId } = useParams();

  return <div>Hoşgeldin, {userId}</div>;
};

export default User;
