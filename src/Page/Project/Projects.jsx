import { AppstoreOutlined, MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Select, Space } from 'antd';

import Project from '../../components/Project';
import ModalAddProject from '../../components/ModalAddProject/ModalAddProject';

const DATA_LOCATION = [
  {
    value: 'Tp.HCM',
    label: 'Tp.HCM',
  },
  {
    value: 'Hà Nội',
    label: 'Hà Nội',
  },
  {
    value: 'Đà Nẵng',
    label: 'Đà Nẵng',
  },
  {
    value: 'Biên Hoà',
    label: 'Biên Hoà',
    disabled: true,
  },
];

function Projects() {
  const [layout, setLayout] = useState(true);
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>CÁC DỰ ÁN</h1>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-1 border rounded border-[#3b5999] text-[#3b5999] hover:bg-[#3b5999] hover:text-white"
        >
          Thêm mới
        </button>
        <ModalAddProject open={open} handleOpenModal={handleOpenModal} />
      </div>
      <div className="flex justify-between mt-4 items-center">
        <input
          className="px-4 border border-2  rounded-full w-[280px] h-8 focus:border-transparent"
          type="search"
          name=""
          id=""
          placeholder="Từ khoá ..."
        />
        <div className=" flex gap-x-4 text-xl items-center ">
          <span
            className={`flex items-center cursor-pointer p-2 ${
              layout ? 'bg-neutral-400' : null
            } hover:bg-neutral-400`}
            onClick={() => setLayout(true)}
          >
            <MenuOutlined />
          </span>
          <span
            className={`flex items-center cursor-pointer p-2 ${
              layout ? null : 'bg-neutral-400'
            }  hover:bg-neutral-400`}
            onClick={() => setLayout(false)}
          >
            <AppstoreOutlined />
          </span>
        </div>
      </div>

      <div className="mt-4">
        <Space wrap>
          <Select
            defaultValue="Hà Nội"
            style={{
              width: 120,
              borderColor: 'transparent',
            }}
            onChange={handleChange}
            options={DATA_LOCATION}
          />
        </Space>
      </div>

      <section className={`grid  gap-6 ${layout ? 'grid-cols-4 ' : 'grid-cols-1'} mt-6`}>
        {Array.from({ length: 12 }).map((_, i) => (
          <Project key={i} layout={layout} />
        ))}
      </section>
    </div>
  );
}

export default Projects;
