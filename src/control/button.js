import { IfcViewerAPI } from 'web-ifc-viewer';
import { Color } from 'three';

export class ControlModel {
  constructor(viewer, container) {
    this.viewer = viewer;
    this.container = container;
  }

  createPlane() {
    // if (clippingPlaneActive) {
    this.container.onauxclick(() => {
      this.viewer.clipper.createPlane();

    })
    // } else {
    //   this.viewer.clipper.deleteAllPlanes();
    // }
  }
}
