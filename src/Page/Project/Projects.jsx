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
          className="px-2 py-1 border rounded border-[#3b5999] text-[#3b5999] hover:bg-[#3b5999] hover:text-white lg:px-4"
        >
          Thêm mới
        </button>
        <ModalAddProject open={open} handleOpenModal={handleOpenModal} />
      </div>
      <div className="flex justify-between mt-4 items-center">
        <input
          className="px-2 border border-2  rounded-full w-1/2 h-8 focus:border-transparent lg:px-4 lg:w-[280px]"
          type="search"
          name=""
          id=""
          placeholder="Từ khoá ..."
        />
        <div className=" flex gap-x-4 items-center md:text-xl ">
          <span
            className={`flex items-center cursor-pointer p-2 ${layout ? 'bg-neutral-400' : null} hover:bg-neutral-400`}
            onClick={() => setLayout(true)}
          >
            <MenuOutlined />
          </span>
          <span
            className={`flex items-center cursor-pointer p-2 ${layout ? null : 'bg-neutral-400'}  hover:bg-neutral-400`}
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

      <section className={`center flex-wrap gap-x-8 gap-y-8 ${layout ? '' : 'flex-col w-full'} mt-6`}>
        {Array.from({ length: 12 }).map((_, i) => (
          <Project key={i} layout={layout} />
        ))}
      </section>
    </div>
  );
}

export default Projects;
