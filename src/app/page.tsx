import AboutSection from "@/components/home/about-section"
import ExperienceSection from "@/components/home/experience-section"
import GithubSection from "@/components/home/github-section"
import HeroSection from "@/components/home/hero-section"
import ProjectSections from "@/components/home/projects-section"
import SocialSections from "@/components/home/socials-section"
import ToolsTechSection from "@/components/home/tools-tech-section"

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SocialSections />
      <ExperienceSection />
      <ProjectSections />
      <GithubSection />
      <ToolsTechSection />
    </>
  )
}
