import { ButtonHTMLAttributes, ReactElement } from "react";

export type ButtonProps = {
  children: string;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button = ({ children, className, ...rest }: ButtonProps) => (
  <button
    className={`border-solid border-2 border-indigo-300 rounded-md py-2 px-6 hover:animate-pulse ${className}`}
    {...rest}
  >
    {children}
  </button>
);

export { Button };
