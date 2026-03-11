import { Link } from "react-router-dom";

const services = [
  {
    icon: "🎓", title: "Academic Records",
    desc: "Access your official academic documents anytime, anywhere. Request and view transcripts, grade reports, enrollment certificates, and other official academic records without visiting the registrar's office.",
    features: ["View semester grades", "Request official transcripts", "Download enrollment certificates", "Check academic standing"],
  },
  {
    icon: "📅", title: "Schedule & Calendar",
    desc: "Stay on top of your academic life with our integrated scheduling system. View your class schedule, track important academic dates, and never miss an exam or deadline again.",
    features: ["View class timetable", "Check exam schedules", "Track enrollment periods", "View academic calendar"],
  },
  {
    icon: "💳", title: "Tuition & Billing",
    desc: "Manage your financial obligations with ease. View your tuition breakdown, check outstanding balances, review payment history, and access financial aid information all in one place.",
    features: ["View tuition breakdown", "Check payment history", "Monitor outstanding balance", "Access financial aid status"],
  },
  {
    icon: "📚", title: "Library Portal",
    desc: "Unlock the full power of the university library from your device. Browse thousands of physical and digital resources, reserve books, access academic journals, and manage your borrowing history online.",
    features: ["Browse book catalog", "Reserve library materials", "Access digital journals", "View borrowing history"],
  },
  {
    icon: "🖥️", title: "IT Support",
    desc: "Having technical issues? Submit tickets for hardware or software problems, track the status of your requests, and get assistance from our technical team.",
    features: ["Submit support tickets", "Track ticket status", "Request software access", "Report equipment issues"],
  },
  {
    icon: "📝", title: "Enrollment Services",
    desc: "Complete your enrollment process online without the long queues. Add or drop subjects, view available sections, confirm your enrollment, and print your registration form directly from the portal.",
    features: ["Add or drop subjects", "View open sections", "Confirm enrollment", "Print registration form"],
  },
];

export default function Service() {
  return (
    <>
      <section className="bg-dark text-white py-5">
        <div className="container py-3">
          <h1 className="display-4 fw-bold mb-3">Our <span className="text-warning">Services</span></h1>
          <p className="lead text-white-50" style={{ maxWidth: 600 }}>
            The Student Services Portal provides everything you need to manage your academic life — all in one place.
          </p>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="fw-bold mb-5">All Services</h2>
        
        <div className="row g-4">
          {services.map((s) => (
            <div className="col-lg-6" key={s.title}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-3 d-flex align-items-center justify-content-center bg-light flex-shrink-0" style={{ width: 56, height: 56, fontSize: "1.8rem" }}>
                    {s.icon}
                  </div>
                  <h5 className="fw-bold mb-0">{s.title}</h5>
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
      </section>

      <section className="container pb-5">
        <div className="bg-primary text-white rounded-4 p-5 d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div>
            <h3 className="fw-bold mb-1">Can't find what you need?</h3>
            <p className="mb-0 text-white-50">Contact us and we'll point you in the right direction.</p>
          </div>
          <Link to="/contact" className="btn btn-light text-primary fw-bold px-4">Contact Us →</Link>
        </div>
      </section>

      <footer className="bg-dark text-white-50 text-center py-3 small">
        © {new Date().getFullYear()} University IT Department · Student Services Portal
      </footer>
    </>
  );
}