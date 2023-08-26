import { Color } from 'three';
// import { Link } from 'react-router-dom';
import { IfcViewerAPI } from 'web-ifc-viewer';
import { useEffect, useRef, useState } from 'react';
// import {
//   ClusterOutlined,
//   FilterOutlined,
//   ScissorOutlined,
//   UnorderedListOutlined,
//   ExpandAltOutlined,
//   QuestionCircleOutlined,
// } from '@ant-design/icons';

import ButtonControl from '../../components/ButtonControl';
import PropertyMenu from '../../components/PropertyMenu';
import TreeMenu from '../../components/TreeMenu';
// import { CubeControls } from '../../core/CubeControl';
import './style.css';

function Project() {
  const modelView = useRef(null);
  // const cubeView = useRef(null);
  // const cubeCanvas = useRef(null);
  const [model, setModel] = useState({});
  // const [clipping, setClippingActive] = useState(false);
  const [tree, setTreeActive] = useState(false);
  const [highlight, setHighlightActive] = useState(false);
  const [props, setProps] = useState({});
  const [viewer, setViewer] = useState(null);
  const [treeRoot, setTreeRoot] = useState({});

  async function handlePick() {
    const result = await viewer.IFC.selector.pickIfcItem(); //highlightIfcItem hides all other elements

    const { modelID, id } = result;
    const props = await viewer.IFC.getProperties(modelID, id, true, false);

    setProps(props);
  }

  async function handleTree() {
    const ifcProject = await viewer.IFC.getSpatialStructure(model.modelID);

    setTreeRoot(ifcProject);
  }

  useEffect(() => {
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
    }

    loadIfc('../../../src/assets/models/TESTED_Simple_project_01.ifc');

    // const cubeCT = new CubeControls(cubeView.current, cubeCanvas.current, true);
  }, []);

  return (
    <section>
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
        <div className="ifc-tree-view">{treeRoot ? <TreeMenu root={treeRoot} /> : {}}</div>

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
