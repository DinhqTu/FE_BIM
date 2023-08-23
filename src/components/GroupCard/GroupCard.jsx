import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

import groupUser from '../../assets/image/3-final.jpg';
const { Meta } = Card;

function GroupCard() {
  return (
    <Card
      style={{
        width: 210,
      }}
      cover={<img alt="example" src={groupUser} />}
      actions={[
        <PlusOutlined key="add" />,
        <EditOutlined key="edit" />,
        <DeleteOutlined key="delete" />,
      ]}
    >
      <Meta
        avatar={<Avatar src={groupUser} />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
}

export default GroupCard;
