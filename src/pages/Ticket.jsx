import { useState } from 'react';
import TicketList from '../components/Ticket/TicketList';
import TicketDetails from '../components/Ticket/TicketDetails';
import AddTicket from '../components/Ticket/AddTicket';
import EditTicket from '../components/Ticket/EditTicket';
import SearchTicket from '../components/Ticket/SearchTicket';

export default function TicketPage() {
  const [selected, setSelected] = useState(null);
  const [editTicket, setEditTicket] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const reload = () => {
    setRefresh(!refresh);
    setSelected(null);
    setEditTicket(null);
    setSearchResults(null);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Ticket Dashboard</h1>
      <SearchTicket onResults={setSearchResults} />
      <AddTicket onSuccess={reload} />
      <TicketList
        key={refresh}
        onSelect={setSelected}
        onEdit={setEditTicket}
        tickets={searchResults}
      />
      {selected && <TicketDetails ticket={selected} onClose={() => setSelected(null)} />}
      {editTicket && <EditTicket ticket={editTicket} onClose={() => setEditTicket(null)} onUpdated={reload} />}
    </div>
  );
}
