import { IconProps } from "@/types/props";

const DeafIcon = (props: IconProps) => {
  const { color } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M34 22H46M16 30H32C36.4183 30 40 33.5817 40 38V42H8V38C8 33.5817 11.5817 30 16 30ZM32 14C32 18.4183 28.4183 22 24 22C19.5817 22 16 18.4183 16 14C16 9.58172 19.5817 6 24 6C28.4183 6 32 9.58172 32 14Z" stroke={color ? color : "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default DeafIcon;
