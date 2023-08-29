import { useState } from 'react';
import { Layout, theme } from 'antd';

import HeaderComponent from '../../components/HeaderComponent';

const { Content } = Layout;

function DefaultLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSetCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout className="h-screen">
      <HeaderComponent
        showBtn={false}
        collapsed={collapsed}
        colorBgContainer={colorBgContainer}
        setCollapsed={handleSetCollapsed}
      />
      {/* <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        > */}
      {children}
      {/* </Content> */}
    </Layout>
  );
}

export default DefaultLayout;
