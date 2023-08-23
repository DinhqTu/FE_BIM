import { AppstoreOutlined, MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';

import Project from '../../components/Project';
import ModalAddProject from '../../components/ModalAddProject/ModalAddProject';
function Projects() {
  const [layout, setLayout] = useState(true);
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>CÁC DỰ ÁN</h1>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-1 border rounded border-[#3b5999] text-[#3b5999] hover:bg-[#3b5999] hover:text-white"
        >
          Thêm mới
        </button>
        <ModalAddProject open={open} handleOpenModal={handleOpenModal} />
      </div>
      <input
        className="px-4 border border-2  rounded-full w-[280px] h-8 focus:border-transparent"
        type="search"
        name=""
        id=""
        placeholder="Từ khoá ..."
      />
      <div className=" text-xl absolute right-16 cursor-pointer" onClick={() => setLayout(!layout)}>
        {layout ? <MenuOutlined /> : <AppstoreOutlined />}
      </div>
      <section className={`grid mt-20 ${layout ? 'grid-cols-4 gap-6' : 'grid-cols-1'} mt-12 `}>
        {Array.from({ length: 12 }).map((_, i) => (
          <Project key={i} layout={layout} />
        ))}
      </section>
    </div>
  );
}

export default Projects;
