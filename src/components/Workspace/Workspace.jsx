import { useState } from 'react';
import { PiSealWarningFill } from 'react-icons/pi';
import { FaFolderTree } from 'react-icons/fa6';
import Layer from './Content/Layer';
import Model from './Content/Model';
import Attachment from './Content/Attachment';
import Todo from './Content/Todo';
import View from './Content/View';
import Organizer from './Content/Organizer';
import Topic from './Content/Topic';
import ClashSet from './Content/ClashSet';

const ICON_BUTTONS = [
  {
    key: 'model',
    icon: <box-icon type="solid" name="cube"></box-icon>,
    title: [{ name: 'Everything in project' }, { name: 'Everything in project2' }],
    content: <Model />,
  },
  {
    key: 'layer',
    title: 'All layers',
    icon: <box-icon type="solid" name="layer"></box-icon>,
    content: <Layer />,
  },
  { key: 'attachment', title: 'Visible objects', icon: <box-icon name="link"></box-icon>, content: <Attachment /> },
  {
    key: 'todo',
    title: 'All ToDos in project',
    icon: <box-icon type="solid" name="calendar-check"></box-icon>,
    content: <Todo />,
  },
  {
    key: 'view',
    title: 'All views in project',
    icon: <box-icon type="solid" name="camera"></box-icon>,
    content: <View />,
  },
  {
    key: 'organizer',
    title: 'Everything in project',
    icon: <FaFolderTree className="w-6 h-6" />,
    content: <Organizer />,
  },
  {
    key: 'data',
    title: 'View content for',
    icon: <box-icon type="solid" name="layout"></box-icon>,
  },
  { key: 'topics', title: 'Active Topics', icon: <box-icon type="logo" name="redux"></box-icon>, content: <Topic /> },
  {
    key: 'clash',
    title: 'Active Topics',
    icon: <PiSealWarningFill className="w-6 h-6" />,
    content: <ClashSet />,
  },
];

function Workspace() {
  const [activeBtn, setActiveBtn] = useState({
    model: false,
    layer: false,
    attachment: false,
    todo: false,
    view: false,
    organizer: false,
    data: false,
    topics: false,
    clash: false,
  });
  const [active, setActive] = useState(null);

  const handleActiveBtn = (key) => {
    const updatedActiveBtn = { ...activeBtn };
    Object.keys(updatedActiveBtn).forEach((btnKey) => {
      updatedActiveBtn[btnKey] = btnKey === key ? !updatedActiveBtn[btnKey] : false;
    });
    setActiveBtn(updatedActiveBtn);
    activeBtn[key] ? setActive(null) : setActive(key);
  };

  return (
    <section className="absolute flex top-[52px] bottom-0 ">
      <div className=" flex items-center w-10 bg-white ">
        <div
          className={`flex flex-col bg-[#e2e2e7] justify-center items-center w-full shadow_trimple ${
            active ? 'h-full' : 'h-auto'
          }`}
        >
          {ICON_BUTTONS.map((btn, index) => (
            <button
              className={`w-full h-10 flex justify-center items-center hover:bg-slate-50 ${
                activeBtn[btn.key] ? 'bg-white' : null
              }`}
              key={index}
              onClick={() => handleActiveBtn(btn.key)}
            >
              {btn.icon}
            </button>
          ))}
        </div>
      </div>
      {active &&
        ICON_BUTTONS.map((item, index) => {
          if (item.key === active) {
            return (
              <div className="w-80 bg-white shadow_trimple animation-slide-right ease-linear" key={index}>
                {item.content}
              </div>
            );
          }
          return null;
        })}
    </section>
  );
}

export default Workspace;
