import { ButtonProps } from "@/types/props";

const Button = (props: ButtonProps) => {
  const { type, className, onClick, children } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white transition-all rounded-[4px] bg-primary hover:bg-[#ff6435] hover:shadow-md active:bg-[#b15235] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
