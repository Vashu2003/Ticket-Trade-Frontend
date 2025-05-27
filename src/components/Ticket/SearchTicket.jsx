import { useState } from 'react';
import { searchTickets } from '../../service/ticketService';

export default function SearchTicket({ onResults }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const res = await searchTickets(query);
    onResults(res.data);
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search tickets"
        className="border px-3 py-2 rounded w-full"
      />
      <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
    </div>
  );
}
