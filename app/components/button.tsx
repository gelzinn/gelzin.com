import React from 'react';

interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLink?: boolean;
}

export type ButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = ({ children, isLink, ...props }: ButtonProps) => {
  const Component = isLink ? 'a' : 'button';

  return (
    <Component
      {...props}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-200 ease-in-out 
  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-zinc-900 disabled:hover:border-zinc-800`}
    >
      {children}
    </Component>
  );
};
