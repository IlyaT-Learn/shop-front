import React from "react";
import ExampleContainer from "../container/ExmpleContainer";
import LoginContainer from "../container/LoginContainer";

const routes = [
  {
    exact: true, //обязательное полное совпадение
    path: "/",
    component: ()=>(<>Main</>)  // тут должен быть компонент(контейнер) импортированный
  },
  {
    // path: '/result/:examRoute',   //вот так можно указать параметры
    //import useReactRouter from 'use-react-router';  - c помощью него можно их достать
    //const { history, location } = useReactRouter();
    path: "/example",
    component: ExampleContainer
  },
  {
    path: "/login",
    component: LoginContainer
  }
];

export default routes;