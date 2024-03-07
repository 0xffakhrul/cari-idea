export const Footer = () => {
  return (
    <div className="py-5 md:py-10 border-t border-slate-300 border-opacity-30 flex items-start justify-between mt-auto">
      <p className="hidden md:block text-sm md:text-lg">
        Developed & Designed by{" "}
        <span className="font-bold text-slate-300">Fakhrul</span>{" "}
      </p>
      <div className="text-sm md:text-lg space-y-2">
        <p>Contribute on GitHub</p>
        <p>About</p>
      </div>
    </div>
  );
};
