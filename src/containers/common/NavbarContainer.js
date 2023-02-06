import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/common/Navbar';
import { logout } from '../../modules/user';

const NavbarContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return <Navbar user={user} onLogout={onLogout} />;
};

export default NavbarContainer;
