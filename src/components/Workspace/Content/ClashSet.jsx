import { useEffect, useRef, useState } from 'react';
import { PiSealWarningFill } from 'react-icons/pi';
import Dropdown from '../../Dropdown';
const SELECTS = [
  { id: '1', name: 'From all models' },
  { id: '2', name: 'Shared with me' },
  { id: '3', name: 'From visible models' },
];

function ClashSet() {
  const [toggleSelect, setToggleSelect] = useState(false);
  const [select, setSelect] = useState('From all models');

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
          <h1 className="text-2xl font-semibold first-letter:capitalize">Clash sets</h1>
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
          <span className=" rounded-full  w-10 h-10 center">
            <PiSealWarningFill className="w-6 h-6 opacity-40" />
          </span>
          <span className="cursor-pointer rounded-full hover:bg-slate-300 w-10 h-10 center">
            <box-icon name="menu-alt-left"></box-icon>
          </span>
          <span className="cursor-pointer rounded-full hover:bg-slate-300 w-10 h-10 center">
            <box-icon name="search-alt-2"></box-icon>
          </span>
        </div>
      </header>

      <div className="flex flex-col justify-between items-start w-full  border-b"></div>
    </section>
  );
}

export default ClashSet;
