import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <div>

      <div className="bg-dark text-white py-5">
        <div className="container py-3">
          <span className="badge bg-warning text-dark mb-3">📬 Get In Touch</span>
          <h1 className="display-4 fw-bold mb-3">
            Contact <span className="text-warning">Us</span>
          </h1>
          <p className="lead text-white-50" style={{ maxWidth: 600 }}>
            Have a question or concern? Reach out to the IT Department and
            we'll get back to you as soon as possible.
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">

          <div className="col-lg-7">
            <p className="text-primary fw-semibold text-uppercase small mb-1">Send a Message</p>
            <h2 className="fw-bold mb-4">Contact Form</h2>

            {submitted ? (
              <div className="alert alert-success rounded-3 p-4" role="alert">
                <h5 className="fw-bold mb-1">✅ Message Sent!</h5>
                <p className="mb-0">Thank you, <strong>{form.name}</strong>! We'll get back to you at <strong>{form.email}</strong> shortly.</p>
              </div>
            ) : (
              <div className="card border-0 shadow-sm p-4 rounded-4">
                <div className="mb-3">
                  <label className="form-label fw-semibold small">Full Name <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="e.g. Juan Dela Cruz"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold small">Email Address <span className="text-danger">*</span></label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="e.g. juan@university.edu.ph"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold small">Subject</label>
                  <select name="subject" className="form-select" value={form.subject} onChange={handleChange}>
                    <option value="">Select a subject...</option>
                    <option value="Academic Records">Academic Records</option>
                    <option value="Tuition & Billing">Tuition & Billing</option>
                    <option value="Schedule">Schedule & Calendar</option>
                    <option value="Library">Library Portal</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold small">Message <span className="text-danger">*</span></label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows={5}
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="btn btn-primary fw-bold px-4 py-2"
                  onClick={handleSubmit}
                >
                  Send Message →
                </button>
              </div>
            )}
          </div>

          <div className="col-lg-5">
            <p className="text-primary fw-semibold text-uppercase small mb-1">Reach Us Directly</p>
            <h2 className="fw-bold mb-4">Contact Info</h2>

            <div className="d-flex flex-column gap-3">
              {[
                { icon: "📧", label: "Email", value: "sit@university.edu.ph", sub: "We reply within 24 hours" },
                { icon: "📞", label: "Phone", value: "+63 (2) 8123-4567", sub: "Mon–Fri, 8:00 AM – 5:00 PM" },
                { icon: "📱", label: "Mobile", value: "+63 917 123 4567", sub: "For urgent concerns" },
                { icon: "🏢", label: "Office", value: "Building C, Room 301", sub: "Main Campus" },
              ].map((item) => (
                <div key={item.label} className="d-flex align-items-start gap-3 p-3 rounded-3 bg-light">
                  <div
                    className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 46, height: 46, fontSize: "1.2rem" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="fw-bold mb-0 small text-uppercase text-muted">{item.label}</p>
                    <p className="fw-semibold mb-0">{item.value}</p>
                    <p className="text-muted mb-0 small">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>


            <div className="mt-4 p-4 bg-dark text-white rounded-4">
              <p className="fw-bold mb-3 small text-uppercase text-white-50">Follow Us</p>
              <div className="d-flex gap-3">
                {[
                  { icon: "📘", label: "Facebook" },
                  { icon: "📸", label: "Instagram" },
                  { icon: "🐦", label: "Twitter" },
                ].map((s) => (
                  <span
                    key={s.label}
                    className="badge bg-white bg-opacity-10 px-3 py-2 rounded-3 small"
                    style={{ cursor: "pointer" }}
                  >
                    {s.icon} {s.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer className="bg-dark text-white-50 text-center py-3 small">
        © {new Date().getFullYear()} University IT Department · Student Services Portal
      </footer>

    </div>
  );
}