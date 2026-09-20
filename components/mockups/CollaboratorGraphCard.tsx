import { superpowers } from "@/lib/content";

const positions = [
  { top: 120, left: 40 }, // Michael — left edge aligned with the "Craft together" heading
  { top: 104, left: 384 }, // Eleanor
  { top: 200, left: 268 }, // Darrell
  { top: 258, left: 80 }, // Kristin
  { top: 244, left: 432 }, // Jacob
];

function PersonPill({
  name,
  avatar,
  index,
  style,
}: {
  name: string;
  avatar: string;
  index: number;
  style: React.CSSProperties;
}) {
  return (
    <div className="absolute" style={style}>
      <img
        src="/assets/superpowers/ic-tag.svg"
        alt=""
        aria-hidden
        width={24}
        height={24}
        className={`pill-arrow absolute -left-2 -top-2 size-6 ${index % 2 ? "pill-arrow-alt" : ""}`}
        style={{ animationDelay: `${index * -0.9}s` }}
      />
      <div className="pill-glow flex items-center gap-3 rounded-pill-lg border border-border bg-white/[0.04] py-1 pr-4 pl-1 backdrop-blur-xs">
        <span aria-hidden className="pill-glow-layer pill-glow-bloom">
          <span className="pill-glow-spin" style={{ animationDelay: `${index * -1.1}s` }} />
        </span>
        <span aria-hidden className="pill-glow-layer pill-glow-ring">
          <span className="pill-glow-spin" style={{ animationDelay: `${index * -1.1}s` }} />
        </span>
        <img
          src={avatar}
          alt=""
          width={40}
          height={40}
          className="relative size-10 rounded-full object-cover"
        />
        <span className="relative text-base font-bold text-white">{name}</span>
      </div>
    </div>
  );
}

/** Each connector: the base run, plus the two node points (elbow + pill entry)
   where a diamond / chevron marker sits, matching the Figma connector style. */
const CONNECTORS = [
  { d: "M138 150 L278 150 L278 220", diamond: [278, 150], arrow: { at: [278, 220], dir: "down" } },
  { d: "M328 232 L418 232 L418 128", diamond: [418, 232], arrow: { at: [418, 128], dir: "up" } },
  { d: "M358 232 L468 232 L468 268", diamond: [468, 232], arrow: { at: [468, 268], dir: "down" } },
  { d: "M298 232 L148 232 L148 282", diamond: [148, 232], arrow: { at: [148, 282], dir: "down" } },
] as const;

const ARROW_POINTS: Record<string, string> = {
  up: "-4,3 4,3 0,-4",
  down: "-4,-3 4,-3 0,4",
};

function Diamond({ x, y }: { x: number; y: number }) {
  return (
    <rect
      x={x - 3.5}
      y={y - 3.5}
      width={7}
      height={7}
      rx={1.5}
      transform={`rotate(45 ${x} ${y})`}
      fill="#1D1C20"
      stroke="white"
      strokeOpacity="0.32"
    />
  );
}

function Arrow({ x, y, dir }: { x: number; y: number; dir: string }) {
  return (
    <polygon
      points={ARROW_POINTS[dir]}
      transform={`translate(${x} ${y})`}
      fill="white"
      fillOpacity="0.32"
    />
  );
}

export function CollaboratorGraphCard() {
  const { craft } = superpowers;
  return (
    <div className="relative h-[364px] w-[602px] overflow-hidden rounded-[32px] border border-border bg-surface backdrop-blur-4xl">
      <div className="absolute left-8 top-8 flex flex-col gap-2">
        <h3 className="text-title font-bold text-white">{craft.title}</h3>
        <p className="max-w-[416px] text-base text-white/[0.88]">{craft.description}</p>
      </div>

      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 602 364"
        fill="none"
        aria-hidden
      >
        <g stroke="white" strokeOpacity="0.16" strokeDasharray="1.5 3.5" strokeLinecap="round">
          {CONNECTORS.map((c, i) => (
            <path key={i} d={c.d} />
          ))}
        </g>
        <g className="craft-flow-bloom">
          {CONNECTORS.map((c, i) => (
            <path key={i} d={c.d} pathLength={1} style={{ animationDelay: `${i * -0.9}s` }} />
          ))}
        </g>
        <g className="craft-flow">
          {CONNECTORS.map((c, i) => (
            <path key={i} d={c.d} pathLength={1} style={{ animationDelay: `${i * -0.9}s` }} />
          ))}
        </g>
        {CONNECTORS.map((c, i) => (
          <Diamond key={`d${i}`} x={c.diamond[0]} y={c.diamond[1]} />
        ))}
        {CONNECTORS.map((c, i) => (
          <Arrow key={`a${i}`} x={c.arrow.at[0]} y={c.arrow.at[1]} dir={c.arrow.dir} />
        ))}
      </svg>

      {craft.people.map((person, i) => (
        <PersonPill
          key={person.name}
          name={person.name}
          avatar={person.avatar}
          index={i}
          style={{ top: positions[i].top, left: positions[i].left }}
        />
      ))}
    </div>
  );
}
