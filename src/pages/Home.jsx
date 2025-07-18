import './Home.css';

export default function Home() {
  return (
    <div className="profile-container">
      <h1>My Profile</h1>

      <section className="profile-card">
        <img src="https://via.placeholder.com/150" alt="Profile" />
        <div className="profile-details">
          <h2>Aldous Sherlin Thejas A</h2>
          <p><strong>Role:</strong> Full Stack Developer</p>
          <p><strong>Email:</strong> aldous@example.com</p>
          <p><strong>Bio:</strong> Passionate about building scalable MERN stack applications and integrating AI into practical workflows.</p>
        </div>
      </section>

      <section className="section-block">
        <h2>Skills</h2>
        <ul className="skills">
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Projects</h2>
        <div className="projects">
          <div className="project">
            <h3>Contact Management System</h3>
            <p>MERN fullstack project with RESTful API and MongoDB Atlas.</p>
          </div>
          <div className="project">
            <h3>Emotion Recognition System</h3>
            <p>Multimodal system combining Whisper and CNN for facial/audio emotion classification.</p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <h2>Education</h2>
        <p><strong>Bachelor of Technology (B.Tech) in Computer Science</strong><br />XYZ College of Engineering, 2021 – 2025</p>
      </section>

      <section className="section-block">
        <h2>Contact Info</h2>
        <p><strong>Email:</strong> aldous@example.com</p>
        <p><strong>Phone:</strong> +91 9876543210</p>
        <p><strong>Location:</strong> Kerala, India</p>
      </section>
    </div>
  );
}
