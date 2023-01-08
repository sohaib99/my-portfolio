import Head from 'next/head'
import Image from 'next/image'
import { Header, Hero, About, Experience, Skills } from "../components";


export default function Home() {
  return (
    <div className=" dark:bg-[rgb(36,36,36)] dark:text-white bg-slate-300 text-black h-screen snap-y snap-mandatory overflow-scroll z-0 ">
      <Head>
        <title>Sohaib Portfolio</title>
      </Head>
      <main>
        {/* header */}
        <Header />
        {/* hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        {/* about */}
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* experience  */}
        <section id="experience" className="snap-center">
          <Experience />
        </section>
        {/* skills */}
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        {/* projects  */}
        {/* contact me */}
      </main>
    </div>
  );
}
