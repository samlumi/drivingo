import { TextAreaProps } from "@/types/props";

const TextArea = (props: TextAreaProps) => {
  const { rows, minLength, className, placeholder, value, handler } = props;

  return (
    <textarea
      placeholder={placeholder}
      value={value}
      rows={rows}
      minLength={minLength}
      onChange={({ target: { value } }) => handler(value)}
      className={`p-4 rounded-md outline-none border-[1px] border-[#dfdfdf] dark:border-[#666666] dark:bg-dark transition-all focus:shadow-lg ${className}`}
    />
  );
};

export default TextArea;
