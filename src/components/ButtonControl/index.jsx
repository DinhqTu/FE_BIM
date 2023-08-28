import {
  ClusterOutlined,
  FilterOutlined,
  ScissorOutlined,
  UnorderedListOutlined,
  ExpandAltOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { useEffect, useMemo, useState } from 'react';
import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';

import { ControlModel } from '../../control/button';
const BUTTON = [
  { icon: <ClusterOutlined /> },
  { icon: <FilterOutlined /> },
  { icon: <ScissorOutlined /> },
  { icon: <ExpandAltOutlined /> },
  { icon: <UnorderedListOutlined /> },
  { icon: <QuestionCircleOutlined /> },
];
function ButtonControl(props) {
  const { handleButtonClick, clickedButtons, BUTTON, setHighlight, setMeasuring } = props;
  // console.log(div);
  // const initialClickedButtons = new Array(BUTTON.length).fill(false);
  // const [clickedButtons, setClickedButtons] = useState(initialClickedButtons);
  // if (div !== null) {
  //   const viewer2 = new IfcViewerAPI({
  //     container: div,
  //     backgroundColor: new Color(0xffffff),
  //   });
  //   if (clickedButtons[2]) {
  //     window.addEventListener('dblclick', () => {
  //       viewer2.clipper.createPlane();
  //     });
  //   } else {
  //     viewer2.clipper.deleteAllPlanes();
  //   }
  // }
  // const button = useMemo(() => new ControlModel(viewer), [viewer]);
  // const handleButtonClick = (index) => {
  //   const updatedClickedButtons = new Array(BUTTON.length).fill(false);
  //   updatedClickedButtons[index] = !updatedClickedButtons[index];
  //   setClickedButtons(updatedClickedButtons);
  // };
  const checkboxes = document.getElementById("checkboxes");
  const handleCheckboxList = (isOpen) => {
    if (checkboxes) {
      if (isOpen){
        checkboxes.style.display = "initial";
      } else {
        checkboxes.style.display = "none";
      }
    }
  }
  
  if (clickedButtons[4]) {
    setHighlight(true);
  } 
  if (!clickedButtons[4]) {
    setHighlight(false);
  }
  if (clickedButtons[1]) {
    // openCheckboxes()
    handleCheckboxList(true);
  } 
  if (!clickedButtons[1]) {
    handleCheckboxList(false);
    // openCheckboxes();
  }
  // setMeasuring(clickedButtons[3]);

  return (
    <div className=" flex fixed bottom-8 left-1/2 -translate-x-1/2 z-10">
      {BUTTON.map((item, index) => (
        <div
          className={` button w-8 h-8 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer ml-5 flex justify-center items-center ${
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
