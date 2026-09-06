import { Icon } from "@/components/ui/Icon";
import { superpowers } from "@/lib/content";

const positions = [
  { top: 120, left: 12 }, // Michael
  { top: 104, left: 356 }, // Eleanor
  { top: 200, left: 240 }, // Darrell
  { top: 258, left: 52 }, // Kristin
  { top: 244, left: 404 }, // Jacob
];

function PersonPill({
  name,
  avatar,
  style,
}: {
  name: string;
  avatar: string;
  style: React.CSSProperties;
}) {
  return (
    <div className="absolute" style={style}>
      <Icon src="/assets/superpowers/ic-tag.svg" size={24} className="absolute -top-2 -left-2" />
      <div className="flex items-center gap-3 rounded-pill-lg border border-border bg-white/[0.04] py-1 pr-4 pl-1 backdrop-blur-xs">
        <img src={avatar} alt="" width={40} height={40} className="size-10 rounded-full object-cover" />
        <span className="text-base font-bold text-white">{name}</span>
      </div>
    </div>
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
        <path
          d="M110 150 L250 150 L250 220 M300 232 L390 232 L390 128 M330 232 L440 232 L440 268 M270 232 L120 232 L120 282"
          stroke="white"
          strokeOpacity="0.14"
        />
      </svg>

      {craft.people.map((person, i) => (
        <PersonPill
          key={person.name}
          name={person.name}
          avatar={person.avatar}
          style={{ top: positions[i].top, left: positions[i].left }}
        />
      ))}
    </div>
  );
}
