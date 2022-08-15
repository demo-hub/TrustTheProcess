const PageTitle = ({
  title,
  highlighted,
}: {
  title: string;
  highlighted?: string;
}) => {
  return (
    <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
      {title} <span className="text-purple-300">{highlighted}</span>
    </h1>
  );
};

export default PageTitle;
