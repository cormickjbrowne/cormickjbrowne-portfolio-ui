import './App.css'

function App() {

  return (
    <>
      <header className='fixed inset-x-0 top-0 z-10 border-b border-gray-950/5 dark:border-white/10'>
        <div className="container mx-auto px-4">
          <a href='#'>Home</a>
        </div>
      </header>
      <div className='container mx-auto px-4 pt-20'>
        <div className='flex'>
          <div>
            <section>
              <p >👋 Hello, my name is</p>
              <h2>Cormick Browne</h2>
              <div className='mb-4'>
                <p className="mt-4 mb-4">I'm a Full-Stack Engineer with 9+ years of experience building scalable web applications. VP at Goldman Sachs with deep
        expertise on the frontend with React, JavaScript/TypeScript, and on the backend with Node.js, Java and Python.
        I have expertise with both SQL and NoSQL databases and a proven track record in designing, building, and improving
        performance of backend APIs. I've deployed microservices on Google Cloud Platform and bare-metal Linux hosts. I'm passionate about system
        architecture, scalability, coding best practices, and testing. Self-motivated, curious, problem solver. Proficient with AI
        tools including GitHub Copilot and ChatGPT to solve technical problems more efficiently.</p>
                <p>I'm looking to relocate from New York City to Los Angeles.</p>
              </div>
            </section>
            <section className='mb-4'>
              <h3>Social Links</h3>
              <div className='mt-4 flex flex-col gap-2'>
                <a href="https://www.linkedin.com/in/cormick-browne-a4a65466/" className='w-fit'>LinkedIn</a>
                <a href="https://github.com/cormickjbrowne" className='w-fit'>GitHub</a>
              </div>
            </section>
            <section className='mb-4'>
              <h3>Experience</h3>
              <div className='mt-4'>
                <h4>Goldman Sachs</h4>
                <p>VP, Full-Stack Engineer</p>
                <p>Jan 2020 - Present</p>
                <ul>
                  <li>Lead a team of engineers to develop and maintain a suite of web applications using React, Node.js, and Python.</li>
                  <li>Implemented best practices for code quality, testing, and deployment.</li>
                  <li>Collaborated with cross-functional teams to design and build scalable microservices on Google Cloud Platform.</li>
                </ul>
              </div>
            </section>
            <section className='mb-4'>
              <h3>Featured Projects</h3>
              <div className='mt-4'>
                <h4>Tic-tac-toe</h4>
                <p>A web-based implementation of the classic Tic-tac-toe game using React and TypeScript. I developed the frontend components and integrated them with a simple backend API.</p>
                <a href="/tic-tac-toe" className='w-fit'>Play Now</a>
              </div>
            </section>
          </div>
        </div>
      </div>
      </>
  )
}

export default App
