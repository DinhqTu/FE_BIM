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
  const { showBtn, collapsed, colorBgContainer, setCollapsed } = props;
  const { Header } = Layout;
  return (
    <Header style={{ padding: 0, background: colorBgContainer, zIndex: 10 }}>
      <div className="flex justify-between ">
        <div className="flex">
          {showBtn ? (
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
          ) : (
            <div className="text-[#3B5999]  text-lg font-extrabold text-center my-4 tracking-[5px] mx-4">VT CODE</div>
          )}
          <div className="relative">
            <input
              type="search"
              name=""
              id=""
              placeholder="Tìm kiếm . . ."
              className="px-4 border border-2 hidden rounded-full h-8 focus:border-transparent md:w-[280px] md:inline-flex"
            />
            <SearchOutlined className="hidden absolute right-[14px] top-[25px] cursor-pointer lg:flex" />
          </div>
        </div>
        <div className="flex items-center mr-2 lg:w-60">
          <BellOutlined className="text-xl p-[6px] mr-[6px] cursor-pointer" />
          <DragOutlined className="text-xl p-[6px] cursor-pointer rotate-45 lg:mr-3" />
          <div className=" hidden flex-grow justify-center items-center bg-[#3b5999] h-full text-white px-4 cursor-pointer lg:flex">
            <UserOutlined className="text-xl p-2 cursor-pointer" />
            <span className="text-base  ">Dinh Tu</span>
            <DownOutlined className="ml-1 cursor-pointer" />
          </div>
          <UserOutlined className="text-xl p-2  cursor-pointer lg:hidden" />
        </div>
      </div>
    </Header>
  );
}

export default HeaderComponent;
