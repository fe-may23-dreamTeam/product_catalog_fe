import { ReactNode } from 'react';

type Button = {
  children: ReactNode;
  [key: string]: any;
};

type Sizes = { sm?: boolean; md?: never } | { sm?: never; md?: boolean };
export type ButtonProps = Button & Sizes;
