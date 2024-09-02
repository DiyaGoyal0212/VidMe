import './_app.scss';
import {Container} from 'react-bootstrap';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Homescreen from './screens/homeScreen/Homescreen';
import { useState } from 'react';
// import Layout from './Layout';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import LoginScreen from './screens/loginScreen/LoginScreen';

const Layout = ({children}) =>{
  const [sidebar,toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
  <>
  <Header handleToggleSidebar={handleToggleSidebar} />
  <div className="app__container border border-info ">
    <Sidebar 
    sidebar={sidebar}
    handleToggleSidebar={handleToggleSidebar}
    />
    <Container fluid className="app__main border border-warning">
      {children}
    </Container>
  </div>
  </>
  );
};

const App = () => {
 
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Layout><Homescreen /></Layout>} />
        <Route path="/auth" element={<LoginScreen />} />
        <Route path="/search" element={<Layout><h1>search me</h1></Layout>} />
      </Routes>
     </Router>
  );
}

export default Layout;
// export default App;
