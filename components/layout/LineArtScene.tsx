const YELLOW = "#F5B400";
const DARK = "#333333";
const MID = "#6F7782";
const LIGHT = "#A7AFB7";

export function LineArtScene() {
  return (
    <div className="relative h-[360px] w-full overflow-hidden bg-white sm:h-[460px]">
      <svg
        viewBox="0 0 1920 480"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {/* dotted pattern accents, both corners */}
        <g fill={LIGHT}>
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <circle key={`l-${row}-${col}`} cx={20 + col * 16} cy={20 + row * 16} r={2} />
            ))
          )}
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <circle key={`r-${row}-${col}`} cx={1810 + col * 16} cy={20 + row * 16} r={2} />
            ))
          )}
        </g>

        {/* yellow accent line, top left */}
        <path
          d="M 40 60 H 220 Q 245 60 245 85 V 130"
          fill="none"
          stroke={YELLOW}
          strokeWidth={4}
          strokeLinecap="round"
        />
        <circle cx={245} cy={130} r={6} fill="none" stroke={YELLOW} strokeWidth={3} />

        {/* far skyline, left side */}
        <g stroke={LIGHT} strokeWidth={1.3} fill="none">
          <rect x={90} y={260} width={36} height={130} />
          <rect x={135} y={230} width={44} height={160} />
          <rect x={190} y={280} width={30} height={110} />
        </g>

        {/* main skyline, center-right */}
        <g stroke={MID} strokeWidth={1.5} fill="none">
          <rect x={980} y={190} width={46} height={200} />
          <rect x={1035} y={150} width={60} height={240} />
          <rect x={1105} y={210} width={40} height={180} />
          <rect x={1155} y={110} width={34} height={280} />
          <rect x={1200} y={230} width={54} height={160} />
          <rect x={1265} y={170} width={42} height={220} />
          <rect x={1317} y={240} width={70} height={150} />
          <rect x={1400} y={270} width={38} height={120} />
        </g>
        <g stroke={LIGHT} strokeWidth={1}>
          <line x1={1035} y1={175} x2={1095} y2={175} />
          <line x1={1035} y1={205} x2={1095} y2={205} />
          <line x1={1155} y1={140} x2={1189} y2={140} />
          <line x1={1155} y1={175} x2={1189} y2={175} />
        </g>

        {/* elevated train line, spans full width */}
        <path
          d="M 60 300 C 350 250, 650 220, 960 200 S 1500 165, 1880 130"
          fill="none"
          stroke={DARK}
          strokeWidth={2}
        />
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={i}
            x1={120 + i * 210}
            y1={295 - i * 18}
            x2={120 + i * 210}
            y2={345 - i * 18}
            stroke={LIGHT}
            strokeWidth={2}
          />
        ))}
        {/* train car */}
        <g transform="translate(1040,196) rotate(-4)">
          <rect x={0} y={0} width={100} height={28} rx={6} fill="#fff" stroke={DARK} strokeWidth={2} />
          <rect x={12} y={7} width={18} height={13} fill="none" stroke={DARK} strokeWidth={1.5} />
          <rect x={36} y={7} width={18} height={13} fill="none" stroke={DARK} strokeWidth={1.5} />
          <rect x={60} y={7} width={18} height={13} fill="none" stroke={DARK} strokeWidth={1.5} />
          <line x1={0} y1={28} x2={100} y2={28} stroke={YELLOW} strokeWidth={2} />
        </g>

        {/* road, perspective lines converging, centered in the full-width canvas */}
        <path
          d="M -40 480 L 860 260 L 1060 260 L 1960 480"
          fill="none"
          stroke={DARK}
          strokeWidth={2}
        />
        <path
          d="M 220 480 L 880 276 L 1040 276 L 1780 480"
          fill="none"
          stroke={LIGHT}
          strokeWidth={1.5}
        />
        <path
          d="M 930 480 L 945 288 L 975 288 L 990 480"
          fill="none"
          stroke={MID}
          strokeWidth={2}
          strokeDasharray="10 12"
        />
        {/* yellow lane accent along right edge of road */}
        <path
          d="M 1060 260 L 1960 480"
          fill="none"
          stroke={YELLOW}
          strokeWidth={3}
          strokeLinecap="round"
        />
        <circle cx={1350} cy={355} r={5} fill="none" stroke={YELLOW} strokeWidth={2.5} />
        <circle cx={1620} cy={425} r={5} fill="none" stroke={YELLOW} strokeWidth={2.5} />

        {/* car, left of the road */}
        <g transform="translate(560,410)">
          <rect x={0} y={0} width={74} height={32} rx={6} fill="#fff" stroke={DARK} strokeWidth={2} />
          <rect x={13} y={-15} width={42} height={19} rx={4} fill="#fff" stroke={DARK} strokeWidth={2} />
          <circle cx={17} cy={34} r={7} fill="#fff" stroke={DARK} strokeWidth={2} />
          <circle cx={57} cy={34} r={7} fill="#fff" stroke={DARK} strokeWidth={2} />
        </g>

        {/* bus, right of the road */}
        <g transform="translate(1230,440)">
          <rect x={0} y={-32} width={106} height={46} rx={6} fill="#fff" stroke={DARK} strokeWidth={2} />
          <line x1={22} y1={-32} x2={22} y2={14} stroke={DARK} strokeWidth={1.5} />
          <line x1={48} y1={-32} x2={48} y2={14} stroke={DARK} strokeWidth={1.5} />
          <line x1={74} y1={-32} x2={74} y2={14} stroke={DARK} strokeWidth={1.5} />
          <circle cx={22} cy={18} r={7} fill="#fff" stroke={DARK} strokeWidth={2} />
          <circle cx={86} cy={18} r={7} fill="#fff" stroke={DARK} strokeWidth={2} />
        </g>

        {/* cyclist, far right */}
        <g transform="translate(1660,450)" stroke={DARK} strokeWidth={2} fill="none">
          <circle cx={0} cy={0} r={14} />
          <circle cx={48} cy={0} r={14} />
          <path d="M 0 0 L 21 -23 L 34 -23 M 21 -23 L 13 0 M 34 -23 L 48 0" />
          <circle cx={23} cy={-40} r={7} fill="#fff" />
        </g>

        {/* trees, spread across the full width */}
        {[
          [50, 400, 20],
          [300, 420, 24],
          [430, 390, 18],
          [700, 435, 16],
          [1500, 400, 22],
          [1620, 380, 18],
          [1780, 415, 24],
          [1870, 385, 18],
        ].map(([cx, cy, r], i) => (
          <g key={i} stroke={DARK} strokeWidth={1.5} fill="none">
            <line x1={cx} y1={cy + r * 0.8} x2={cx} y2={cy + r * 1.6} />
            <circle cx={cx} cy={cy} r={r} stroke={MID} />
          </g>
        ))}
      </svg>
    </div>
  );
}
