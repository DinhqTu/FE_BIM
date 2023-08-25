import { IfcViewerAPI } from "web-ifc-viewer";
import { Color } from "three";

export class View {
    constructor(container) {
        this.createViewer(container);
    }

    createViewer(container) {
        this.viewer = new IfcViewerAPI({ container, backgroundColor: new Color(255, 255, 255) });
        this.viewer.axes.setAxes();
        this.viewer.IFC.setWasmPath("../wasm");
        // viewer.grid.setGrid();
      
        // return viewer;
    }
}