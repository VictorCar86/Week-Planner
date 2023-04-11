import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import ListGoalsPage from './routes/ListGoalsPage';
import CreateGoal from './containers/CreateGoal';
import CreateTask from './containers/CreateTask';
import './App.scss';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/goals' element={<ListGoalsPage/>}/>
            <Route path='/goals/create' element={
              <>
                <CreateGoal/>
                <CreateTask/>
              </>
            }/>
          <Route path='*' element={<h1>Error 404</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
