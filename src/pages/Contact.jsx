import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', contact: '', address: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(import.meta.env.VITE_API_BASE_URL); // ✅ correct
 // check this in console
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/contacts`, form);
      alert('Contact saved!');
      setForm({ name: '', email: '', contact: '', address: '' });
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
      alert('Error saving contact');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="contact" placeholder="Phone" value={form.contact} onChange={handleChange} required />
        <textarea name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
