import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from "../Header/Header";


export const SharedLayout = () => {
  return (
    <>
      <Header/>         
      <Suspense fallback={<div> Loading ...</div>}>
      <Outlet />
      </Suspense>
    </>
  );
};

