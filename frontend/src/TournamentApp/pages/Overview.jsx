import { useEffect, useState } from "react";
import axios from "axios";

function Overview() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/tournaments/")
      .then(res => {
        console.log("Data from backend:", res.data);
        setTournaments(res.data);
      })
      .catch(err => console.log("Error:", err));
  }, []);

  return (
    <div>
      <h2>Tournament List</h2>

      {tournaments.map(t => (
        <div key={t.id}>
          <h3>{t.name}</h3>
          <p>Location: {t.location}</p>
          <p>Prize: ₹{t.prize}</p>
        </div>
      ))}
    </div>
  );
}

export default Overview;
