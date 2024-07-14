import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Handshake, PanelsTopLeft, Workflow } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import RetroGrid from "@/components/magicui/retro-grid";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 gap-4">
      <section id="hero">
        <div className="mx-auto w-full space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-black tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl font-semibold text-muted-foreground"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Link href="#contact"><Button className="gap-2 mt-2 font-semibold">
                  <p>Let&apos;s talk!</p> 💬
                </Button></Link>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full font-sans text-md text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </div>
      </section>

      <section id="services">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="border rounded-xl p-10">
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <div className="flex flex-col items-left justify-left space-y-4 text-left">
                <div className="space-y-2 mb-8">
                  <div className="inline-block rounded-lg bg-secondary font-semibold text-black text-background px-3 py-1 text-sm mb-2">
                    Services
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    What I can do for you
                  </h2>
                  <p className="text-muted-foreground md:text-sm/relaxed lg:text-base/relaxed xl:text-sm/relaxed ">
                    From building personal and commercial websites to scaling
                    web infrastructure operations, I can help you grow your
                    business from multiple strategic angles.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 8}><div className="flex w-full flex-col gap-4 lg:h-[200px] lg:flex-row">
            
              <MagicCard
                className="flex cursor-pointer justify-around flex-col shadow-md text-4xl px-5 gap-3"
                gradientColor={"rgba(152, 255, 241, 0.8)"}
              >
                <PanelsTopLeft className="my-3" />
                <h3 className="font-semibold leading-none text-xs sm:text-sm ">
                  Web Development & Hosting
                </h3>
                <p className="font-sans text-xs py-2 mb-4">
                  Build a beautiful tailor-made website on a custom domain
                  that&apos;s true to your brand and optimized for performance
                </p>
              </MagicCard>
              <MagicCard
                className="flex cursor-pointer justify-around flex-col shadow-md text-4xl px-5 gap-3"
                gradientColor={"rgba(152, 255, 241, 0.8)"}
              >
                <Workflow className="my-3" />
                <h3 className="font-semibold leading-none text-xs sm:text-sm ">
                  Workflow Implementation and Automation
                </h3>
                <p className="font-sans text-xs py-2 mb-4">
                  Reinvent your workflow by deploying modern technology and
                  automation to accelerate your business and cut costs
                </p>
              </MagicCard>
              <MagicCard
                className="flex cursor-pointer justify-around flex-col shadow-md text-4xl px-5 gap-3"
                gradientColor={"rgba(152, 255, 241, 0.8)"}
              >
                <Handshake className="my-3" />
                <h3 className="font-semibold leading-none text-xs sm:text-sm mt-4">
                  Web Consultancy For <br />
                  Digital Acceleration
                </h3>
                <p className="font-sans text-xs py-2 mb-4">
                  Explore new opportunities for operational growth by leveraging
                  digital modernization to capture new revenue streams
                </p>
              </MagicCard>
              
            </div></BlurFade>
          </div>
        </BlurFade>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="border rounded-xl px-10">
            <div className="space-y-12 w-full py-12">
              <BlurFade delay={BLUR_FADE_DELAY * 12}>
                <div className="flex flex-col items-left justify-left space-y-4 text-left">
                  <div className="space-y-2 ">
                    <div className="inline-block rounded-lg bg-secondary font-semibold text-black px-3 py-1 text-sm mb-2">
                      Projects
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                      Check out my latest work
                    </h2>
                    <p className="text-muted-foreground md:text-sm/relaxed lg:text-base/relaxed xl:text-sm/relaxed">
                      I&apos;ve built websites for multiple clients and personal
                      projects. Here are some of my latest projects.
                    </p>
                  </div>
                </div>
              </BlurFade>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 mx-auto">
                {DATA.projects.map((project, id) => (
                  <BlurFade
                    key={project.title}
                    delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  >
                    <ProjectCard
                      href={project.href}
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      project_type={project.project_type}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="work">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <div className="border rounded-xl p-10">
            <div className="flex min-h-0 flex-col gap-y-3 py-4">
              <BlurFade delay={BLUR_FADE_DELAY * 16}>
                <div className="flex flex-col items-left justify-left space-y-4 text-left">
                  <div className="space-y-2 mb-8">
                    <div className="inline-block rounded-lg bg-secondary font-semibold text-black px-3 py-1 text-sm mb-2">
                      Experience
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                      Where and how I made a difference
                    </h2>
                    <p className="text-muted-foreground md:text-sm/relaxed lg:text-base/relaxed xl:text-sm/relaxed">
                      With a self-taught background, I&apos;ve been lucky to work
                      with and learn from talented individuals from many
                      different areas and projects.
                    </p>
                  </div>
                </div>
              </BlurFade>
              {DATA.work.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 18 + id * 0.05}
                >
                  <ResumeCard
                    key={work.company}
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.title}
                    subtitle={work.company}
                    href={work.href}
                    badges={work.badges}
                    period={`${work.start} - ${work.end ?? "Present"}`}
                    description={work.description}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="skills">
        <BlurFade delay={BLUR_FADE_DELAY * 20}>
          <div className="border rounded-xl p-10">
            <div className="flex min-h-0 flex-col gap-y-3 py-4">
            <BlurFade delay={BLUR_FADE_DELAY * 22}>
                <div className="flex flex-col items-left justify-left space-y-4 text-left">
                  <div className="space-y-2 mb-8">
                    <div className="inline-block rounded-lg bg-secondary font-semibold text-black px-3 py-1 text-sm mb-2">
                      Skills & Tools
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                      The tools I use to get the job done
                    </h2>
                    <p className="text-muted-foreground md:text-sm/relaxed lg:text-base/relaxed xl:text-sm/relaxed">
                      I&apos;m always curious about the latest tech and love pushing myself to learn new things. Here are some of the tools and skills I use.
                    </p>
                  </div>
                </div>
              </BlurFade>
              <div className="flex flex-wrap gap-1">
                {DATA.skills.map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 24 + id * 0.05}
                  >
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:p-6 w-full pt-12">
          <BlurFade delay={BLUR_FADE_DELAY * 26}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold z-1 tracking-tighter sm:text-5xl">
                Get in touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a message and I&apos;ll get back to you as soon as possible!
              </p>
              <Link href="mailto:web@jlj.pt"><Button className="gap-2 mt-2 font-semibold">
                  <p>Send me an email</p> 💬
                </Button></Link>
            </div>
          </BlurFade>
          <div className="block flex flex-col h-[50px] w-full items-center justify-center overflow-hidden mt-[-500px] opacity-90 z-[-1]">
            <RetroGrid />
          </div>
        </div>
      </section>
    </main>
  );
}
