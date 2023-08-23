import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  FolderOutlined,
  MoreOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Link } from 'react-router-dom';

import groupUser from '../../assets/image/PICTURE 4K/[191217]_TT Pedestrian_Bridge_C21.jpg';

const { Meta } = Card;
function Project(props) {
  const { layout } = props;
  return (
    <>
      {layout ? (
        <Card
          style={{
            width: 260,
          }}
          cover={
            <Link to={'/model'}>
              <img alt="example" src={groupUser} style={{ cursor: 'pointer' }} />
            </Link>
          }
          actions={
            [
              // <PlusOutlined key="add" />,
              // <EditOutlined key="edit" />,
              // <DeleteOutlined key="delete" />,
            ]
          }
        >
          <Link to={'/model'}>
            <h1 className="text-xl font-bold">Cầu Treo</h1>
          </Link>
          <Link to={'/model'}>
            <span>22/08/23</span>
          </Link>
          {/* <Meta title="Card title" description="22/08/23" style={{ cursor: 'pointer' }} /> */}
        </Card>
      ) : (
        <div className="flex justify-between border-b-2 py-2 px-4 hover:bg-[#3B5999] hover:text-white cursor-pointer">
          <div className="flex items-center gap-4">
            <FolderOutlined style={{ fontSize: 18 }} />
            <p className="font-semibold">Cầu Long Biên</p>
          </div>
          <div className="flex items-center gap-2">
            <UserOutlined />
            <span>tôi</span>
          </div>
          <div>22 thg 8, 2023</div>
          <div>136,8 MB</div>
          <MoreOutlined />
        </div>
      )}
    </>
  );
}

export default Project;
