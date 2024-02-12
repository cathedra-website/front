export const HeaderButton = ({ children }: { children: string }) => {
  return (
    <div className="flex justify-center items-center h-full px-4 bg-white hover:bg-cyan-500">
      {children}
    </div>
  );
};
