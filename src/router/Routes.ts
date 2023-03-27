import { LazyExoticComponent } from 'react';
// import {
//   HomeOutlined,
//   AppstoreOutlined,
//   AppstoreAddOutlined,
// } from "@ant-design/icons";

import { lazy, ReactNode } from "react";
const HomePage = lazy(() => import("pages/HomePage"));
const AboutPage = lazy(() => import("pages/AboutPage"));
const ProjectsPage = lazy(() => import("pages/ProjectsPage"));
const MessageBoard = lazy(() => import("projects/MessageBoard"));
const Snake = lazy(() => import("projects/Snake"));

export interface IRouters {
  path: string;
  name: string;
  Icon?: ReactNode;
  Component?: ReactNode | LazyExoticComponent<() => any>;
  children?: IRouters[];
}

const Routers: IRouters[] = [
  {
    path: "/",
    name: "Home",
    // Icon: HomeOutlined,
    Component: HomePage,
  },
  {
    path: "/projects",
    name: "Projects",
    Component: ProjectsPage,
    // Icon: AppstoreOutlined,
    children: [
      {
        path: "/projects/snake",
        name: "Snake",
        Component: Snake,
      },
      {
        path: "/projects/messageboard",
        name: "Message Board",
        // Icon: "",
        Component: MessageBoard,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // Icon: AppstoreAddOutlined,
    Component: AboutPage,
  },
];

export default Routers;
