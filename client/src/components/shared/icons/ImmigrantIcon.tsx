import { IconProps } from "@/types/props";

const ImmigrantIcon = (props: IconProps) => {
  const { color } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M24 28V24M24 28V32M24 28H36C38.2091 28 40 26.2091 40 24M24 28H12C9.79086 28 8 26.2091 8 24M40 24V36C40 38.2091 38.2091 40 36 40H12C9.79086 40 8 38.2091 8 36V24M40 24V16C40 13.7909 38.2091 12 36 12H12C9.79086 12 8 13.7909 8 16V24M30 12V10C30 7.79086 28.2091 6 26 6H22C19.7909 6 18 7.79086 18 10V12" stroke={color ? color : "white"}  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ImmigrantIcon;
