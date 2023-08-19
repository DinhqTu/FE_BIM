import config from '../config';

import Group from '../Layouts/Group';
import Home from '../Layouts/Home';
import Info from '../Layouts/Info';
import Project from '../Layouts/Project';
import User from '../Layouts/User';
import Dynamic from '../Layouts/Dynamic';

export const publicRoutes = [
  { path: config.routes.bangthongtin, component: Home },
  { path: config.routes.duan, component: Project },
  { path: config.routes.nguoidung, component: User },
  { path: config.routes.nhomnguoidung, component: Group },
  { path: config.routes.thongtincanhan, component: Info },
  { path: config.routes.phanloaicongtrinh, component: Dynamic },
  { path: config.routes.phanloaiketcau, component: Dynamic },
  { path: config.routes.phanloaihopdong, component: Dynamic },
  { path: config.routes.cactrangthai, component: Dynamic },
  { path: config.routes.trangthaidulieu, component: Dynamic },
  { path: config.routes.bangmau, component: Dynamic },
  { path: config.routes.chondoitac, component: Dynamic },
];
