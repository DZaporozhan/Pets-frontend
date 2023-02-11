import { Outlet } from 'react-router-dom';
import React, { Component, Suspense } from 'react';
import { Header } from '../Header/Header';
import {Loader} from "../Loader/Loader"

export default class SharedLayout extends Component {
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </>
    );
  }
}
