const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="box-window flex items-center justify-center bg w-[900px] h-[300px]">
      {children}
    </div>
  );
};

export default Box;
