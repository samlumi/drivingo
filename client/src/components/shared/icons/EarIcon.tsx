import { IconProps } from "@/types/props";

const EarIcon = (props: IconProps) => {
  const { color } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M16.0019 13.1068C16 8 20 6 25 6C32 6 34 12 34 17C34 22 33 23 30 26C27 29 26 34 26 37C26 40 24 42 21 42C18 42 16 40 16 35M22 14C24 12 27 13 28 15C29 17 29 19 27 21C25 23 22 24 22 30" stroke={color ? color : "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default EarIcon;
