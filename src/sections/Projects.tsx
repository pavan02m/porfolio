import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import GithubIcon from '@/assets/icons/github.svg';
import grainImage from '@/assets/images/grain.jpg';
import { Card } from "@/components/Card";


const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">

        <div className="flex justify-center">
          <p className="uppercase text-center font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Real-World Results</p>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">See how i transformed concepts into engaging digital experineces</p>

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((Project, index) => (
            <Card key={Project.title} className="px-8 pt-12 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style={{
              top: `calc(64px + ${index * 40}px)`,
            }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent inline-flex gap-2 font-bold uppercase tracking-widest text-sm bg-clip-text">
                    <span>{Project.company}</span>
                    <span>&bull;</span>
                    <span>{Project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{Project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {Project.results.map((result) => (
                      <li key={result.title} className="flex items-center gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={Project.link} >
                    <button className="bg-white text-gray-900 h-12 w-full md:w-auto px-6 rounded-xl inline-flex items-center justify-center gap-2 mt-8">
                      <span>GitHub Repo</span>
                      <GithubIcon className='size-4' />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={Project.image} alt={Project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
