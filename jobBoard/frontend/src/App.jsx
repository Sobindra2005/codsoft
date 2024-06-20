import Searchcontent from "./components/Searchcontent.jsx";
import Blheader from "./components/blHeader.jsx";
import Afheader from "./components/afHeader.jsx";
import Footer from "./components/footer.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/login.jsx";
import Rheader from "./components/Rheader.jsx";
import Notifications from "./components/Notifications.jsx";
import Message from "./components/Message.jsx";
import Messagebox from "./components/Messagebox.jsx";
import Job from "./components/job.jsx";
import Homecontent from "./components/Homecontent.jsx";
import Profile from "./components/profile.jsx";

function App() {
  return (
    <div className="flex flex-col">
      <Afheader/>
      <div className="flex flex-row">
     <Profile/>
      </div>


    </div>
  );
}

export default App;
