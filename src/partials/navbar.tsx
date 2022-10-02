import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from "@/components";

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a className="underlined-link" href="/">
        <h1 className="text-2xl font-bold">Chema's Site</h1>
      </a>

      <NavMenu>
        {/* <NavMenuItem href="/posts">Blogs</NavMenuItem> */}
        <NavMenuItem href="/projects">Projects</NavMenuItem>
        <NavMenuItem href="/about">About</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
