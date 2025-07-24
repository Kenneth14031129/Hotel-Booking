import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Error from "./Components/Error.jsx";
import Loading from "./Components/Loading.jsx";
import Homepage from "./Homepage.jsx";
import Rooms from "./Rooms.jsx";
import Amenities from "./Amenities.jsx";
import Dining from "./Dining.jsx";
import Events from "./Events.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Global Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/error" element={<Error />} />

            {/* 404 Catch-all route */}
            <Route path="*" element={<Error type="404" />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
