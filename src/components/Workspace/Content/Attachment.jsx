import { useEffect, useRef, useState } from 'react';
import Dropdown from '../../Dropdown';

const SELECTS = [
  { id: '1', name: 'Visible objects' },
  { id: '2', name: 'All objects' },
];

function Attachment() {
  const [toggleLayer, setToggleLayer] = useState(true);
  const [toggleVisibility, setToggleVisibility] = useState(false);
  const [toggleOption, setToggleOption] = useState(false);
  const [toggleSelect, setToggleSelect] = useState(false);
  const [select, setSelect] = useState('Visible objects');

  const selectRef = useRef(null);
  const visibilityRef = useRef(null);
  const optionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setToggleSelect(false);
      }
      if (visibilityRef.current && !visibilityRef.current.contains(event.target)) {
        setToggleVisibility(false);
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
          <h1 className="text-2xl font-semibold first-letter:capitalize">Attachment</h1>
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
            <box-icon name="menu-alt-left"></box-icon>
          </span>
          <span className="cursor-pointer rounded-full hover:bg-slate-300 w-10 h-10 center">
            <box-icon name="search-alt-2"></box-icon>
          </span>
        </div>
      </header>
      {/* <div className="h-10 flex items-center  gap-2 border-b border-[#d0d0d7] ">
        <button
          className="relative  p-2 pr-0 hover:bg-slate-300 center "
          onClick={() => setToggleVisibility(!toggleVisibility)}
          ref={visibilityRef}
        >
          <span>Change visibility</span>
          <box-icon name="caret-down"></box-icon>
          {toggleVisibility && (
            <Dropdown className={'top-10 left-0'}>
              <li className={'list-option'}>Show all</li>
              <li className={'list-option'}>Hide all</li>
            </Dropdown>
          )}
        </button>
      </div>
      <div className="flex justify-between items-center w-full h-9 hover:bg-[#f3f3f7] cursor-pointer">
        <div
          className="hover:bg-slate-300 h-full center px-2 rounded-full ml-1"
          onClick={() => setToggleLayer(!toggleLayer)}
        >
          {toggleLayer ? (
            <box-icon type="solid" name="show"></box-icon>
          ) : (
            <span className="opacity-50 center">
              <box-icon type="solid" name="hide"></box-icon>
            </span>
          )}
        </div>
        <div className="pr-8 text-base">GESTAMP_architektura.ifc</div>
        <div
          className=" relative hover:bg-slate-300 h-full center px-2 rounded-full mr-2"
          onClick={() => setToggleOption(!toggleOption)}
          ref={optionRef}
        >
          <box-icon name="dots-vertical-rounded"></box-icon>
          {toggleOption && (
            <Dropdown className={'top-9 right-0'}>
              <li className={'list-option'}>Isolate layer</li>
              <li className={'list-option'}>Select layer</li>
            </Dropdown>
          )}
        </div>
      </div> */}
    </section>
  );
}

export default Attachment;
