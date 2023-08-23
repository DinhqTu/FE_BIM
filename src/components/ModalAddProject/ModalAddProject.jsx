import { useState } from 'react';
import { Modal, Card } from 'antd';
import { BankOutlined } from '@ant-design/icons';

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
  {
    label: 'Lịch sử',
    key: 'history',
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
    <div className="flex justify-between">
      <div>
        <h1>Các Nhóm</h1>
      </div>
      <div>
        <h1>Nhóm Thuộc Dự Án</h1>
      </div>
    </div>
  ),
};

function ModalAddProject(props) {
  const { open, handleOpenModal } = props;

  const [activeTabKey1, setActiveTabKey1] = useState('tab1');
  const [activeTabKey2, setActiveTabKey2] = useState('app');
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key) => {
    setActiveTabKey2(key);
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
          }}
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey2}
          onTabChange={onTab2Change}
        >
          {contentListNoTitle[activeTabKey2]}
        </Card>
      </Modal>
    </>
  );
}

export default ModalAddProject;
