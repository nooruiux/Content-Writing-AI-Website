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

/** Michael+Kristin share one line into Darrell's left side; Eleanor+Jacob
   share one into the right side — each pair merges at a single T-junction
   (where its diamond sits) rather than each person having their own separate
   line straight into Darrell. Coordinates read off the live pill positions. */
const LINES = [
  "M171 146 L220 146 L220 226 L269 226", // Michael -> left junction -> Darrell
  "M201 284 L220 284 L220 226", // Kristin -> left junction
  "M385 130 L415 130 L415 226 L392 226", // Eleanor -> right junction -> Darrell
  "M434 270 L415 270 L415 226", // Jacob -> right junction
] as const;

/** One joint cluster per side: diamond at the shared junction (far from
   Darrell), circle at the midpoint, arrow closest to Darrell pointing
   outward — matching the Figma connector style. */
const CLUSTERS = [
  {
    diamond: [220, 226],
    circle: [245, 226],
    arrow: { at: [263, 226], dir: "left" },
  },
  {
    diamond: [415, 226],
    circle: [405, 226],
    arrow: { at: [398, 226], dir: "right" },
  },
] as const;

const ARROW_POINTS: Record<string, string> = {
  up: "-4,3 4,3 0,-4",
  down: "-4,-3 4,-3 0,4",
  left: "3,-4 3,4 -4,0",
  right: "-3,-4 -3,4 4,0",
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

function Circle({ x, y }: { x: number; y: number }) {
  return <circle cx={x} cy={y} r={2.5} fill="#1D1C20" stroke="white" strokeOpacity="0.32" />;
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
          {LINES.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
        <g className="craft-flow-bloom">
          {LINES.map((d, i) => (
            <path key={i} d={d} pathLength={1} style={{ animationDelay: `${i * -0.7}s` }} />
          ))}
        </g>
        <g className="craft-flow">
          {LINES.map((d, i) => (
            <path key={i} d={d} pathLength={1} style={{ animationDelay: `${i * -0.7}s` }} />
          ))}
        </g>
        {CLUSTERS.map((c, i) => (
          <g key={i}>
            <Diamond x={c.diamond[0]} y={c.diamond[1]} />
            <Circle x={c.circle[0]} y={c.circle[1]} />
            <Arrow x={c.arrow.at[0]} y={c.arrow.at[1]} dir={c.arrow.dir} />
          </g>
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
