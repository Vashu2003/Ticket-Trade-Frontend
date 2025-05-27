import { useEffect, useState } from 'react';
import { getAllTickets } from '../../api/ticketService';

export default function TicketList({ onSelect, onEdit }) {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getAllTickets().then(res => setTickets(res.data));
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {tickets.map(ticket => (
        <div
          key={ticket.id}
          className="border p-4 rounded shadow hover:bg-gray-50 cursor-pointer"
        >
          <h3 className="text-xl font-bold">{ticket.name}</h3>
          <p>{ticket.category}</p>
          <p>₹ {ticket.price}</p>
          <div className="flex gap-2 mt-2">
            <button onClick={() => onSelect(ticket)} className="text-blue-600">Details</button>
            <button onClick={() => onEdit(ticket)} className="text-yellow-600">Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
}
