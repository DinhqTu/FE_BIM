import { useEffect, useRef, useState } from 'react';
import { TbCameraPlus } from 'react-icons/tb';

import Dropdown from '../../Dropdown';

const SELECTS = [
  { id: '0', name: 'Created by me' },
  { id: '2', name: 'Shared with me' },
  { id: '1', name: 'All Views in project' },
  { id: '3', name: 'In these models' },
];

function View() {
  const [toggleOption, setToggleOption] = useState(false);
  const [toggleSelect, setToggleSelect] = useState(false);
  const [select, setSelect] = useState('All Views in project');

  const selectRef = useRef(null);
  const optionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setToggleSelect(false);
      }
      if (optionRef.current && !optionRef.current.contains(event.target)) {
        setToggleOption(false);
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
          <h1 className="text-2xl font-semibold first-letter:capitalize">Views</h1>
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
            <TbCameraPlus className="w-6 h-6" />
          </span>
          <span className="cursor-pointer rounded-full hover:bg-slate-300 w-10 h-10 center">
            <box-icon name="menu-alt-left"></box-icon>
          </span>
          <span className="cursor-pointer rounded-full hover:bg-slate-300 w-10 h-10 center">
            <box-icon name="search-alt-2"></box-icon>
          </span>
        </div>
      </header>

      <div className="flex justify-between p-4 w-full ">
        <div className="flex flex-col flex-wrap justify-between w-32 hover:shadow-[0_0_0.25rem_#9d9da6] cursor-pointer ">
          <img className="h-20 w-full border" src="../../../../src/assets/image/view.png" alt="" />
          <div className="flex justify-between items-center border px-2">
            <h1>view 1</h1>
            <div
              className=" relative hover:bg-slate-300 h-8 w-8 center rounded-full "
              onClick={() => setToggleOption(!toggleOption)}
              ref={optionRef}
            >
              <box-icon name="dots-vertical-rounded"></box-icon>
              {toggleOption && (
                <Dropdown className={'top-9 -left-22'}>
                  <li className={'list-option'}>See details</li>
                  <li className={'list-option'}>Load with original model versions</li>
                  <li className={'list-option'}>Update View</li>
                  <li className={'list-option'}>Delete</li>
                </Dropdown>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default View;
