import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import SocialSections from "@/components/home/socials-section";
import ExperienceSection from "@/components/home/experience-section";
import ProjectSections from "@/components/home/projects-section";
import GithubSection from "@/components/home/github-section";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SocialSections />
      <ExperienceSection />
      <ProjectSections />
      <GithubSection />
    </>
  );
}
