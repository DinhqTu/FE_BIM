import { useEffect, useRef, useState } from 'react';
import { FaClipboardCheck } from 'react-icons/fa';
import Dropdown from '../../Dropdown';

const SELECTS = [
  { id: '1', name: 'All ToDos in project' },
  { id: '2', name: 'Assigned to me' },
];

const GROUP_BY = [
  { id: '1', name: 'No grouping' },
  { id: '2', name: 'Author' },
  { id: '3', name: 'Status' },
  { id: '4', name: 'Priority' },
  { id: '5', name: 'Creation date' },
  { id: '6', name: 'Last modified late' },
];

function Todo() {
  const [toggleGroup, setToggleGroup] = useState(false);
  const [toggleOption, setToggleOption] = useState(false);
  const [toggleSelect, setToggleSelect] = useState(false);
  const [select, setSelect] = useState('All ToDos in project');
  const [selectGroup, setSelectGroup] = useState('No grouping');

  const selectRef = useRef(null);
  const groupRef = useRef(null);
  const optionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setToggleSelect(false);
      }
      if (groupRef.current && !groupRef.current.contains(event.target)) {
        setToggleGroup(false);
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

  const handleSelectGroup = (e) => {
    setSelectGroup(e.target.innerText);
  };

  return (
    <section className="">
      <header className="flex justify-between items-center py-3 px-4 border-b-[#d0d0d7] border-b">
        <div>
          <h1 className="text-2xl font-semibold first-letter:capitalize">ToDos</h1>
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
            <FaClipboardCheck className="w-6 h-6" />
          </span>
          <span className="cursor-pointer rounded-full hover:bg-slate-300 w-10 h-10 center">
            <box-icon name="menu-alt-left"></box-icon>
          </span>
          <span className="cursor-pointer rounded-full hover:bg-slate-300 w-10 h-10 center">
            <box-icon name="search-alt-2"></box-icon>
          </span>
        </div>
      </header>
      <div className="h-10 flex items-center  gap-2 border-b border-[#d0d0d7] ">
        <button
          className="relative  p-2 pr-0 hover:bg-slate-300 center "
          onClick={() => setToggleGroup(!toggleGroup)}
          ref={groupRef}
        >
          <span className="text-s opacity-60">
            Group by: <span>{selectGroup}</span>
          </span>
          <box-icon name="caret-down"></box-icon>
          {toggleGroup && (
            <Dropdown className={'top-10 left-0'}>
              {GROUP_BY.map((group) => (
                <li
                  key={group.id}
                  className={`list-option ${
                    selectGroup === group.name ? 'bg-[#e5f0f8] text-[#005f9e] font-semibold' : null
                  }`}
                  onClick={(e) => handleSelectGroup(e)}
                >
                  {group.name}
                </li>
              ))}
            </Dropdown>
          )}
        </button>
      </div>
      <div className="flex justify-between items-start w-full py-2 pl-2 hover:bg-[#f3f3f7] cursor-pointer border-b">
        <div className="m-2 text-base w-3 h-3 bg-[#ffbe00] rounded-full"></div>
        <div className="text-xs flex-grow">
          <h1>DEMO-1</h1>
          <p>test</p>
          <p>New</p>
          <p>Unassigned</p>
        </div>
        <div
          className=" relative hover:bg-slate-300 h-10 w-10 center px-2 rounded-full mr-2"
          onClick={() => setToggleOption(!toggleOption)}
          ref={optionRef}
        >
          <box-icon name="dots-vertical-rounded"></box-icon>
          {toggleOption && (
            <Dropdown className={'top-9 right-0'}>
              <li className={'list-option'}>Edit</li>
              <li className={'list-option'}>Load with original model versions</li>
              <li className={'list-option'}>Delete</li>
            </Dropdown>
          )}
        </div>
      </div>
    </section>
  );
}

export default Todo;
