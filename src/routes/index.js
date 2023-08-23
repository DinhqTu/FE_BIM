import config from '../config';

import Group from '../Page/Group';
import Home from '../Page/Home';
import Info from '../Page/Info';
import Project from '../Page/Project';
import User from '../Page/User';
import Dynamic from '../Page/Dynamic';
import Login from '../Page/Login';
import Model from '../Page/Model';
import Register from '../Page/Register';

export const publicRoutes = [
  { path: config.routes.login, component: Login, Layout: null },
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
  { path: config.routes.model, component: Model },
  { path: config.routes.register, component: Register, Layout: null },
];
