const Title = ({ title }: { title: string }) => {
  return (
    <h1 className="absolute left-0 top-0 mt-10 ml-10 text-xl font-medium">
      {title}
    </h1>
  );
};

export default Title;
