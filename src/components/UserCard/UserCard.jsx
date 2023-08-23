import { Card } from 'antd';
import imageUser from '../../assets/image/final.jpg';
const { Meta } = Card;

function UserCard() {
  return (
    <Card
      hoverable
      style={{
        width: 160,
        marginBottom: 24,
      }}
      cover={<img alt="example" src={imageUser} style={{ height: 180 }} />}
    >
      <Meta title="Dinh Tu" description="Xin chào, tôi là Tú" />
    </Card>
  );
}

export default UserCard;
