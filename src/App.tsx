import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Theme Toggle */}
      <div className="flex justify-end p-4">
        {/* Placeholder: ThemeToggle component */}
        <button className="rounded px-2 py-1 border">Toggle Theme</button>
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 gap-2">
        <h1 className="text-4xl font-bold text-green-700 dark:text-green-400">Somay Hembrom</h1>
        <h2 className="text-xl font-semibold">Backend Developer</h2>
        <p className="max-w-lg text-center text-muted-foreground">Welcome! I specialize in backend development, working with APIs, databases, and scalable systems.</p>
        <a
          className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition"
          href="#"
          download
        >
          Download Resume
        </a>
      </section>
      {/* About Me */}
      <section className="max-w-2xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-semibold mb-2">About Me</h3>
        <p className="text-muted-foreground">I'm a backend developer with experience in Node.js, Python, SQL, NoSQL, Docker, and cloud infrastructure. I enjoy creating robust, maintainable, and secure systems.</p>
      </section>
      {/* Projects */}
      <section className="max-w-2xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-semibold mb-2">Projects</h3>
        <ul className="space-y-4">
          <li className="border p-4 rounded bg-card">
            <strong>RESTful API Boilerplate</strong>
            <p className="text-sm text-muted-foreground">Starter template for scalable Node.js/Express apps, with JWT auth, PostgreSQL, and testing. <a href="#" className="underline text-green-700">GitHub</a></p>
          </li>
          <li className="border p-4 rounded bg-card">
            <strong>Chat Backend with WebSockets</strong>
            <p className="text-sm text-muted-foreground">Real-time chat backend using WebSocket, Redis pub/sub for scalability. <a href="#" className="underline text-green-700">GitHub</a></p>
          </li>
        </ul>
      </section>
      {/* Skills */}
      <section className="max-w-2xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded">Node.js</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded">Express.js</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded">Python</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded">Django</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded">PostgreSQL</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded">MongoDB</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded">Docker</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded">REST</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded">GraphQL</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded">AWS</span>
        </div>
      </section>
      {/* Experience */}
      <section className="max-w-2xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-semibold mb-2">Experience</h3>
        <div>
          <div className="mb-4">
            <strong>Backend Engineer</strong> —
            <p className="text-sm text-muted-foreground">2020–Present<br />Developed secure, scalable microservices for village-wide communications and intelligence.</p>
          </div>
        </div>
      </section>
      {/* GitHub Stats */}
      <section className="max-w-2xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-semibold mb-2">GitHub Stats</h3>
        <div className="flex flex-col items-center">
          <img
            className="rounded-lg my-2"
            src="https://github-readme-stats.vercel.app/api?username=naruto&show_icons=true&theme=radical&hide_title=true"
            alt="GitHub Stats"
            width={400}
            height={180}
          />
          <img
            className="rounded-lg"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=naruto&theme=radical&layout=compact"
            alt="GitHub Top Languages"
            width={400}
            height={120}
          />
        </div>
      </section>
      {/* Contact */}
      <section className="max-w-2xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-semibold mb-2">Contact</h3>
        <form className="space-y-3">
          <input className="w-full px-3 py-2 border rounded" type="text" placeholder="Name" />
          <input className="w-full px-3 py-2 border rounded" type="email" placeholder="Email" />
          <textarea className="w-full px-3 py-2 border rounded" placeholder="Your message" rows={4} />
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded" type="submit">Send Message</button>
        </form>
        <p className="mt-4 text-sm">or email nu4804991@gmail.com • <a href="https://github.com/Sinister2411" target="_blank" className="underline text-green-700" rel="noreferrer">GitHub</a></p>
      </section>
    </div>
  );
}

export default App;
