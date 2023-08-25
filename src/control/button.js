import { IfcViewerAPI } from 'web-ifc-viewer';
import { Color } from 'three';

export class ControlModel {
  constructor(viewer) {
    this.viewer = viewer;
  }

  createPlane(clippingPlaneActive) {
    if (clippingPlaneActive) {
      this.viewer.clipper.createPlane();
    } else {
      this.viewer.clipper.deleteAllPlanes();
    }
  }
}
