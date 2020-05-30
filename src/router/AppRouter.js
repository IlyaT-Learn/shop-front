import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import appHistory from "./history";
import Header from "../components/molecules/Header/Header";
import Footer from "../components/molecules/Footer/Footer";
import MenuContainer from "../container/MenuContainer";
import styles from './AppRouter.module.scss';

const AppRouter = () => {

  return (
    <>
      <Router history={appHistory}>
        <Header/>
        <div className={styles.appContainer}>
          <MenuContainer/>
          <div className={styles.pageContainer}>
              <Switch>
                {routes.map(route => (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                  />
                ))}
                {/*ниже нужно указать ссылку на компонент типо несуществующая страница*/}
                <Route path="*" component={() => (<>Default</>)}/>
              </Switch>
          </div>
        </div>
        <Footer/>
      </Router>
    </>);
};

export default AppRouter;
