import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import GoalPage from './routes/GoalPage';
import ListGoalsPage from './routes/ListGoalsPage';
import './App.scss';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/goals' element={<ListGoalsPage/>}/>
            <Route path='/goal' element={<GoalPage />}/>
          <Route path='*' element={<h1>Error 404</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
