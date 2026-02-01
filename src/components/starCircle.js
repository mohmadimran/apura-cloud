export default function StarsCircle() {
  const stars = Array.from({ length: 12 });

  return (
    <div className="absolute w-[260px] h-[260px] top-[90px] left-[130px] pointer-events-none">
      {stars.map((_, i) => (
        <span
          key={i}
          className="absolute top-0 left-1/2 origin-[0_130px] text-[26px] text-white transform"
          style={{ transform: `rotate(${i * 30}deg)` }}
        >
          ★
        </span>
      ))}
    </div>
  );
}
