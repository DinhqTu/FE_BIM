import { useEffect, useRef, useState } from 'react';
import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';
import { Link } from 'react-router-dom';

import ButtonControl from '../../components/ButtonControl';
import './style.css';
import { ControlModel } from '../../control/button';
import {
  ClusterOutlined,
  FilterOutlined,
  ScissorOutlined,
  UnorderedListOutlined,
  ExpandAltOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
const BUTTON = [
  { icon: <ClusterOutlined /> },
  { icon: <FilterOutlined /> },
  { icon: <ScissorOutlined /> },
  { icon: <ExpandAltOutlined /> },
  { icon: <UnorderedListOutlined /> },
  { icon: <QuestionCircleOutlined /> },
];

function Project() {
  const ModelView = useRef(null);
  const [viewer, setViewer] = useState(null);
  const [div, setDiv] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const initialClickedButtons = new Array(BUTTON.length).fill(false);
  const [clickedButtons, setClickedButtons] = useState(initialClickedButtons);
  const [tree, setTree] = useState([]);
  useEffect(() => {
    const viewer = new IfcViewerAPI({
      container: ModelView.current,
      backgroundColor: new Color(255, 255, 255),
    });
    // setViewer(viewer);
    // setDiv(ModelView.current);
    if (ModelView.current) {
      viewer.axes.setAxes();
      // viewer.grid.setGrid();
      viewer.IFC.setWasmPath('../../../wasm/');
    }
    console.log(viewer);
    setViewer(viewer);
    async function loadIfc(url) {
      // Load the model
      const model = await viewer.IFC.loadIfcUrl(url);

      /// tạo bóng cho mô hình
      await viewer.shadowDropper.renderShadow(model.modelID);
      // bật chế độ post-processing cho render của viewer. Thêm hiệu ứng hậu xử lý sau khi vẽ mô hình
      // đại khái nó tạo ra 1 bản sao của mô hình chính với độ sâu trường , phông nền,...
      // viewer.context.renderer.postProduction.active = true;

      // model.removeFromParent(); //for ifc categories filter

      // trả về 1 đối tượng đại diện cho cấu trúc không gian trong mô hình
      const ifcProject = await viewer.IFC.getSpatialStructure(model.modelID);
      setTree(ifcProject);
      // await setupAllCategories(); //for ifc categories filter
      // createTreeMenu(ifcProject);
    }

    loadIfc('../../../src/assets/models/TESTED_Simple_project_01.ifc');

    // window.addEventListener('dblclick', () => {
    //   viewer.IFC.selector.pickIfcItem(true);
    // });
    window.addEventListener('mousemove', () => {
      viewer.IFC.selector.pickIfcItem();
    });
    viewer.clipper.active = true;

    window.addEventListener('mousemove', () => {
      viewer.IFC.selector.prePickIfcItem();
    });

    viewer.clipper.active = true;

    return () => {
      // window.removeEventListener('dblclick', () => {
      //   viewer.IFC.selector.pickIfcItem(true);
      // });
      window.removeEventListener('mousemove', () => {
        viewer.IFC.selector.pickIfcItem();
      });
      window.removeEventListener('mousemove', () => {
        viewer.IFC.selector.prePickIfcItem();
      });
    };
  }, []);

  // logic handel active button
  const handleButtonClick = (index) => {
    if (activeButton === index) {
      const updatedClickedButtons = [...clickedButtons];
      updatedClickedButtons[index] = !updatedClickedButtons[index];
      setClickedButtons(updatedClickedButtons);
      setActiveButton(index);
    } else {
      const updatedClickedButtons = initialClickedButtons;
      updatedClickedButtons[index] = !updatedClickedButtons[index];
      setClickedButtons(updatedClickedButtons);
      setActiveButton(index);
    }
  };

  //// create and delete plane
  const handleCreatePlane = async () => {
    await viewer.clipper.createPlane();
  };

  const handleDeletePlane = async () => {
    await viewer.clipper.deleteAllPlanes();
  };

  if (clickedButtons[2]) {
    window.addEventListener('dblclick', handleCreatePlane);
  } else {
    handleDeletePlane();
  }

  // dimentions
  const handleDimentions = async () => {
    await viewer.dimensions.create();
    viewer.dimensions.active = true;
    viewer.dimensions.previewActive = true;
  };

  const handleRemoveDimentions = async () => {
    viewer.dimensions.active = false;
    viewer.dimensions.previewActive = false;
  };

  if (clickedButtons[3]) {
    window.addEventListener('dblclick', handleDimentions);
  } else {
    handleRemoveDimentions();
  }

  /// tree
  const handelTree = (data) => {
    // data.children.forEach((child) => {
    //   console.log(child);
    // });
    console.log('tree', data);
  };

  handelTree(tree);

  return (
    <section className="h-[100vh]">
      <Link
        to={'/cac-du-an'}
        className="cursor-pointer flex justify-center items-center absolute top-10 left-10 border-2 hover:bg-slate-500 px-3 py-2 rounded-full"
      >
        <box-icon name="arrow-back"></box-icon>
      </Link>
      <div className="flex justify-center items-center mb-2">
        {/* <div id="ifc-property-menu-root"></div> */}

        <ButtonControl
          viewer={viewer}
          BUTTON={BUTTON}
          clickedButtons={clickedButtons}
          handleButtonClick={(index) => handleButtonClick(index)}
        />
      </div>
      <div className="h-[100vh] w-full" id="viewer-container" ref={ModelView}></div>
      {/* <div className="w-full bg-slate-400 h-[65vh]"></div> */}
    </section>
  );
}

export default Project;
