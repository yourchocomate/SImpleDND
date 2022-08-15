import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthRoutes, ProtectedRoutes } from "./components";
import { Notify } from "./components/ui";
import { BaseProvider } from "./contexts";
import { NotFound } from "./pages";
import { LoginPage, RegisterPage } from "./pages/auth";
import { DashboardPage, UsersListPage } from "./pages/user";

const App = () => {

  return (
    <>
      <Router>
        <BaseProvider>
          <Notify/>
          <Routes>
            <Route path="/" element={<AuthRoutes />} >
              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route path="/" element={<ProtectedRoutes />} >
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/users" element={<UsersListPage />} />
            </Route>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BaseProvider>
      </Router>
    </>
  )
}

export default App;
