import './App.css';
import { Header } from './components/Header';
import { Set } from './components/Set';
import { Butenn } from './components/Butenn';
import './da.css';
import './components/Card.css';
import './components/Set.css';
import './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { PageViewSet } from './components/PageViewSet';
import { PageCreateSet } from './components/PageCreateSet';
import { PageSelectSet } from './components/PageSelectSet';
import {FromCreateCard} from './components/FromCreateCard';
import {FromCreateSet} from './components/FromCreateSet';


function App() {
  return (
    // <div className="App">
    //   <div>
    //     <Header />
    //     <Set />
    //   </div>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageSelectSet/>}></Route>
        <Route path='/set/:id' element={<PageViewSet/>}></Route>
        
        <Route path='/admin' element={<PageCreateSet/>}>
          <Route path='createset' element={<FromCreateSet />} />
          
          <Route path='createcard' element={<FromCreateCard />} />
        </Route>
        <Route path='*' element={<PageSelectSet/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
