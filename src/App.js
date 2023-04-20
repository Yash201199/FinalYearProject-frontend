import { Routes as Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContextProvider } from "./context/ToastContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateContact from "./pages/CreateContact";

// import EditContact from "./pages/EditContact";
import Myproperties from "./pages/Myproperties";
import PropertyRegister from "./pages/PropertyRegister";
// import AllProperty from "./pages/Myproperties";

const App = () => {
  return (
    <ToastContextProvider>
      <AuthContextProvider>
        <Layout>
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/myproperties" element={<Myproperties />} />
            <Route path="/PropertyRegister" element={<PropertyRegister/>} />

            <Route path="/create" element={<CreateContact />} />
            {/* <Route path="/myProperty" element={<AllProperty />} /> */}
            {/* <Route path="/edit/:id" element={<EditContact />} /> */}
          </Switch>
        </Layout>
      </AuthContextProvider>
    </ToastContextProvider>
  );
};

export default App;
