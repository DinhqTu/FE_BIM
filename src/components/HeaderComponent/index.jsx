import { Button, Layout } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  DragOutlined,
  UserOutlined,
  DownOutlined,
  SearchOutlined,
} from '@ant-design/icons';
function HeaderComponent(props) {
  const { collapsed, colorBgContainer, setCollapsed } = props;
  const { Header } = Layout;
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <div className="flex justify-between">
        <div className="flex">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={setCollapsed}
            style={{
              fontSize: '20px',
              width: 64,
              height: 64,
              transform: 'translateY(-3px)',
            }}
          />
          <div className="relative">
            <input
              type="search"
              name=""
              id=""
              placeholder="Tìm kiếm . . ."
              className="px-4 border border-2  rounded-full w-[280px] h-8 "
            />
            <SearchOutlined
              style={{ position: 'absolute', right: 14, top: 25, cursor: 'pointer' }}
            />
          </div>
        </div>
        <div className="flex items-center w-60">
          <BellOutlined
            style={{ fontSize: '20px', padding: 6, marginRight: 6, cursor: 'pointer' }}
          />
          <DragOutlined
            style={{
              fontSize: '20px',
              padding: 6,
              marginRight: 12,
              cursor: 'pointer',
              rotate: '45deg',
            }}
          />
          <div className="flex flex-grow justify-center items-center bg-[#0c3f70] h-full text-white px-4 cursor-pointer ">
            <UserOutlined style={{ fontSize: '20px', padding: 8 }} />
            <span className="text-base  ">Dinh Tu</span>
            <DownOutlined style={{ marginLeft: 4 }} />
          </div>
        </div>
      </div>
    </Header>
  );
}

export default HeaderComponent;
