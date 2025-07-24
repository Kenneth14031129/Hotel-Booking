import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Error from "./Components/Error.jsx";
import Loading from "./Components/Loading.jsx";
import Homepage from "./Homepage.jsx";
import Rooms from "./BookingRooms/Rooms.jsx";
import Amenities from "./Amenities.jsx";
import Dining from "./Dining.jsx";
import Events from "./Events.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Booking from "./BookingRooms/Booking.jsx";

function HomepageWrapper() {
  const navigate = useNavigate();

  const handleNavigate = (page, options = {}) => {
    if (page === "about" && options.section) {
      navigate(`/about?section=${options.section}`);
    } else {
      navigate(`/${page}`);
    }
  };

  return <Homepage onNavigate={handleNavigate} />;
}

// Create a wrapper component for About
function AboutWrapper() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section") || "story";

  const handleNavigate = (page, options = {}) => {
    if (page === "about" && options.section) {
      navigate(`/about?section=${options.section}`);
    } else {
      navigate(`/${page}`);
    }
  };

  return <About onNavigate={handleNavigate} initialSection={section} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomepageWrapper />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Error type="404" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
