import { Fragment, useEffect } from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';

import DefaultLayout from './Layouts/DefaultLayout/DefaultLayout';
import SidebarLayout from './Layouts/SidebarLayout/SidebarLayout';
import { publicRoutes } from './routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout;
          if (route.Layout === null) {
            Layout = Fragment;
          } else {
            Layout = SidebarLayout;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
