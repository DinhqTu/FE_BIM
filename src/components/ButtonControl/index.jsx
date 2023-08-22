import {
  ClusterOutlined,
  FilterOutlined,
  ScissorOutlined,
  UnorderedListOutlined,
  ExpandAltOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { useState } from 'react';

const BUTTON = [
  { icon: <ClusterOutlined /> },
  { icon: <FilterOutlined /> },
  { icon: <ScissorOutlined /> },
  { icon: <ExpandAltOutlined /> },
  { icon: <UnorderedListOutlined /> },
  { icon: <QuestionCircleOutlined /> },
];
function ButtonControl() {
  const initialClickedButtons = new Array(BUTTON.length).fill(false);
  initialClickedButtons[0] = true;
  const [clickedButtons, setClickedButtons] = useState(initialClickedButtons);

  const handleButtonClick = (index) => {
    const updatedClickedButtons = new Array(BUTTON.length).fill(false);
    updatedClickedButtons[index] = !updatedClickedButtons[index];
    setClickedButtons(updatedClickedButtons);
  };
  return (
    <div className="flex fixed bottom-8 left-1/2">
      {BUTTON.map((item, index) => (
        <div
          className={`w-8 h-8 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer ml-5 flex justify-center items-center ${
            clickedButtons[index] ? 'bg-gray-700 text-white' : ''
          }`}
          key={index}
          onClick={() => handleButtonClick(index)}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}

export default ButtonControl;