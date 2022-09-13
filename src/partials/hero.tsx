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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus{" "}
          <a className="text-indigo-300 hover:underline" href="/">
            malesuada
          </a>{" "}
          nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,{" "}
          <a className="text-indigo-300 hover:underline" href="/">
            consectetur
          </a>{" "}
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
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
