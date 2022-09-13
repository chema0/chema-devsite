import type { ReactNode } from "react";
import { Button } from "./button";

type IHeroAvatarProps = {
  title: ReactNode;
  description: ReactNode;
  avatar: ReactNode;
  socialButtons: ReactNode;
};

const HeroAvatar = (props: IHeroAvatarProps) => (
  <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
    <div>
      <h1 className="text-3xl font-bold">{props.title}</h1>

      <p className="mt-6 text-xl leading-9 text-justify">{props.description}</p>

      <div className="flex gap-8 items-center justify-between">
        <div className="mt-6 flex gap-3">{props.socialButtons}</div>
        <Button className="mt-6">Tech stack 🡢</Button>
      </div>
    </div>

    <div className="shrink-0">{props.avatar}</div>
  </div>
);

export { HeroAvatar };
