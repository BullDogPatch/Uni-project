import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    class_name: "nav-text"
  },
  {
    title: "Use Cases",
    path: "/useCases",
    icon: <IoIcons.IoIosPaper />,
    class_name: "nav-text"
  },
  {
    title: "Technical/Ethical/Social Challenges ",
    path: "/technical-challenges",
    icon: "",
    class_name: "nav-text"
  },

  {
    title: "Short CV",
    path: "/shortCv",
    icon: "",
    class_name: "nav-text"
  },
  {
    title: "References",
    path: "/references",
    icon: "",
    class_name: "nav-text"
  },
  {
    title: "About and Credits",
    path: "/about",
    icon: "",
    class_name: "nav-text"
  }
];
