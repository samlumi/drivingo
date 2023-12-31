import { IconProps } from "@/types/props";

const CheckIcon = (props: IconProps) => {
  const { color } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M20 7L9.00004 18L3.99994 13" stroke={color ? color : "#555555"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default CheckIcon;
