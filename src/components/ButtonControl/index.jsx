import {
  ClusterOutlined,
  FilterOutlined,
  ScissorOutlined,
  UnorderedListOutlined,
  ExpandAltOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { useState } from 'react';

// import { ControlModel } from '../../control/button';
const BUTTON = [
  { icon: <ClusterOutlined /> },
  { icon: <FilterOutlined /> },
  { icon: <ScissorOutlined /> },
  { icon: <ExpandAltOutlined /> },
  { icon: <UnorderedListOutlined /> },
  { icon: <QuestionCircleOutlined /> },
];
function ButtonControl(props) {
  const { viewer, container, initialClickedButtons, setClickedButtons, highlight, setHighlightActive, tree, setTreeActive } = props;
  const [ clipping, setClippingActive ] = useState(false);
  // const [ highlight, setHighlightActive ] = useState(false);
  // const [ tree, setTreeActive ] = useState(false);
  // const [ measure, setMeasuretActive ] = useState(false);
  // const [ filter, setFilterActive ] = useState(false);

  // const button = new ControlModel(viewer, container); 
  // console.log('viewer', viewer);
  // const initialClickedButtons = new Array(BUTTON.length).fill(false);
  // const [clickedButtons, setClickedButtons] = useState(initialClickedButtons);

  const handleButtonClick = (index) => {
    const updatedClickedButtons = new Array(BUTTON.length).fill(false);
    updatedClickedButtons[index] = !updatedClickedButtons[index];
    setClickedButtons(updatedClickedButtons);
    // setHighlightActive(!highlight);
    if (index === 0) {
      setTreeActive(!tree);
      return;
    }
    if (index === 2){
      setClippingActive(!clipping);
    }
    if (index === 4) {
      setHighlightActive(!highlight);
    }
    
  };  

  const handleCreatePlane = async () => {
    await viewer.clipper.createPlane();
  };

  const handleDeletePlane = async () => {
    await viewer.clipper.deleteAllPlanes();
  };

  window.onauxclick = () => {
    if (clipping) {
      // handleCreatePlane();
      window.addEventListener('dblclick', handleCreatePlane);
    } else {
      handleDeletePlane();
    }
  }

  window.onmousemove = () => {
    if (highlight) {
      viewer.IFC.selector.prePickIfcItem();
    } 
  }

  // if (clipping) {
  //   button.createPlane();
  // }
  // container.addEventListener("onauxclick", () => {
  //   if (clipping) {
  //     viewer.clipper.createPlane()
  //   }
  // })
  

  return (
    <div className="flex fixed bottom-8 left-1/2">
      {BUTTON.map((item, index) => (
        <div
          className={`w-8 h-8 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer ml-5 flex justify-center items-center ${
            initialClickedButtons[index] ? 'bg-gray-700 text-white' : ''
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
