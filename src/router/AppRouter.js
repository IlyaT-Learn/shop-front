import React from "react";
import { Router, Switch, Route } from 'react-router-dom';
import routes from './routes'
import appHistory from './history';

const AppRouter = () => {

  return (
    <>
      <Router history={appHistory}>
       {/*<HeaderContainer/>*/}
        <main>
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
            <Route path="*" component={()=>(<>Default</>)}/>
          </Switch>
        </main>
        {/*<Footer />*/}
      </Router>
    </>);
};

export default AppRouter;