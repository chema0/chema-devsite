import { GradientText } from "@/components/gradient-text";
import {
  GitHubIcon,
  LinkedInIcon,
  HeroAvatar,
  Section,
  TwitterIcon,
} from "@/components";
import { externalLinks } from "external-links";
import { IconLink } from "@/components/icon-link";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Chema</GradientText> 👋
        </>
      }
      description={
        <>
          I am a Computer Engineer based in Murcia{" "}
          <a href={externalLinks.location}>📍</a>, Spain. Currently I work as a
          Software Engineer in{" "}
          <a
            className="text-indigo-300 hover:underline"
            href={externalLinks.ddrt}
          >
            Digital Data Real Time
          </a>{" "}
          where we develop amazing things related to smart assets maintenance
          and IoT stuff.
          <br />
          <br />
          Focused on developing quality software using modern tools and technologies.
        </>
      }
      avatar={
        <img
          // className="h-80 w-64"
          src="/assets/images/avatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <IconLink className="hover:translate-y-1" href={externalLinks.github}>
            <GitHubIcon size={28} />
          </IconLink>
          <IconLink
            className="hover:translate-y-1"
            href={externalLinks.linkedin}
          >
            <LinkedInIcon size={28} />
          </IconLink>
          <IconLink
            className="hover:translate-y-1"
            href={externalLinks.twitter}
          >
            <TwitterIcon size={28} />
          </IconLink>
        </>
      }
    />
  </Section>
);

export { Hero };
