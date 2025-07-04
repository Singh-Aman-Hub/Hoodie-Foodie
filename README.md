<h1>🍔 Foodie MERN Stack App</h1>

<p>A full-stack food ordering web application built using <strong>MongoDB, Express.js, React.js, and Node.js (MERN)</strong>. It allows users to browse a menu, register/login securely, and recommend new menu items.</p>

<hr />

<h2>🚀 Features</h2>
<ul>
  <li>🔐 User authentication (JWT-based login & registration)</li>
  <li>📖 Browse delicious menu items fetched from backend API</li>
  <li>💡 Recommend new menu items</li>
  <li>👤 Profile page to view user details</li>
  <li>🎨 Responsive frontend UI built with React</li>
  <li>🌐 REST API backend using Express and MongoDB</li>
</ul>

<hr />

<h2>🛠️ Tech Stack</h2>
<ul>
  <li>Frontend: React.js, Axios, React Router</li>
  <li>Backend: Node.js, Express.js, MongoDB (Mongoose)</li>
  <li>Authentication: bcryptjs, jsonwebtoken</li>
  <li>Deployment: Render.com (for server) and Netlify/Vercel (for client)</li>
</ul>

<hr />

<h2>📂 Project Structure</h2>

<pre>
food-order-app/
│
├── client/          # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.js
│   └── package.json
│
├── server/          # Node.js backend
│   ├── models/
│   ├── routes/
│   ├── .env         # Environment variables
│   └── index.js
│
└── README.md
</pre>

<hr />

<h2>⚙️ Setup Instructions</h2>

<ol>
  <li><strong>Clone the repository:</strong><br />
    <code>git clone https://github.com/&lt;your-username&gt;/Foodie_mern-projects.git</code>
  </li>
  <li><strong>Set up environment variables:</strong><br />
    In <code>/server/.env</code>:
    <pre>
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=4000
    </pre>
  </li>
  <li><strong>Install dependencies:</strong><br />
    <code>
      cd server && npm install<br />
      cd ../client && npm install
    </code>
  </li>
  <li><strong>Run the app locally:</strong><br />
    <code>
      # Start backend
      cd server && npm run dev<br /><br />
      # Start frontend
      cd ../client && npm start
    </code>
  </li>
</ol>

<hr />

<h2>🌐 API Endpoints</h2>

<ul>
  <li><code>POST /api/auth/register</code> - Register a new user</li>
  <li><code>POST /api/auth/login</code> - Login and get JWT token</li>
  <li><code>GET /api/menu</code> - Fetch all menu items</li>
  <li><code>POST /api/recommend</code> - Recommend a new menu item</li>
</ul>

<hr />

<h2>📦 Deployment</h2>
<p>The app is deployed as follows:</p>
<ul>
  <li><strong>Backend</strong>: Render.com</li>
  <li><strong>Frontend</strong>: Netlify / Vercel</li>
</ul>

<hr />

<h2>🙌 Contributing</h2>
<p>Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.</p>

<hr />

<h2>📜 License</h2>
<p>This project is licensed under the MIT License.</p>

<hr />

<h2>💻 Live Demo</h2>
<p><a href="https://foodie-frontend-v05k.onrender.com/" target="_blank">👉 View Live App</a></p>
