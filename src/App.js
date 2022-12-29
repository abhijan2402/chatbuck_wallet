import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Auth/Login';
import AccountCreate from './components/Auth/AccountCreate';
import CreatePassword from './components/Auth/CreatePassword';
import RecoveryPhase from './components/Auth/RecoveryPhase';
import RecoverArray from './components/Auth/RecoverArray';
import SecretFormFilling from './components/Auth/SecretFormFilling';
import MainScreen from './components/Auth/MainScreen';
import HomeScreen from './components/Auth/HomeScreen';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="AccountCreate" element={<AccountCreate />} />
        <Route path="CreatePassword" element={<CreatePassword />} />
        <Route path="RecoveryPhase" element={<RecoveryPhase />} />
        <Route path="SecretFormFilling" element={<SecretFormFilling />} />
        <Route path="MainScreen" element={<MainScreen />} />
        <Route path="HomeScreen" element={<HomeScreen />} />
        <Route path="RecoveryArray" element={<RecoverArray />} />
      </Routes>
    </div>
  );
}

export default App;
