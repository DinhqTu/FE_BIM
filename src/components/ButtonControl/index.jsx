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
  { icon: <ClusterOutlined />, action: "tree" },
  { icon: <FilterOutlined />, action: "filter" },
  { icon: <ScissorOutlined />, action: "clipping"},
  { icon: <ExpandAltOutlined />, action: "length"},
  { icon: <UnorderedListOutlined />, action: "properties" },
  { icon: <QuestionCircleOutlined />, action: "info" },
];
function ButtonControl(props) {
  const { viewer , container, highlight, setHighlightActive, tree, setTreeActive } = props;  
  const [ clipping, setClippingActive ] = useState(false);
  const [ dimension, setDimensionActive ] = useState(false);
  const [ initButtonActive, setButtonActive ] = useState({
    "tree": false,
    "filter": false,
    "clipping": false,
    "length": false,
    "properties": false,
    "info": false
  });

  const handleButtonClick = (action) => {
    setButtonActive({ ...!initButtonActive, [action] : !initButtonActive[action] });
    if (initButtonActive["clipping"]) {
      handleDeletePlane();
    }
    if (action === 'tree') {
      console.log("tree toggle");
      setTreeActive(!tree);
      return;
    }
    if (action === 'clipping'){
      setClippingActive(!clipping);
    }
    if (action === 'properties') {
      setHighlightActive(!highlight);
    }
    if (action === 'length') {
      setDimensionActive(!dimension)
    }
  };  

  const handleCreatePlane = async () => {
    await viewer.clipper.createPlane();
  };

  const handleDeletePlane = async () => {
    await viewer.clipper.deleteAllPlanes();
  };

  const handleDimensions = async () => {
    await viewer?.dimensions.create();
    viewer.dimensions.active = true;
    viewer.dimensions.previewActive = true;
  };

  const handleRemoveDimensions = async () => {
    viewer.dimensions.active = false;
    viewer.dimensions.previewActive = false;
  };

  window.ondblclick = () => {
    if (clipping){
      viewer.clipper.active = clipping;
      handleCreatePlane();
    }
    if (dimension) {
      handleDimensions();
    }
  }

  window.onmousemove = () => {
    if (highlight) {
      viewer.IFC.selector.prePickIfcItem();
    }
    if (!dimension) {
      handleRemoveDimensions();
    }
    // if (!highlight) {
    //   viewer.IFC.selector.unPrepickIfcItem();
    // }
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
          onClick={() => handleButtonClick(item.action)}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}

export default ButtonControl;
