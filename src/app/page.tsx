import AboutSection from "@/components/home/about-section"
import BlogsSection from "@/components/home/blogs-section"
import CallSection from "@/components/home/call-section"
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
      <Separator />
      <AboutSection />
      <Separator />
      <SocialSections />
      <Separator />
      <ExperienceSection />
      <Separator />
      <ProjectSections />
      <Separator />
      <GithubSection />
      <Separator />
      <ToolsTechSection />
      <Separator />
      <BlogsSection />
      <Separator />
      <CallSection />
    </>
  )
}

function Separator() {
  return (
    <div
      className="h-8 w-full opacity-[0.06] dark:border-[#eee]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 6px)",
      }}
    />
  )
}
