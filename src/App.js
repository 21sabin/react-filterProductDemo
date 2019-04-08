import React, { Component ,Suspense , lazy } from 'react';
import './App.css';
import FilterTableProduct from './components/FilterTableProduct';
import { BrowserRouter , Route,Router , Link ,Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Header from './components/Header'

const AsyncHome = lazy(()=>import('./components/Home'));
const AsyncAbout = lazy(()=>import('./components/About'));
const AsyncFilter = lazy(()=>import('./components/FilterTableProduct'));



const  PageNotFound=()=> {
  return (
    <div>
        Page Not Found
    </div>
  )
}

class App extends Component {
  
  render() {
    // fallback is an emergency action to be taken when somethins wrong
    
    return (
    <Suspense fallback={<div>loading...</div>}>

      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact={true} component={AsyncHome}/>
          <Route path='/about' exact={true} component={AsyncAbout}/>
          <Route path="/filter" component={AsyncFilter} />
          <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
    </Suspense>
    );
  }
}

export default App;
