import React from "react";
import { Switch, Route } from "react-router-dom";
import LoadableLoader from '../../Loader/LoadableLoader';
import Loadable from "react-loadable";

const Home = Loadable({
  loader: () => import("../../Home"),
  loading: LoadableLoader
});
const Dashboard = Loadable({
  loader: () => import("../../Dashboard"),
  loading: LoadableLoader
});
const SingleLink = Loadable({
  loader: () => import("../../SingleLink"),
  loading: LoadableLoader
});
const SearchMain = Loadable({
  loader: () => import("../../SearchMain"),
  loading: LoadableLoader
});
const PageNotFound = Loadable({
  loader: () => import("../../PageNotFound"),
  loading: LoadableLoader
});


const RouterSwitch = props => <Switch>
<Route exact path="/" component={Home} />
<Route path="/dashboard" component={Dashboard} />
<Route path="/search" component={SearchMain} />
<Route path="/link/:id" component={SingleLink} />
<Route path="*" exact component={PageNotFound} />
</Switch>

export default RouterSwitch;