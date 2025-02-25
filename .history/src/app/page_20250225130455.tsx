import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hannah's Website</title>
        <meta name="description" content="Personal website for Hannah" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <div className="font-bold text-xl">Hannah</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section id="hero" className="text-center py-8">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to My Personal Website
          </h1>
          <p className="text-lg">
            Hi, I'm Hannah! I build creative and practical web solutions. Explore my work below.
          </p>
        </section>
        <section id="about" className="py-8">
          <h2 className="text-3xl font-semibold mb-2">About Me</h2>
          <p className="text-base">
            [Insert a brief bio about yourself here.]
          </p>
        </section>
        <section id="projects" className="py-8">
          <h2 className="text-3xl font-semibold mb-2">Projects</h2>
          <p className="text-base">
            [Showcase your projects here.]
          </p>
        </section>
        <section id="contact" className="py-8">
          <h2 className="text-3xl font-semibold mb-2">Contact</h2>
          <p className="text-base">
            [Provide your contact details or integrate a contact form here.]
          </p>
        </section>
      </main>
      <footer className="bg-gray-200 text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hannah. All rights reserved.
        </p>
      </footer>
    </>
  )
}