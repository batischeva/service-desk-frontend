import Admin from "./pages/Admin";
import Requests from "./pages/Requests";
import RequestInfo from "./pages/RequestInfo";
import AddRequestPage from "./pages/AddRequestPage";
import Auth from "./pages/Auth";
import {ADMIN_ROUTE, REQUESTS_ROUTE, REQUEST_INFO_ROUTE, ADD_REQUEST_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE} from './utils/consts';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: REQUESTS_ROUTE,
    Component: Requests
  },
  {
    path: REQUEST_INFO_ROUTE + '/:id',
    Component: RequestInfo
  },
  {
    path: ADD_REQUEST_ROUTE,
    Component: AddRequestPage
  },
];

export const publicRoutes = [
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
];