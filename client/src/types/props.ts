export interface IconProps {
  size?: number;
  color?: string;
};

export interface ButtonProps {
  type?: "submit" | "reset" | undefined;
  className?: string;
  onClick?: any;
  children: any;
};

export interface InputProps {
  type?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  value?: string | number;
  handler?: any;
};

export interface TextAreaProps {
  rows?: number;
  minLength?: number;
  className?: string;
  placeholder?: string;
  value?: string | number;
  handler?: any;
};
