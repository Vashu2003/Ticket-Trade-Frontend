export default function TicketDetails({ ticket, onClose }) {
    if (!ticket) return null;
  
    return (
      <div className="border p-4 mt-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold">{ticket.name}</h2>
        <p><strong>Category:</strong> {ticket.category}</p>
        <p><strong>Price:</strong> ₹ {ticket.price}</p>
        <p><strong>Description:</strong> {ticket.description}</p>
        <p><strong>Quantity:</strong> {ticket.quantity}</p>
        <p><strong>Date:</strong> {ticket.releasedate}</p>
        <button onClick={onClose} className="mt-4 text-red-500">Close</button>
      </div>
    );
  }
  