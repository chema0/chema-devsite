import { Link } from "./link";

type INavMenuItemProps = {
  href: string;
  newTab?: boolean;
  children: string;
};

const NavMenuItem = (props: INavMenuItemProps) => {
  return (
    <li>
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
};

export { NavMenuItem };
