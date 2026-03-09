import { Link } from "react-router-dom";
import heroImg from "../assets/Images/283630-cover.jpg";
import academicImg from "../assets/Images/report-card-with-perfect-grades-172305709-589cfb215f9b58819c7327dd.jpg";
import scheduleImg from "../assets/Images/2026-calendar-green-with-holidays-landscape-sunday-start-en-ph-1188x918.png";
import billingImg from "../assets/Images/Tution and bill.jpg";
import libraryImg from "../assets/Images/Library.jpg";

const services = [
  { title: "Academic Records", desc: "Access transcripts, grades, and enrollment certificates anytime.", img: academicImg },
  { title: "Schedule & Calendar", desc: "View class schedules, exam dates, and academic deadlines.", img: scheduleImg },
  { title: "Tuition & Billing", desc: "Check balances, payment history, and financial aid status.", img: billingImg },
  { title: "Library Portal", desc: "Browse resources, reserve books, and access digital journals.", img: libraryImg },
];

const announcements = [
  { date: "Mar 10", label: "Enrollment", color: "primary", text: "2nd Semester enrollment opens March 15." },
  { date: "Mar 8",  label: "Holiday",    color: "warning", text: "No classes on March 12 — Foundation Day." },
  { date: "Mar 5",  label: "Exam",       color: "danger",  text: "Midterm exams scheduled March 18–22." },
];

export default function Home() {
  return (
    <div>

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
        className="text-white d-flex align-items-center"
      >
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <span className="badge bg-warning text-dark mb-3 px-3 py-2">🏛 University IT Department</span>
              <h1 className="display-3 fw-bold mb-3">
                Your <span className="text-warning">Student Services</span> Portal
              </h1>
              <p className="lead text-white-50 mb-4">
                Everything you need — academic records, schedules, billing, and more —
                all in one place. Fast, secure, and built for students.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/service" className="btn btn-warning fw-bold px-4 py-2">
                  Explore Services →
                </Link>
                <Link to="/contact" className="btn btn-outline-light px-4 py-2">
                  Contact Us
                </Link>
              </div>

              <div className="d-flex gap-5 justify-content-center mt-5 pt-4 border-top border-secondary">
                {[["4", "Core Services"], ["24/7", "Online Access"], ["100%", "Secure Portal"]].map(([num, label]) => (
                  <div key={label}>
                    <h3 className="text-warning fw-bold mb-0">{num}</h3>
                    <small className="text-white-50 text-uppercase">{label}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container py-5">
        <p className="text-primary fw-semibold text-uppercase small mb-1">What we offer</p>
        <h2 className="fw-bold mb-4">Quick Access Services</h2>
        <div className="row g-4">
          {services.map((s) => (
            <div className="col-sm-6 col-lg-3" key={s.title}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={s.img}
                  alt={s.title}
                  className="card-img-top"
                  style={{ height: 160, objectFit: "cover" }}
                />
                <div className="card-body p-3">
                  <h5 className="card-title fw-bold">{s.title}</h5>
                  <p className="card-text text-muted small">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dark text-white py-5">
        <div className="container">
          <p className="text-info fw-semibold text-uppercase small mb-1">Latest updates</p>
          <h2 className="fw-bold mb-4">Announcements</h2>
          <div className="col-lg-7">
            {announcements.map((a) => (
              <div className="d-flex gap-3 align-items-start bg-white bg-opacity-10 rounded-3 p-3 mb-3" key={a.text}>
                <small className="text-warning fw-bold text-nowrap pt-1">{a.date}</small>
                <div>
                  <span className={`badge bg-${a.color} mb-1`}>{a.label}</span>
                  <p className="text-white-75 mb-0 small">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="container py-5">
        <div className="bg-primary text-white rounded-4 p-5 d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div>
            <h3 className="fw-bold mb-1">Need help navigating the portal?</h3>
            <p className="mb-0 text-white-50">Our support team is ready to assist you.</p>
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