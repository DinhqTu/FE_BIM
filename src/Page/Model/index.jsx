import { Color } from 'three';
import { Link } from 'react-router-dom';
import { IfcViewerAPI } from 'web-ifc-viewer';
import { useEffect, useRef, useState } from 'react';
import {
  ClusterOutlined,
  FilterOutlined,
  ScissorOutlined,
  UnorderedListOutlined,
  ExpandAltOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

import './style.css';
import { ControlModel } from '../../control/button';
import ButtonControl from '../../components/ButtonControl';
import Workspace, { Toolbar } from '../../components/Workspace';
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
  const [activeButton, setActiveButton] = useState(null);
  const initialClickedButtons = new Array(BUTTON.length).fill(false);
  const [clickedButtons, setClickedButtons] = useState(initialClickedButtons);
  const [tree, setTree] = useState([]);
  useEffect(() => {
    const viewer = new IfcViewerAPI({
      container: ModelView.current,
      backgroundColor: new Color(238, 237, 238),
    });
    // setViewer(viewer);
    // setDiv(ModelView.current);
    if (ModelView.current) {
      viewer.axes.setAxes();
      // viewer.grid.setGrid();
      viewer.IFC.setWasmPath('../../../wasm/');
    }
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
      // Lấy danh sách các IFC entities trong model
      // const ifcEntities = viewer.IFC.getCollection(model.modelID).getAllItems();
      // In danh sách các IFC entities console.log(viewer);
      setTree(ifcProject);
      // await setupAllCategories(); //for ifc categories filter
      createTreeMenu(ifcProject);
    }

    // loadIfc('https://fe-bim.vercel.app/models/TESTED_Simple_project_01.ifc');
    loadIfc('../../../public/models/TESTED_Simple_project_01.ifc');

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

    ////////////////////////  CREATE CONTAINER TREE   ////////////////////////

    function createIfcTreeMenu() {
      const ifcTreeMenuDiv = document.createElement('div');
      ifcTreeMenuDiv.className = 'ifc-tree-menu';
      ifcTreeMenuDiv.id = 'ifc-tree-menu';
      ifcTreeMenuDiv.style.display = 'none';

      const myUL = document.createElement('ul');
      myUL.id = 'myUL';

      const treeRoot = document.createElement('li');
      treeRoot.id = 'tree-root';

      const caretSpan = document.createElement('span');
      caretSpan.className = 'caret';
      const ulNested = document.createElement('ul');
      ulNested.className = 'nested';

      treeRoot.appendChild(caretSpan);
      treeRoot.appendChild(ulNested);
      myUL.appendChild(treeRoot);
      ifcTreeMenuDiv.appendChild(myUL);

      document.getElementById('section').appendChild(ifcTreeMenuDiv);
    }

    createIfcTreeMenu();

    //////////////////////////// TREE PROPERTIES //////////////////////////
    function createTreeMenu(ifcProject) {
      const root = document.getElementById('tree-root');
      removeAllChildren(root);
      const ifcProjectNode = createNestedChild(root, ifcProject);
      ifcProject.children.forEach((child) => {
        constructTreeMenuNode(ifcProjectNode, child);
      });
    }

    // trả về 1 string : IFCPROJECT-119
    function nodeToString(node) {
      return `${node.type} - ${node.expressID}`;
    }

    function constructTreeMenuNode(parent, node) {
      const children = node.children;
      if (children.length === 0) {
        createSimpleChild(parent, node);
        return;
      }
      const nodeElement = createNestedChild(parent, node);
      children.forEach((child) => {
        constructTreeMenuNode(nodeElement, child);
      });
    }

    function createNestedChild(parent, node) {
      const content = nodeToString(node);
      const root = document.createElement('li');
      createTitle(root, content);
      const childrenContainer = document.createElement('ul');
      childrenContainer.classList.add('nested');
      root.appendChild(childrenContainer);
      parent.appendChild(root);
      return childrenContainer;
    }

    function createTitle(parent, content) {
      const title = document.createElement('span');
      title.classList.add('caret');
      title.onclick = () => {
        title.parentElement.querySelector('.nested').classList.toggle('tree-active');
        title.classList.toggle('caret-down');
      };
      title.textContent = content;
      parent.appendChild(title);
    }

    function createSimpleChild(parent, node) {
      const content = nodeToString(node);
      const childNode = document.createElement('li');
      childNode.classList.add('leaf-node');
      childNode.textContent = content;
      parent.appendChild(childNode);
      childNode.onmouseenter = async () => {
        await viewer.IFC.selector.prepickIfcItemsByID(0, [node.expressID]);
      };

      childNode.onclick = async () => {
        await viewer.IFC.selector.pickIfcItemsByID(0, [node.expressID], true);

        let idsArray = [node.expressID];

        const props = await viewer.IFC.getProperties(0, idsArray[0], true, false);
        // console.log('props', props); //call the function here
        createPropertiesMenu(props);
      };
    }

    //IFC properties menu functions
    function createPropertiesMenu(properties) {
      // removeAllChildren(propsGUI);

      delete properties.psets;
      delete properties.mats;
      delete properties.type;

      for (let key in properties) {
        createPropertyEntry(key, properties[key]);
      }
    }

    function createPropertyEntry(key, value) {
      const propContainer = document.createElement('div');
      propContainer.classList.add('ifc-property-item');

      if (value === null || value === undefined) value = 'undefined';
      else if (value.value) value = value.value;

      const keyElement = document.createElement('div');
      keyElement.textContent = key;
      propContainer.appendChild(keyElement);

      const valueElement = document.createElement('div');
      valueElement.classList.add('ifc-property-value');
      valueElement.textContent = value;
      propContainer.appendChild(valueElement);

      // propsGUI.appendChild(propContainer);
    }

    function removeAllChildren(element) {
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }

    // remove event listeners
    return () => {
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

  ////////////////////////  create and delete plane   ////////////////////////
  const handleCreatePlane = async () => {
    await viewer.clipper.createPlane();
  };

  const handleDeletePlane = async () => {
    await viewer.clipper.deleteAllPlanes();
  };

  //////////////////////// dimentions  ////////////////////////
  const handleDimentions = async () => {
    await viewer.dimensions.create();
    viewer.dimensions.active = true;
    viewer.dimensions.previewActive = true;
  };

  const handleRemoveDimentions = async () => {
    viewer.dimensions.active = false;
    viewer.dimensions.previewActive = false;
  };

  if (viewer) {
    if (clickedButtons[2]) {
      window.addEventListener('dblclick', handleCreatePlane);
    } else {
      handleDeletePlane();
    }

    if (clickedButtons[3]) {
      window.addEventListener('dblclick', handleDimentions);
    } else {
      handleRemoveDimentions();
    }
  }

  //////////////////////// TOGGLE TREE PROPERTIES  ////////////////////////

  const propertiesButton = document.getElementById('ifc-tree-menu');
  if (propertiesButton) {
    if (clickedButtons[0]) {
      propertiesButton.style.display = 'initial';
    } else {
      propertiesButton.style.display = 'none';
    }
  }

  return (
    <section id="section" className="absolute top-16 bottom-0 w-full  border-t border-[#bfbfc6]">
      <Toolbar />
      <Workspace />

      <div className="flex justify-center items-center">
        <ButtonControl
          viewer={viewer}
          BUTTON={BUTTON}
          clickedButtons={clickedButtons}
          handleButtonClick={(index) => handleButtonClick(index)}
        />
      </div>
      <div className="h-full w-full" id="viewer-container" ref={ModelView}></div>
    </section>
  );
}

export default Project;
