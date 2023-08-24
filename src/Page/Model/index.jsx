import { useEffect, useRef, useState } from 'react';
import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';
import ButtonControl from '../../components/ButtonControl';
import './style.css';
import { ControlModel } from '../../control/button';

function Project() {
  const ModelView = useRef(null);
  const [viewer, setViewer] = useState();
  useEffect(() => {
    const viewer = new IfcViewerAPI({
      container: ModelView.current,
      backgroundColor: new Color(0xffffff),
    });
    setViewer(viewer);
    if (ModelView.current) {
      viewer.axes.setAxes();
      // viewer.grid.setGrid();
      viewer.IFC.setWasmPath('../../../wasm/');
    }

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
      console.log('ifcProject', ifcProject);
      // await setupAllCategories(); //for ifc categories filter
      // createTreeMenu(ifcProject);
    }

    loadIfc('../../../src/assets/models/Duplex-A-MEP.ifc');

    // window.addEventListener('dblclick', () => {
    //   viewer.IFC.selector.pickIfcItem(true);
    // });
    // window.addEventListener('mousemove', () => {
    //   viewer.IFC.selector.pickIfcItem();
    // });
    // viewer.clipper.active = true;

    // window.onmousemove = () => viewer.IFC.selector.prePickIfcItem();
    // viewer.clipper.active = true;

    // const handleCreatePlane = (e) => {
    //   if (e.keyCode === 80) {
    //     viewer.clipper.createPlane();
    //   } else if (e.keyCode === 79) {
    //     viewer.clipper.deletePlane();
    //   }
    // };
    // window.addEventListener('keydown', handleCreatePlane);

    // return () =>
    //   window.removeEventListener('dblclick', () => {
    //     viewer.IFC.selector.pickIfcItem(true);
    //   });
    // const button = new ControlModel(ModelView.current);
  }, []);
  return (
    <section>
      <div className="flex justify-between items-center mb-2">
        <h1>CÁC DỰ ÁN</h1>
        <button className="border border-[#3b5999] text-[#3b5999] hover:bg-[#3b5999] px-4 py-2">
          Thêm mới
        </button>
        <ButtonControl viewer={viewer} />
      </div>
      <div className="h-[70vh] w-full" id="viewer-container" ref={ModelView}></div>
      {/* <div className="w-full bg-slate-400 h-[65vh]"></div> */}
    </section>
  );
}

export default Project;
