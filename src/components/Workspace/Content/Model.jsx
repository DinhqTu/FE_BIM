import { useEffect, useRef, useState } from 'react';
import Dropdown from '../../Dropdown';

const OPTIONS = [
  { id: '1', name: 'Fit to View' },
  { id: '2', name: 'Show only' },
  { id: '3', name: 'Position settings' },
  { id: '4', name: 'Model hirerarchy' },
  { id: '5', name: 'See details' },
  { id: '6', name: 'Download' },
  { id: '7', name: 'Download as TrimBim' },
];

const SELECTS = [
  { id: '1', name: 'Selected models' },
  { id: '2', name: 'Everything in project' },
];

function Model() {
  const [toggleModel, setToggleModel] = useState(true);
  const [select, setSelect] = useState('Selected models');
  const [toggleSelect, setToggleSelect] = useState(false);
  const [showOption, setSetShowOption] = useState(false);

  const selectRef = useRef(null);
  const optionRef = useRef(null);

  useEffect(() => {
    const handleHideDropdown = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setToggleSelect(false);
      }
      if (optionRef.current && !optionRef.current.contains(e.target)) {
        setSetShowOption(false);
      }
    };
    document.addEventListener('mousedown', handleHideDropdown);
    return () => document.removeEventListener('mousedown', handleHideDropdown);
  }, []);

  const handleSelect = (e) => {
    setSelect(e.target.innerText);
  };
  return (
    <section className="">
      <header className="flex justify-between items-center py-3 px-4 border-b-[#d0d0d7] border-b">
        <div>
          <h1 className="text-2xl font-semibold first-letter:capitalize">model</h1>

          <p className="center relative cursor-pointer" onClick={() => setToggleSelect(!toggleSelect)} ref={selectRef}>
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
      <div className="flex justify-between items-center w-full h-9 hover:bg-[#f3f3f7] cursor-pointer">
        <div
          className="hover:bg-slate-300 h-full center px-2 rounded-full ml-1"
          onClick={() => setToggleModel(!toggleModel)}
        >
          {toggleModel ? (
            <box-icon type="solid" name="show"></box-icon>
          ) : (
            <span className="opacity-50 center">
              <box-icon type="solid" name="hide"></box-icon>
            </span>
          )}
        </div>
        <div className="pr-8 text-base">GESTAMP_architektura.ifc</div>
        <div
          className={`relative hover:bg-slate-300 h-full center px-2 rounded-full ml-1 ${
            showOption ? 'bg-slate-300' : null
          }`}
          onClick={() => setSetShowOption(!showOption)}
          ref={optionRef}
        >
          <box-icon name="dots-vertical-rounded"></box-icon>
          {showOption && (
            <Dropdown className="top-9 right-2">
              {OPTIONS.map((option) => (
                <li key={option.id} className="list-option">
                  {option.name}
                </li>
              ))}
            </Dropdown>
          )}
        </div>
      </div>
    </section>
  );
}

export default Model;
