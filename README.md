<h1>HealthHub</h1>

<p><strong>HealthHub</strong> is a full-stack application designed for patient registration, appointment booking, and messaging. It includes an admin dashboard for managing appointments and doctors. The project is built using the MERN stack (MongoDB, Express.js, React, Node.js) and is deployed across various platforms.</p>

<h2>Features</h2>

<h3>Frontend</h3>
<ul>
  <li><strong>Patient Registration:</strong> Users can register by providing their details.</li>
  <li><strong>Appointment Booking:</strong> Patients can book appointments with available doctors.</li>
  <li><strong>Messaging System:</strong> Patients can send messages for appointment-related queries.</li>
</ul>

<h3>Backend</h3>
<ul>
  <li><strong>Built with Node.js and Express.js:</strong> The backend handles API requests and manages appointments and users.</li>
  <li><strong>MongoDB:</strong> All data is stored in MongoDB, including patient details, appointments, and doctor information.</li>
</ul>

<h3>Admin Dashboard</h3>
<ul>
  <li><strong>Manage Appointments:</strong> Admins can view, confirm, and cancel appointments.</li>
  <li><strong>Add New Doctors:</strong> Admins can add and manage doctor profiles.</li>
  <li><strong>Appointment Fixing:</strong> Allows admins to fix or reschedule patient appointments.</li>
</ul>

<h2>Tech Stack</h2>

<ul>
  <li><strong>Frontend:</strong> React, Vite, HTML, CSS</li>
  <li><strong>Backend:</strong> Node.js, Express.js</li>
  <li><strong>Database:</strong> MongoDB</li>
  <li><strong>Deployment:</strong>
    <ul>
      <li>Frontend deployed on <a href="https://netlify.com">Netlify</a></li>
      <li>Backend deployed on <a href="https://render.com">Render</a></li>
    </ul>
  </li>
  <li><strong>Others:</strong> Axios for HTTP requests, CORS for security, JWT for authentication</li>
</ul>

<h2>Live URLs</h2>

<ul>
  <li><strong>Frontend (Patient Registration and Appointment Booking):</strong> <a href="https://healthhubpro.netlify.app/">HealthHub Frontend</a></li>
  <li><strong>Admin Dashboard:</strong> <a href="https://healthhubdashboard.netlify.app/">HealthHub Dashboard</a></li>
</ul>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js installed</li>
  <li>MongoDB set up locally or use MongoDB Atlas</li>
  <li>Git for version control</li>
</ul>

<h3>Installation</h3>

<ol>
  <li><strong>Clone the repository:</strong>
    <pre><code>git clone https://github.com/Tejaspatil1175/HealthHub.git</code></pre>
  </li>
  <li><strong>Navigate to backend folder and install dependencies:</strong>
    <pre><code>cd HealthHub/backend
npm install</code></pre>
  </li>
  <li><strong>Set up environment variables:</strong> Create a <code>.env</code> file in the <code>backend</code> folder and include the following:
    <pre><code>MONGO_URI=&lt;your-mongodb-uri&gt;
JWT_SECRET=&lt;your-jwt-secret&gt;</code></pre>
  </li>
  <li><strong>Run the backend server:</strong>
    <pre><code>npm start</code></pre>
  </li>
  <li><strong>Navigate to frontend folder and install dependencies:</strong>
    <pre><code>cd ../frontend
npm install</code></pre>
  </li>
  <li><strong>Run the frontend server:</strong>
    <pre><code>npm run dev</code></pre>
  </li>
</ol>

<h3>Deployment</h3>
<ul>
  <li><strong>Frontend:</strong> Deployed on <a href="https://healthhubpro.netlify.app/">Netlify</a></li>
  <li><strong>Dashboard:</strong> Deployed on <a href="https://healthhubdashboard.netlify.app/">Netlify</a></li>
  <li><strong>Backend:</strong> Deployed on <a href="https://render.com">Render</a></li>
</ul>
