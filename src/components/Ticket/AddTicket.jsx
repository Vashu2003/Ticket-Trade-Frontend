import { useState } from 'react';
import { createTicket } from '../../service/ticketService';

export default function AddTicket({ onSuccess }) {
  const [form, setForm] = useState({
    name: '', description: '', category: '', price: '', quantity: '', releasedate: ''
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTicket(form, image);
    onSuccess();
    setForm({ name: '', description: '', category: '', price: '', quantity: '', releasedate: '' });
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow mt-4 space-y-3">
      <h2 className="text-lg font-bold">Add Ticket</h2>
      <input name="name" placeholder="Name" className="input" value={form.name} onChange={handleChange} required />
      <input name="category" placeholder="Category" className="input" value={form.category} onChange={handleChange} />
      <input name="price" placeholder="Price" type="number" className="input" value={form.price} onChange={handleChange} />
      <input name="quantity" placeholder="Quantity" type="number" className="input" value={form.quantity} onChange={handleChange} />
      <input name="releasedate" type="text" placeholder="DD-MM-YYYY" className="input" value={form.releasedate} onChange={handleChange} />
      <textarea name="description" placeholder="Description" className="input" value={form.description} onChange={handleChange}></textarea>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
}
