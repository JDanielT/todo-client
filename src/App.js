
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./Home";
import TodoList from "./todo/list";
import Todo from "./todo/todo";

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/todos' exact={true} component={TodoList}/>
          <Route path='/todos/new' component={Todo}/>
          <Route path='/todos/:id' component={Todo}/>
        </Switch>
      </Router>
  );
}

export default App;
