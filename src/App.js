import logo from './logo.svg';
import './App.css';
import Chat from './component/Chat';
import { Route, Routes } from 'react-router-dom';
import Chattingpage from './component/Chattingpage';
function App() {
  return (
    <Routes>
      <Route path="/Chat" element={ <Chat></Chat> } > </Route>
      <Route path="/Chattingpage" element={ <Chattingpage></Chattingpage> } > </Route>
    </Routes>
  );
}
export default App;
