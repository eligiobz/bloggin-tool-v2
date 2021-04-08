import "./index.css";
import BaseComponent from "./components/HomeComponents/BaseComponent";
import MenuHeader from "components/MenuHeader";
import MainContent from "components/MainContent";
import SideBar from "components/SideBar";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <MenuHeader />
      <div className="container-xl">
        <div className="row">
          <MainContent />
          <SideBar />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
