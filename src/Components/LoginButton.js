import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = ({loginWithRedirect}) => {
  return <button onClick={loginWithRedirect}>Log in</button>;
}
