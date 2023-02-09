import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next';
import {
  Header,
  Hero,
  About,
  WorkExperience,
  Skills,
  Projects,
  Contact,
} from "../components";
import Link from 'next/link';
import { Experience,Project,Skill,Social,PageInfo } from '../typings';
import  {fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchProject } from "../utils/fetchProject";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";



type Props={
  pageInfo:PageInfo;
  projects:Project[];
  skills:Skill[];
  experiences:Experience[];
  socials:Social[];
}




export default function Home({ pageInfo, projects, skills, experiences, socials }: Props) {
  return (
    <div
      className=" dark:bg-[rgb(36,36,36)] dark:text-white bg-slate-300 text-black h-screen snap-y snap-mandatory 
    overflow-scroll z-0 overflow-y-scroll overflow-x-hidden  scrollbar-thin  scrollbar-track-gray-400/20 dark:scrollbar-thumb-[#f7ab0a]/80 scrollbar-thumb-violet-800/80 "
    >
      <Head>
        <title>Sohaib Portfolio</title>
      </Head>
      <main>
        {/* header */}
        <Header socials={socials} />
        {/* hero */}
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>

        {/* about */}
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>
        {/* experience  */}
        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences} />
        </section>
        {/* skills */}
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>
        {/* projects  */}
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>
        {/* contact me */}
        <section id="contact" className="snap-start">
          <Contact />
        </section>
        {/* footer */}
        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <img
                className=" h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                src="https://media.licdn.com/dms/image/C4D03AQHIxPryF0RZPA/profile-displayphoto-shrink_200_200/0/1663925871042?e=1678320000&v=beta&t=eHHQeTFtDgjj6Ru62L6lel4i9_BIXMUsmQOfMvjPodY"
                alt=""
              />
            </div>
          </footer>
        </Link>
      </main>
    </div>
  );
}

export const getServerSideProps: GetStaticProps<Props> = async () => {
  const pageInfo:PageInfo=await fetchPageInfo();
  const experiences:Experience[]=await fetchExperience();
  const socials: Social[] = await fetchSocials();
  const skills:Skill[]=await fetchSkills();
  const projects: Project[] = await fetchProject();
  
  
  return {
    props: {
      pageInfo,
      experiences,
      socials,
      skills,
      projects,
    },
    revalidate: 10,
  };
};


