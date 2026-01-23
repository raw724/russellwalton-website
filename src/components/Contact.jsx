import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <h3 className="text-2xl font-bold mb-4">Contact</h3>
      <div className="glass p-8">
        <p>Email: <a href="mailto:me@russellwalton.com" className="underline">me@russellwalton.com</a></p>
        <p>Phone: +44 7797 770500</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/russell-walton-363907253/" className="underline">www.linkedin.com/russellwalton</a></p>
        <p>Github: <a href="https://github.com/raw724" className="underline">www.github.com/raw724</a></p>
      </div>
    </section>
  );
}
