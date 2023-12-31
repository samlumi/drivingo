import {InputProps} from "@/types/props";

const Input = (props: InputProps) => {
  const {type, name, className, placeholder, value, handler} = props;

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={({target: {value}}) => handler(value)}
      className={`p-4 rounded-md outline-none border-[1px] border-[#dfdfdf] dark:border-[#666666] dark:bg-dark transition-all focus:shadow-lg ${className}`}
    />
  );
};

export default Input;
