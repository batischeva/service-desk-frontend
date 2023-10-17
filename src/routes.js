import Admin from "./pages/Admin";
import Requests from "./pages/Requests";
import RequestInfo from "./pages/RequestInfo";
import AddRequestPage from "./pages/AddRequestPage";
import {ADMIN_ROUTE, REQUESTS_ROUTE, ADD_REQUEST_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE, NOT_FOUND_ROUTE} from './utils/consts';
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import EditRequestPage from "./pages/EditRequestPage";

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
    path: REQUESTS_ROUTE + '/:id',
    Component: RequestInfo
  },
  {
    path: ADD_REQUEST_ROUTE,
    Component: AddRequestPage
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Registration
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  },
  {
    path: NOT_FOUND_ROUTE,
    Component: NotFound
  },
];