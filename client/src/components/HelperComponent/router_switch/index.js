import React from "react";
import { Switch, Route } from "react-router-dom";
import LoadableLoader from "../../Loader/LoadableLoader";
import Loadable from "react-loadable";
import Home from "../../Home";

// const Home = Loadable({
//   loader: () => import("../../Home"),
//   loading: LoadableLoader
// });
const Dashboard = Loadable({
  loader: () => import("../../Dashboard"),
  loading: LoadableLoader
});
const Recevied = Loadable({
  loader: () => import("../../Dashboard/Recevied"),
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
const Privacy = Loadable({
  loader: () => import("../../PrivacyPolicy/Privacy"),
  loading: LoadableLoader
});
const Terms = Loadable({
  loader: () => import("../../PrivacyPolicy/Terms"),
  loading: LoadableLoader
});
const PageNotFound = Loadable({
  loader: () => import("../../PageNotFound"),
  loading: LoadableLoader
});

const RouterSwitch = props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/dashboard/recevied" component={Recevied} />
    <Route path="/search" component={SearchMain} />
    <Route path="/privacypolicy" component={Privacy} />
    <Route path="/termsandconditions" component={Terms} />
    <Route path="/link/:id" component={SingleLink} />
    <Route path="*" exact component={PageNotFound} />
  </Switch>
);

export default RouterSwitch;
