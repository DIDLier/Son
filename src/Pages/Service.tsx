import { Link } from "react-router-dom";

const services = [
  {
    icon: "🎓",
    title: "Academic Records",
    badge: "Records",
    badgeColor: "primary",
    desc: "Access your official academic documents anytime, anywhere. This service allows students to request and view transcripts, grade reports, enrollment certificates, and other official academic records without visiting the registrar's office.",
    features: ["View semester grades", "Request official transcripts", "Download enrollment certificates", "Check academic standing"],
  },
  {
    icon: "📅",
    title: "Schedule & Calendar",
    badge: "Schedule",
    badgeColor: "success",
    desc: "Stay on top of your academic life with our integrated scheduling system. View your class schedule, track important academic dates, and never miss an exam or deadline again.",
    features: ["View class timetable", "Check exam schedules", "Track enrollment periods", "View academic calendar"],
  },
  {
    icon: "💳",
    title: "Tuition & Billing",
    badge: "Billing",
    badgeColor: "warning",
    desc: "Manage your financial obligations with ease. Our billing portal lets you view your tuition breakdown, check outstanding balances, review payment history, and access financial aid information all in one place.",
    features: ["View tuition breakdown", "Check payment history", "Monitor outstanding balance", "Access financial aid status"],
  },
  {
    icon: "📚",
    title: "Library Portal",
    badge: "Library",
    badgeColor: "info",
    desc: "Unlock the full power of the university library from your device. Browse thousands of physical and digital resources, reserve books, access academic journals, and manage your borrowing history online.",
    features: ["Browse book catalog", "Reserve library materials", "Access digital journals", "View borrowing history"],
  },
  {
    icon: "🖥️",
    title: "IT Support",
    badge: "Support",
    badgeColor: "danger",
    desc: "Having technical issues? Our IT support service is here to help. Submit tickets for hardware or software problems, track the status of your requests, and get assistance from our technical team.",
    features: ["Submit support tickets", "Track ticket status", "Request software access", "Report equipment issues"],
  },
  {
    icon: "📝",
    title: "Enrollment Services",
    badge: "Enrollment",
    badgeColor: "secondary",
    desc: "Complete your enrollment process online without the long queues. Add or drop subjects, view available sections, confirm your enrollment, and print your registration form directly from the portal.",
    features: ["Add or drop subjects", "View open sections", "Confirm enrollment", "Print registration form"],
  },
];

export default function Service() {
  return (
    <div>

      <div className="bg-dark text-white py-5">
        <div className="container py-3">
          <span className="badge bg-warning text-dark mb-3">🛠 What We Offer</span>
          <h1 className="display-4 fw-bold mb-3">
            Our <span className="text-warning">Services</span>
          </h1>
          <p className="lead text-white-50" style={{ maxWidth: 600 }}>
            The Student Services Portal provides everything you need to manage
            your academic life, all in one place.
          </p>
        </div>
      </div>

      <div className="container py-5">
        <p className="text-primary fw-semibold text-uppercase small mb-1">Available Services</p>
        <h2 className="fw-bold mb-5">All Services</h2>

        <div className="row g-4">
          {services.map((s) => (
            <div className="col-lg-6" key={s.title}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center bg-light flex-shrink-0"
                    style={{ width: 56, height: 56, fontSize: "1.8rem" }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <span className={`badge bg-${s.badgeColor} mb-1`}>{s.badge}</span>
                    <h5 className="fw-bold mb-0">{s.title}</h5>
                  </div>
                </div>

                <p className="text-muted small mb-3">{s.desc}</p>

                <ul className="list-unstyled mb-0">
                  {s.features.map((f) => (
                    <li key={f} className="d-flex align-items-center gap-2 small text-muted mb-1">
                      <span className="text-success fw-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-5">
        <div className="bg-primary text-white rounded-4 p-5 d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div>
            <h3 className="fw-bold mb-1">Can't find what you need?</h3>
            <p className="mb-0 text-white-50">Contact us and we'll point you in the right direction.</p>
          </div>
          <Link to="/contact" className="btn btn-light text-primary fw-bold px-4">
            Contact Us →
          </Link>
        </div>
      </div>

      <footer className="bg-dark text-white-50 text-center py-3 small">
        © {new Date().getFullYear()} University IT Department · Student Services Portal
      </footer>

    </div>
  );
}