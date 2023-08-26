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

const BUTTON = [
  { icon: <ClusterOutlined />, action: "tree" },
  { icon: <FilterOutlined />, action: "filter" },
  { icon: <ScissorOutlined />, action: "clipping"},
  { icon: <ExpandAltOutlined />, action: "length"},
  { icon: <UnorderedListOutlined />, action: "properties" },
  { icon: <QuestionCircleOutlined />, action: "info" },
];
function ButtonControl(props) {
  const { viewer, container, highlight, setHighlightActive, tree, setTreeActive } = props;  
  const [ clipping, setClippingActive ] = useState(false);
  const [ initButtonActive, setButtonActive ] = useState({
    "tree": false,
    "filter": false,
    "clipping": false,
    "length": false,
    "properties": false,
    "info": false
  })

  const handleButtonClick = (index, action) => {
    setButtonActive({ ...!initButtonActive, [action] : !initButtonActive[action] });
  
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

  window.ondblclick = () => {
    if (clipping){
      viewer.clipper.active = clipping;
      viewer.clipper.createPlane();

    }
  }

  window.onmousemove = () => {
    if (highlight) {
      viewer.IFC.selector.prePickIfcItem();
    } 
    if (!clipping) {
      viewer.clipper.deleteAllPlanes();
    }
  }

  // const { handleButtonClick, clickedButtons, BUTTON, viewer } = props;
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
  return (
    <div className=" flex fixed bottom-8 left-1/2 -translate-x-1/2 z-10">
      {BUTTON.map((item, index) => (
        <div
          className={`w-8 h-8 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer ml-5 flex justify-center items-center ${
            initButtonActive[item.action] ? 'bg-gray-700 text-white' : ''
          }`}
          key={index}
          onClick={() => handleButtonClick(index, item.action)}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}

export default ButtonControl;
