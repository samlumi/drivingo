import { IconProps } from "@/types/props";

const PersonIcon = (props: IconProps) => {
  const { size, color } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size?size:24} height={size?size:24} viewBox="0 0 24 24" fill="none">
      <path d="M16 15H8C5.79086 15 4 16.7909 4 19V21H20V19C20 16.7909 18.2091 15 16 15Z" stroke={color ? color : "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke={color ? color : "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default PersonIcon;
