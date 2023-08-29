import { useEffect, useRef, useState } from 'react';
import { Switch } from 'antd';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { FaComments } from 'react-icons/fa';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import Dropdown from '../../Dropdown';
const SELECTS = [
  { id: '1', name: 'Active Topics' },
  { id: '2', name: 'All Topics in project' },
  { id: '3', name: 'Assigned to me' },
];

function Topic() {
  const [toggleSelect, setToggleSelect] = useState(false);
  const [select, setSelect] = useState('Active Topics');

  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setToggleSelect(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (e) => {
    setSelect(e.target.innerText);
  };

  return (
    <section className="">
      <header className="flex justify-between items-center py-3 px-4 border-b-[#d0d0d7] border-b">
        <div>
          <h1 className="text-2xl font-semibold first-letter:capitalize">Topics</h1>
          <p ref={selectRef} className="center relative cursor-pointer" onClick={() => setToggleSelect(!toggleSelect)}>
            {select} <box-icon name="caret-down"></box-icon>
            {toggleSelect && (
              <Dropdown className={'top-6 left-0'}>
                {SELECTS.map((item) => (
                  <li
                    key={item.id}
                    className={`list-option ${
                      select === item.name ? 'bg-[#e5f0f8] text-[#005f9e] font-semibold' : null
                    }`}
                    onClick={(e) => handleSelect(e)}
                  >
                    {item.name}
                  </li>
                ))}
              </Dropdown>
            )}
          </p>
        </div>
        <div className="center gap-2 ">
          <span className="cursor-pointer rounded-full hover:bg-slate-300 w-10 h-10 center">
            <BiPlus className="w-6 h-6" />
          </span>
          <span className="cursor-pointer rounded-full hover:bg-slate-300 w-10 h-10 center">
            <box-icon name="menu-alt-left"></box-icon>
          </span>
          <span className="cursor-pointer rounded-full hover:bg-slate-300 w-10 h-10 center">
            <box-icon name="search-alt-2"></box-icon>
          </span>
        </div>
      </header>
      <div className="h-10 flex items-center mx-4  gap-3 border-b border-[#d0d0d7] ">
        <Switch defaultChecked={true} size="small" />
        <span className="text-sm ">Show Topics in 3D</span>
      </div>
      <div className="flex flex-col justify-between items-start w-full  border-b">
        <div className="flex shadow-[0_0_0.25rem_#aeaeb6] p-4 w-full ">
          <div className="w-12 h-12 mr-6 ml-1">
            <img className="h-full" src="../../../../src/assets/image/view.png" alt="topic img" />
          </div>
          <div className="flex flex-col gap-y-2">
            <h1>Topic 1</h1>
            <p>
              <i className="font-semibold normal-case">Assigned To:</i> Đinh Quốc Tú
            </p>
            <p>
              <i className="font-semibold normal-case">Created By:</i> Đinh Quốc Tú
            </p>
            <span className="flex gap-x-4">
              <span className="center gap-2">
                <BsFillBookmarkFill />
                Normal
              </span>
              <span className="center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#3684d1]"></div>
                New
              </span>
            </span>
            <span className="flex gap-x-4">
              <span className="center gap-2">
                <FaComments />
                Comment
              </span>
              <span className="center gap-2">
                <AiTwotoneCalendar />
                Aug 30, 2023
              </span>
            </span>
            <span className="w-6 h-6 center bg-[#EAEAEF]">1</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topic;
