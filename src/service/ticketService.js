import api from '../api/axios';

// GET all tickets
export const getAllTickets = () => api.get('/ticket');

// GET ticket by ID
export const getTicketById = (id) => api.get(`/ticket/${id}`);

// GET ticket image
export const getTicketImage = (ticketId) =>
  api.get(`/ticket/${ticketId}/image`, { responseType: 'blob' });

// ADD new ticket (multipart/form-data)
export const createTicket = (ticketData, imageFile) => {
  const formData = new FormData();
  formData.append('product', new Blob([JSON.stringify(ticketData)], { type: 'application/json' }));
  formData.append('image', imageFile);

  return api.post('/ticket', formData);
};

// UPDATE ticket
export const updateTicket = (id, ticketData, imageFile) => {
  const formData = new FormData();
  formData.append('product', new Blob([JSON.stringify(ticketData)], { type: 'application/json' }));
  formData.append('image', imageFile);

  return api.put(`/products/${id}`, formData);
};

// DELETE ticket
export const deleteTicket = (id) => api.delete(`/ticket/${id}`);

// SEARCH tickets
export const searchTickets = (keyword) =>
  api.get(`/products/search`, { params: { keyword } });
