export default function Home() {
  return (
    <>
      <Head>
        <title>Hannah's Website</title>
        <meta name="description" content="Personal website for Hannah" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
          <h1>Welcome to My Personal Website</h1>
          <p>Hi, I'm Hannah! I build creative and practical web solutions. Explore my work below.</p>
        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>
            [Insert a brief bio about yourself here.]
          </p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <p>
            [Showcase your projects here.]
          </p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>
            [Provide your contact details or integrate a contact form here.]
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Hannah. All rights reserved.</p>
      </footer>
    </>
  )
}
