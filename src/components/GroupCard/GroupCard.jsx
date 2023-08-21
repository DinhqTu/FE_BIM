import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

function GroupCard() {
  return (
    <Card
      style={{
        width: 210,
      }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <PlusOutlined key="add" />,
        <EditOutlined key="edit" />,
        <DeleteOutlined key="delete" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
}

export default GroupCard;
