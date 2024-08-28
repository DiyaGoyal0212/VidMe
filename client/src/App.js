import './_app.scss';
import {Container} from 'react-bootstrap';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Homescreen from './screens/homeScreen/Homescreen';
import { useState } from 'react';

const App = () => {
  const [sidebar,toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar(value=>!value)
  return (
    <>
    <Header handleToggleSidebar={handleToggleSidebar} />
    <div className="app_container border border-info">
      <Sidebar 
      sidebar={sidebar}
      handleToggleSidebar={handleToggleSidebar}
      />
      <Container fluid className="app__main border border-warning">
        <Homescreen />
      </Container>
    </div>
    </>
  );
}

export default App;
