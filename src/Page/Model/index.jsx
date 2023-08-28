import { Color } from 'three';
import { Link } from 'react-router-dom';
import { IfcViewerAPI } from 'web-ifc-viewer';
import { useEffect, useMemo, useRef, useState } from 'react';

import ButtonControl from '../../components/ButtonControl';
import PropertyMenu from '../../components/PropertyMenu';
import TreeMenu from '../../components/TreeMenu';
// import { CubeControls } from '../../core/CubeControl';
import './style.css';

  ////////////////////////  CREATE CONTAINER TREE   ///////////////////////

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

    // document.getElementById('section').appendChild(ifcTreeMenuDiv);
  }

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

  //////////////////////  create and delete plane   ////////////////////////
  const handleCreatePlane = async () => {
    await viewer.clipper.createPlane();
  };

  const handleDeletePlane = async () => {
    await viewer.clipper.deleteAllPlanes();
  };

////////////////////// TOGGLE TREE PROPERTIES  ////////////////////////

const propertiesButton = document.getElementById('ifc-tree-menu');
if (propertiesButton) {
  if (clickedButtons[0]) {
    propertiesButton.style.display = 'initial';
  } else {
    propertiesButton.style.display = 'none';
  }
}

function createViewer(container) {
  let viewer = new IfcViewerAPI({ container, backgroundColor: new Color(255, 255, 255) });
  // viewer.axes.setAxes();
  // viewer.grid.setGrid();

  return viewer;
}

function Project() {
  const modelView = useRef(null);
  // const viewer2 = useMemo(() => createViewer(modelView.current), []);
  const [model, setModel] = useState({});
  const [tree, setTreeActive] = useState(false);
  const [highlight, setHighlightActive] = useState(false);

  const [props, setProps] = useState({});
  const [viewer, setViewer] = useState(null);
  const [treeRoot, setTreeRoot] = useState({});

  const [ ifcTreeContent, setTreeContent ] = useState({});

  async function handlePick() {
    const result = await viewer.IFC.selector.pickIfcItem();
    const { modelID, id } = result;
    const props = await viewer.IFC.getProperties(modelID, id, true, false);

    setProps(props);
  }

  async function handleTree() {
    const ifcProject = await viewer.IFC.getSpatialStructure(model.modelID);
    setTreeRoot(ifcProject);
  }

  useEffect(() => {
    // console.log("model get tree: ", tree);
    if (tree) {
      handleTree(); 
    }
  }, [tree])

  useEffect(() => {
    const viewer = new IfcViewerAPI({
      container: modelView.current,
      backgroundColor: new Color(0xffffff),
    });
    setViewer(viewer);
    if (modelView.current) {
      viewer.axes.setAxes();
      viewer.IFC.setWasmPath('../../../wasm/');
    }
    setViewer(viewer);

    async function loadIfc(url) {
      const model = await viewer.IFC.loadIfcUrl(url);
      setModel(model);

      await viewer.shadowDropper.renderShadow(model.modelID);

      const ifcProject = await viewer.IFC.getSpatialStructure(model.modelID);
      setTreeContent(ifcProject);

      // createTreeMenu(ifcProject);
    }

    loadIfc('../../../src/assets/models/TESTED_Simple_project_01.ifc');



    // const cubeCT = new CubeControls(cubeView.current, cubeCanvas.current, true);
  }, []);


  createIfcTreeMenu();

  // logic handel active button
  // const handleButtonClick = (index) => {
  //   if (activeButton === index) {
  //     const updatedClickedButtons = [...clickedButtons];
  //     updatedClickedButtons[index] = !updatedClickedButtons[index];
  //     setClickedButtons(updatedClickedButtons);
  //     setActiveButton(index);
  //   } else {
  //     const updatedClickedButtons = initialClickedButtons;
  //     updatedClickedButtons[index] = !updatedClickedButtons[index];
  //     setClickedButtons(updatedClickedButtons);
  //     setActiveButton(index);
  //   }
  // };

  return (
    <section>
      <Link
        to={'/cac-du-an'}
        className="cursor-pointer flex justify-center items-center absolute top-10 left-10 border-2 hover:bg-slate-500 px-3 py-2 rounded-full z-[1]"
      >
        <box-icon name="arrow-back"></box-icon>
      </Link>
      <ButtonControl
        viewer={viewer}
        container={modelView.current}
        highlight={highlight}
        setHighlightActive={setHighlightActive}
        tree={tree}
        setTreeActive={setTreeActive}
      />
      <div
        className="h-[80vh] w-full"
        id="viewer-container"
        ref={modelView}
        // onMouseMove={() => viewer.IFC.selector.prePickIfcItem()}
        // onMouseDown={(e) => console.log(e)}
        onDoubleClick={
          highlight ? () => handlePick() : () => viewer.IFC.selector.unHighlightIfcItems()
        }
      >
        { treeRoot && <TreeMenu root={treeRoot} /> }

        {/* <div className="ifc-cube-view" ref={cubeView}>
          <canvas ref={cubeCanvas}></canvas>
        </div> */}
        <div className="ifc-property-menu">
          {props && highlight ? <PropertyMenu properties={props} /> : null}
        </div>
      </div>
    </section>
  );
}

export default Project;
