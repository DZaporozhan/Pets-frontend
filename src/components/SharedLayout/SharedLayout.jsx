import { Outlet } from 'react-router-dom';
import React, { Component, Suspense } from 'react';
import { Header } from '../Header/Header';

export default class SharedLayout extends Component {
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<div> Loading ...</div>}>
          <Outlet />
        </Suspense>
      </>
    );
  }
}
