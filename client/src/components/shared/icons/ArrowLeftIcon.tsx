import { IconProps } from "@/types/props";

const ArrowLeftIcon = (props: IconProps) => {
  const { size, color } = props;

  return (
    <svg width={size ? size : 24} height={size ? size : 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 4L7 12L15 20" stroke={color ? color : "#FFFFFF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ArrowLeftIcon;
