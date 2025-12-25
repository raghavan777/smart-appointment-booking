import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    API.get("/bookings/all").then(res => setBookings(res.data));
  }, []);

  return (
    <div>
      <h2>All Bookings</h2>
      {bookings.map(b => (
        <p key={b._id}>
          {b.userName} | {b.slotId.date} | {b.slotId.time}
        </p>
      ))}
    </div>
  );
}
