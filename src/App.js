import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import SidebarLayout from "./components/layout/Sidebar/SidebarLayout";

import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";

import StructureList from "./screens/Structure/StructureList";
import StructureCreate from "./screens/Structure/StructureCreate";
import StructureUpdate from "./screens/Structure/StructureUpdate";
import PostalCodeList from "./screens/PostalCode/PostalCodeList";
import PostalCodeCreate from "./screens/PostalCode/PostalCodeCreate";
import PostalCodeUpdate from "./screens/PostalCode/PostalCodeUpdate";
import SuburbList from "./screens/Suburb/SuburbList";
import SuburbCreate from "./screens/Suburb/SuburbCreate";
import SuburbUpdate from "./screens/Suburb/SuburbUpdate";
import SectionList from "./screens/Section/SectionList";
import SectionCreate from "./screens/Section/SectionCreate";
import SectionUpdate from "./screens/Section/SectionUpdate";
import UserList from "./screens/User/UserList";
import UserCreate from "./screens/User/UserCreate";
import UserUpdate from "./screens/User/UserUpdate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route element={<SidebarLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="structure/list" element={<StructureList />} />
          <Route path="structure/create" element={<StructureCreate />} />
          <Route path="structure/:id" element={<StructureUpdate />} />

          <Route path="postalcode/list" element={<PostalCodeList />} />
          <Route path="postalcode/create" element={<PostalCodeCreate />} />
          <Route path="postalcode/:id" element={<PostalCodeUpdate />} />

          <Route path="suburb/list" element={<SuburbList />} />
          <Route path="suburb/create" element={<SuburbCreate />} />
          <Route path="suburb/:id" element={<SuburbUpdate />} />

          <Route path="section/list" element={<SectionList />} />
          <Route path="section/create" element={<SectionCreate />} />
          <Route path="section/:id" element={<SectionUpdate />} />

          <Route path="user/list" element={<UserList />} />
          <Route path="user/create" element={<UserCreate />} />
          <Route path="user/:id" element={<UserUpdate />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
