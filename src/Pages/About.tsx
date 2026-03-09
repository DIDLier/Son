import { Link } from "react-router-dom";
import teacherImg from "../assets/Images/teacher.jpg";

const milestones = [
  { year: "2005", title: "Department Founded", desc: "The School of Information Technology was established to meet the growing demand for tech professionals." },
  { year: "2010", title: "First IT Lab Opened", desc: "A state-of-the-art computer laboratory was inaugurated, supporting hands-on learning for students." },
  { year: "2015", title: "Portal Launched", desc: "The first version of the Student Services Portal went live, digitizing key academic processes." },
  { year: "2020", title: "Full Online Access", desc: "All student services moved online, ensuring 24/7 access to academic records and resources." },
  { year: "2026", title: "Portal Redesigned", desc: "A modern React-powered portal was launched with improved UI/UX and mobile responsiveness." },
];

export default function About() {
  return (
    <div>

      <div className="bg-dark text-white py-5">
        <div className="container py-3">
          <span className="badge bg-warning text-dark mb-3">🏛 Who We Are</span>
          <h1 className="display-4 fw-bold mb-3">About the <span className="text-warning">IT Department</span></h1>
          <p className="lead text-white-50" style={{ maxWidth: 600 }}>
            Learn about the School of Information Technology — our roots, our mission,
            and how we serve students every day.
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <p className="text-primary fw-semibold text-uppercase small mb-1">Department Info</p>
            <h2 className="fw-bold mb-4">School of Information Technology</h2>
            <p className="text-muted mb-3">
              The School of Information Technology is dedicated to equipping students with
              the technical skills and knowledge needed to thrive in a rapidly evolving digital world.
            </p>
            <p className="text-muted mb-4">
              We offer a comprehensive curriculum that blends theory with hands-on practice,
              preparing graduates for careers in software development, systems administration,
              networking, and more.
            </p>
            <div className="row g-3">
              {[
                { icon: "🎓", label: "Programs Offered", value: "BS Information Technology" },
                { icon: "👨‍🏫", label: "Faculty Members", value: "30+ Experienced Instructors" },
                { icon: "🏢", label: "Location", value: "Main Campus, Building C" },
                { icon: "📞", label: "Contact", value: "sit@university.edu.ph" },
              ].map((item) => (
                <div className="col-sm-6" key={item.label}>
                  <div className="d-flex align-items-start gap-3 p-3 rounded-3 bg-light">
                    <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                    <div>
                      <p className="fw-semibold mb-0 small">{item.label}</p>
                      <p className="text-muted mb-0 small">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <img
              src={teacherImg}
              alt="IT Department"
              className="img-fluid rounded-4 w-100"
              style={{ height: 380, objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="bg-dark text-white py-5">
        <div className="container">
          <p className="text-info fw-semibold text-uppercase small mb-1">Our Journey</p>
          <h2 className="fw-bold mb-5">History & Background</h2>
          <div className="col-lg-8">
            {milestones.map((m, i) => (
              <div className="d-flex gap-4 mb-4" key={m.year}>
                {/* Timeline line */}
                <div className="d-flex flex-column align-items-center">
                  <div
                    className="bg-warning rounded-circle d-flex align-items-center justify-content-center fw-bold text-dark"
                    style={{ width: 52, height: 52, fontSize: ".8rem", flexShrink: 0 }}
                  >
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div style={{ width: 2, flexGrow: 1, background: "rgba(255,255,255,0.15)", marginTop: 6 }} />
                  )}
                </div>
                <div className="pb-4">
                  <h5 className="fw-bold mb-1">{m.title}</h5>
                  <p className="text-white-50 mb-0 small">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="bg-primary text-white rounded-4 p-5 d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div>
            <h3 className="fw-bold mb-1">Want to know more?</h3>
            <p className="mb-0 text-white-50">Reach out to us and we'll be happy to help.</p>
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