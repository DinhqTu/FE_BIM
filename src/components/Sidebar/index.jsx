import {
  FileTextOutlined,
  UserOutlined,
  StarOutlined,
  TeamOutlined,
  FileOutlined,
  SettingOutlined,
  IdcardOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Bảng Thông Tin', '/', <FileTextOutlined />),
  getItem('Dự Án', 'du-an', <StarOutlined />, [
    getItem('Các Dự Án', 'cac-du-an', <FileOutlined />),
  ]),
  getItem('Tài Khoản', 'tai-khoan', <UserOutlined />, [
    getItem('Người Dùng', 'nguoi-dung', <UserOutlined />),
    getItem('Nhóm Người Dùng', 'nhom-nguoi-dung', <TeamOutlined />),
    getItem('Thông Tin Cá Nhân', 'thong-tin-ca-nhan', <IdcardOutlined />),
  ]),
  getItem('Thiết Lập', 'thiet-lap', <SettingOutlined />, [
    getItem('Phân Loại Công Trình', 'phan-loai-cong-trinh'),
    getItem('Phân Loại Kết Cấu', 'phan-loai-ket-cau'),
    getItem('Phân Loại Hợp Đồng', 'phan-loai-hop-dong'),
    getItem('Các Trạng Thái', 'cac-trang-thai'),
    getItem('Trạng Thái Dữ Liệu', 'trang-thai-du-lieu'),
    getItem('Bảng Màu', 'bang-mau'),
    getItem('Chọn Đối Tác', 'chon-doi-tac'),
  ]),
];

function Sidebar(props) {
  const { collapsed } = props;
  const navigate = useNavigate();
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        minWidth: 224,
        maxWidth: 224,
        width: 224,
        flex: '0 0 224px',
        '!important': true,
      }}
    >
      <div className="text-white text-lg font-extrabold text-center m-4 tracking-[5px] ">
        VT CODE
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['/']}
        style={{
          height: '100vh',
        }}
        items={items}
        onClick={(key) => {
          navigate(key.key);
        }}
      />
    </Sider>
  );
}

export default Sidebar;
