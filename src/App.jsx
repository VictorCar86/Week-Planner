import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './context/reduxState';
import ListGoalsPage from './routes/ListGoalsPage';
import HomePage from './routes/HomePage';
import GoalPage from './routes/GoalPage';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/goals' element={<ListGoalsPage/>}/>
            <Route path='/goals/:goalId' element={<GoalPage />}/>
          <Route path='*' element={<h1>Error 404</h1>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
