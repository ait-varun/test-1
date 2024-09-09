export default function FeaturedButton({
  bgColor,
  bgHover,
  textColor,
  text,
}: {
  bgColor: string;
  bgHover: string;
  textColor: string;
  text: string;
}) {
  return (
    <div className="relative inline-block group">
      <button
        className={`relative z-10 bg-[${bgColor}] text-xs md:text-base text-[${textColor}] font-bold py-3 px-6 rounded-lg hover:bg-[${bgHover}] transition duration-300 ease-in-out transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] uppercase tracking-wide`}>
        {text.toUpperCase()}
      </button>
      <div className="absolute inset-0 bg-[#363636] rounded-lg transition-all duration-300 ease-in-out transform translate-x-[4px] translate-y-[4px] group-hover:translate-x-[6px] group-hover:translate-y-[6px]"></div>
    </div>
  );
}
