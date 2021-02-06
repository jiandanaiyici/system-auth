import React, { FC, ReactNode, useEffect } from 'react';
import MyHeader from './Header';
import { useQuery } from '../hooks';
import { Redirect } from 'react-router-dom';

interface BasicLayoutProps {
  children?: ReactNode;
}

const BasicLayout: FC<BasicLayoutProps> = ({ children }) => {
  const [run, data, loading] = useQuery('/api/queryUserInfo');

  useEffect(() => {
    run();
  }, []);

  if (data && data?.role !== 'ADMIN' && !loading) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <MyHeader />
      <main>{children}</main>
    </div>
  );
};

export default BasicLayout;
