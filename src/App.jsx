import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/login";
import { AdminHome } from "./pages/AdminHome/AdminHome";
import { CaixaHome } from "./pages/CaixaHome/CaixaHome";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { ConfiguracaoEstacionamento } from "./pages/ConfiguracaoEstacionamento/ConfiguracaoEstacionamento";
// import { ConfiguracaoAcesso } from "./pages/ConfiguracaoAcesso/ConfiguracaoAcesso";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['ADMINISTRADOR']}>
                <AdminHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/caixa"
            element={
              <ProtectedRoute allowedRoles={['CAIXA']}>
                <CaixaHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/configuracao-estacionamento"
            element={
              <ProtectedRoute allowedRoles={['ADMINISTRADOR']}>
                <ConfiguracaoEstacionamento />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/configuracao-acesso"
            element={
              <ProtectedRoute allowedRoles={['ADMINISTRADOR']}>
                <ConfiguracaoAcesso />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
