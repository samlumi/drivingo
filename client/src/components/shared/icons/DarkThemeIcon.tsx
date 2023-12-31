import { IconProps } from "@/types/props";

const DarkThemeIcon = (props: IconProps) => {
  const { size, color } = props;

  return (
    <svg width={size ? size : 24} height={size ? size : 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 17C10.952 18.6176 16.6829 8.75775 11 3C16.0007 3.13144 20 7.11149 20 12C20 16.9715 16.1188 21 11 21C7.77111 21 4.65938 19.4319 3 17Z" stroke={color ? color : "#FFFFFF"} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
};

export default DarkThemeIcon;
