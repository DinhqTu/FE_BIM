import { useEffect, useRef, useState } from 'react';
import { BiSolidFolderPlus } from 'react-icons/bi';

import Dropdown from '../../Dropdown';

const SELECTS = [
  { id: '0', name: 'Everything in project' },
  { id: '1', name: 'Created by me' },
  { id: '2', name: 'In these models' },
];

function Organizer() {
  const [toggleOption, setToggleOption] = useState(false);
  const [toggleSelect, setToggleSelect] = useState(false);
  const [select, setSelect] = useState('Everything in project');

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
          <h1 className="text-2xl font-semibold first-letter:capitalize">Organizer</h1>
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
        <div className="center gap-1 ">
          <span className="cursor-pointer rounded-full hover:bg-slate-300 w-10 h-10 center">
            <BiSolidFolderPlus className="w-6 h-6" />
          </span>
          <span className="cursor-pointer rounded-full hover:bg-slate-300 w-10 h-10 center">
            <box-icon name="menu-alt-left"></box-icon>
          </span>
          <span
            className="relative cursor-pointer rounded-full hover:bg-slate-300 w-10 h-10 center"
            onClick={() => setToggleOption(!toggleOption)}
          >
            <box-icon name="dots-vertical-rounded"></box-icon>
            {toggleOption && (
              <Dropdown className={'top-10 right-2'}>
                <li className="list-option">Refresh</li>
              </Dropdown>
            )}
          </span>
        </div>
      </header>

      <div className="flex justify-between p-4 w-full "></div>
    </section>
  );
}

export default Organizer;
