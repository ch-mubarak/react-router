import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = lazy(() => import("./pages/NewQuote"));
const QuoteDetails = lazy(() => import("./pages/QuoteDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AllQuotes = lazy(() => import("./pages/AllQuotes"));
function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="/quotes/:id">
            <QuoteDetails />
          </Route>
          <Route path="/quotes/:id">
            <QuoteDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
