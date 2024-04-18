import "./App.css";
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const HomePage = () => {
  return <p>目前在首頁</p>;
};

const LogoutButton = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    navigate("/", { replace: true });
  };
  return <button onClick={handleLogout}>登出</button>;
};

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <LogoutButton />
    </>
  );
};

const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Todo" element={<Todo />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
