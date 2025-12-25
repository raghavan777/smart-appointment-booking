import API from "../services/api";

export default function CreateSlot() {
  const create = async () => {
    await API.post("/slots/create", {
      date: "2025-01-20",
      time: "10:00 - 10:30"
    });
    alert("Slot created");
  };

  return <button onClick={create}>Create Slot</button>;
}
