import { useState } from 'react';
import { Layout, theme } from 'antd';

import Sidebar from '../../components/Sidebar';
import HeaderComponent from '../../components/HeaderComponent';

const { Content } = Layout;

function SidebarLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSetCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <div className={`  xl:block xl:relative ${collapsed ? 'hidden' : 'block absolute right-0 z-20 '}`}>
        <Sidebar collapsed={collapsed} />
      </div>
      <Layout style={{ width: '100%' }}>
        <HeaderComponent
          showBtn={true}
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
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default SidebarLayout;
