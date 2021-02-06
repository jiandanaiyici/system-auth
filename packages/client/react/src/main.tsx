import './index.css';

// https://github.com/umijs/umi/blob/645fac7f840475069915dd8141abbc11ad59efa0/packages/renderer-react/src/renderRoutes/renderRoutes.tsx#L81

import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import routes, { CustomRouteProps } from './router';

const rootDom = document.getElementById('root');

interface IOpts {
  routes: CustomRouteProps[];
  rootRoutes?: CustomRouteProps[];
}

interface IGetRouteElementProps {
  route: CustomRouteProps;
  index: number;
  opts: IOpts;
}

interface IRenderProps {
  route: CustomRouteProps;
  opts: IOpts;
  props: object;
}

function render({ route, opts, props }: IRenderProps) {
  const routes = renderRoutes({
    ...opts,
    routes: route.routes ?? [],
  });

  const { component: Component } = route;
  if (Component) {
    const newProps = {
      ...props,
      ...opts,
      route,
      // routes,
    };
    // @ts-ignore
    return <Component {...newProps}>{routes}</Component>;
  } else {
    return routes;
  }
}

function getRouteElement({ route, index, opts }: IGetRouteElementProps) {
  if (route.redirect) {
    return <Redirect to={route.redirect} from={route.path as string} />;
  }

  return (
    <Route
      {...route}
      key={route.key ?? index}
      render={(props) => {
        return render({ route, opts, props });
      }}
    />
  );
}

// route.routes
// ? renderRoutes({ routes: route.routes })
function renderRoutes(opts: IOpts) {
  return opts.routes ? (
    <Switch>
      {opts.routes.map((route, index) =>
        getRouteElement({
          route,
          index,
          opts: {
            ...opts,
            rootRoutes: opts.rootRoutes || opts.routes,
          },
        }),
      )}
    </Switch>
  ) : null;
}

ReactDOM.render(
  // <React.StrictMode>
  <HashRouter>{renderRoutes({ routes })}</HashRouter>,
  // </React.StrictMode>
  rootDom,
);
