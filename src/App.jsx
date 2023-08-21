import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';

import Sidebar from './components/Sidebar';
import HeaderComponent from './components/HeaderComponent';
import { publicRoutes } from './routes';
import './App.css';

const { Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSetCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <BrowserRouter>
      <Layout>
        <Sidebar collapsed={collapsed} />
        <Layout>
          <HeaderComponent
            collapsed={collapsed}
            colorBgContainer={colorBgContainer}
            setCollapsed={handleSetCollapsed}
          />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Page />} />;
              })}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
