import { IconProps } from "@/types/props";

const SpeechIcon = (props: IconProps) => {
  const { color } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M32 20H32.02M24 20H24.02M16 20H16.02M14 32V42L24 32H40V8H8V32H14Z" stroke={color ? color : "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default SpeechIcon;
