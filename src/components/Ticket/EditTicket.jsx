import { useState } from 'react';
import { updateTicket } from '../../api/ticketService';

export default function EditTicket({ ticket, onClose, onUpdated }) {
  const [form, setForm] = useState(ticket);
  const [image, setImage] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTicket(ticket.id, form, image);
    onUpdated();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow mt-4 space-y-3">
      <h2 className="text-lg font-bold">Edit Ticket</h2>
      <input name="name" className="input" value={form.name} onChange={handleChange} />
      <input name="category" className="input" value={form.category} onChange={handleChange} />
      <input name="price" className="input" value={form.price} onChange={handleChange} />
      <input name="quantity" className="input" value={form.quantity} onChange={handleChange} />
      <input name="releasedate" className="input" value={form.releasedate} onChange={handleChange} />
      <textarea name="description" className="input" value={form.description} onChange={handleChange}></textarea>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded">Update</button>
      <button onClick={onClose} type="button" className="text-red-600 ml-4">Cancel</button>
    </form>
  );
}
