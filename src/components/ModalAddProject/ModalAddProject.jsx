import { useState } from 'react';
import { Modal, Card, Avatar, List } from 'antd';
import { BankOutlined, KeyOutlined, CheckSquareOutlined } from '@ant-design/icons';
import map from '../../assets/image/4-final.jpg';
const tabListNoTitle = [
  {
    label: 'Tổng quan',
    key: 'overview',
  },
  {
    label: 'Vị trí',
    key: 'location',
  },
  {
    label: 'Thành viên',
    key: 'member',
  },
  {
    label: 'Chi tiết',
    key: 'detail',
  },
];

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const contentListNoTitle = {
  overview: (
    <div>
      <div className="flex justify-between gap-x-5">
        <div className="flex-grow">
          <div className="flex items-center gap-3 my-3">
            <BankOutlined style={{ fontSize: 24 }} />
            Tên dự án
          </div>
          <input
            type="text"
            className="border w-full h-8 px-4"
            placeholder="Tên thu gọn của dự án"
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-3 my-3">
            <box-icon name="map"></box-icon>
            Địa chỉ
          </div>
          <input type="text" className="border w-full h-8 px-4" placeholder="Địa chỉ dự án" />
        </div>
      </div>
      <div className="my-3">
        <div className="flex items-center gap-3 my-3">
          <box-icon name="spreadsheet"></box-icon>
          Mô tả dự án
        </div>
        <textarea
          className="border w-full p-4"
          name=""
          id=""
          rows="4"
          placeholder="Mô tả sơ bộ về dự án"
        ></textarea>
      </div>
      <div className="my-3">
        <div className="flex items-center gap-3 my-3">
          <box-icon name="note"></box-icon>
          Ghi chú
        </div>
        <textarea
          className="border w-full p-4"
          name=""
          id=""
          rows="4"
          placeholder="Ghi chú chung về dự án"
        ></textarea>
      </div>
    </div>
  ),
  location: (
    <div>
      <div className="flex gap-x-2 items-center mb-4">
        <p> Chế độ xem bản đồ</p>
        <button className="border-2 p-1 border-[#3b5999] text-[#3b5999]  ">Road Map</button>
        <button className="border-2 p-1 border-[#3b5999] text-[#3b5999]  ">Satellite</button>
        <button className="border-2 p-1 border-[#3b5999] text-[#3b5999]  ">Hybrid</button>
        <button className="border-2 p-1 border-[#3b5999] text-[#3b5999]  ">Terrain</button>
      </div>
      <section>
        <img src={map} alt="" className="h-96 w-full" />
      </section>
    </div>
  ),
  member: (
    <div className="flex justify-between gap-x-2">
      <div className="flex-grow">
        <h1>Các Nhóm</h1>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                // description="Ant Design, a design language for background applications."
              />
            </List.Item>
          )}
        />
      </div>
      <div className="flex-grow">
        <h1>Nhóm Thuộc Dự Án</h1>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                // description="Ant Design, a design language for background applications."
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  ),
  detail: (
    <div>
      <div className="flex justify-between gap-x-4">
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <KeyOutlined /> Hợp đồng
          </div>
          <select className="border py-2 w-full" name="" id="">
            <option value="">Lựa chọn hợp đồng</option>
            <option value="">option 1</option>
            <option value="">option 2</option>
            <option value="">option 3</option>
          </select>
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <KeyOutlined /> Hợp đồng
          </div>
          <select className="border py-2 w-full" name="" id="">
            <option value="">Lựa chọn hợp đồng</option>
            <option value="">option 1</option>
            <option value="">option 2</option>
            <option value="">option 3</option>
          </select>
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <KeyOutlined /> Hợp đồng
          </div>
          <select className="border py-2 w-full" name="" id="">
            <option value="">Lựa chọn hợp đồng</option>
            <option value="">option 1</option>
            <option value="">option 2</option>
            <option value="">option 3</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="">
          <div className="my-3">
            <CheckSquareOutlined /> Ngày ký hợp đồng
          </div>
          <input className="border p-2" type="date" name="" id="" />
        </div>
        <div className=" flex-grow mx-12">
          <div className="my-3">
            <CheckSquareOutlined /> Hợp đồng với
          </div>
          <input className="border p-2 w-full" type="text" name="" id="" />
        </div>
        <div className="">
          <div className="my-3">
            <CheckSquareOutlined /> Trạng thái
          </div>
          <select className="border py-2 w-full" name="" id="">
            <option value="">Select ...</option>
            <option value="">option 1</option>
            <option value="">option 2</option>
            <option value="">option 3</option>
          </select>
        </div>
      </div>
    </div>
  ),
};

function ModalAddProject(props) {
  const { open, handleOpenModal } = props;

  const [activeTabKey, setActiveTabKey] = useState('overview');

  const onTab2Change = (key) => {
    setActiveTabKey(key);
  };
  return (
    <>
      <Modal
        title="DỰ ÁN MỚI"
        centered
        open={open}
        onOk={handleOpenModal}
        onCancel={handleOpenModal}
        width={1000}
      >
        <br />
        <Card
          style={{
            width: '100%',
            minHeight: '75vh',
          }}
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey}
          onTabChange={onTab2Change}
        >
          {contentListNoTitle[activeTabKey]}
        </Card>
      </Modal>
    </>
  );
}

export default ModalAddProject;
