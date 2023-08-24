import { useEffect, useRef, useState } from 'react';
import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';
import ButtonControl from '../../components/ButtonControl';
import PropertyMenu from '../../components/PropertyMenu';
import './style.css';

function Project() {
  const modelView = useRef(null);
  const [props, setProps] = useState({});
  const [viewer, setViewer] = useState(null);

  async function handlePick(){
    const result = await viewer.IFC.selector.pickIfcItem(); //highlightIfcItem hides all other elements

    const { modelID, id } = result;
    const props = await viewer.IFC.getProperties(modelID, id, true, false);

    setProps(props);
  }

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

    async function loadIfc(url) {
      const model = await viewer.IFC.loadIfcUrl(url);

      await viewer.shadowDropper.renderShadow(model.modelID);
    }

    loadIfc('../../../src/assets/models/Duplex-A-MEP.ifc');

  }, []);

  return (
    <section>
      <ButtonControl viewer={viewer} />
      <div className="h-[70vh] w-full" id="viewer-container" ref={modelView} onMouseMove={() => viewer.IFC.selector.prePickIfcItem()}
        onMouseDown={(e) => console.log(e)}
        onDoubleClick={()  => handlePick()}
      >
        <div className='ifc-property-menu'>
          {props ? <PropertyMenu properties={props} /> : null} 
        </div>
      </div>
    </section>
  );
}

export default Project; 