import { useTheme } from "next-themes";

const SkeletonLoader = (props: { className: string }) => {
  const { theme } = useTheme();

  return (
    <div className={`relative bg-[#EEEEEE] dark:bg-secondary rounded-md overflow-hidden ${props.className}`}>
      {
        theme === "dark" ? (
          <span className="absolute top-0 left-0 w-96 h-full dark-skeleton-gradient skeleton-anim" />
        ) : (
          <span className="absolute top-0 left-0 w-96 h-full light-skeleton-gradient skeleton-anim" />
        )
      }
    </div>
  );
};

export default SkeletonLoader;
