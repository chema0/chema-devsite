import { GradientText } from "@/components/gradient-text";
import { ColorTags, Project, Section, Tags } from "@/components";

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Awesome Shop"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{
          src: "/assets/images/bag-dynamic-gradient.png",
          alt: "Project Web Design",
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
          </>
        }
      />

      <Project
        name="Track Your Crypto"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{
          src: "/assets/images/3d-coin-dynamic-color.png",
          alt: "Project Fire",
        }}
        category={
          <>
            <Tags color={ColorTags.PURPLE}>Elixir</Tags>
            <Tags color={ColorTags.ORANGE}>Phoenix</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
          </>
        }
      />
      <Project
        name="Cities"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: "/assets/images/project-maps.png", alt: "Project Maps" }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>Java</Tags>
            <Tags color={ColorTags.GREEN}>Spring</Tags>
            <Tags color={ColorTags.INDIGO}>.NET</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
