import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Error from "./Components/Error.jsx";
import Loading from "./Components/Loading.jsx";
import Homepage from "./Homepage.jsx";
import Rooms from "./BookingRooms/Rooms.jsx";
import Amenities from "./BookingAmenities/Amenities.jsx";
import Dining from "./BookingDining/Dining.jsx";
import Events from "./Events.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import BookingRooms from "./BookingRooms/BookingRooms.jsx";
import BookingAmenities from "./BookingAmenities/BookingAmenities.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking-rooms" element={<BookingRooms />} />
            <Route path="/booking-amenities" element={<BookingAmenities />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Error type="404" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
