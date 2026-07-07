import {
  IconTruck,
  IconRoute,
  IconBuilding,
  IconBriefcase,
  IconBox,
  IconShield,
} from "./Icons";

const map = {
  truck: IconTruck,
  route: IconRoute,
  building: IconBuilding,
  briefcase: IconBriefcase,
  box: IconBox,
  shield: IconShield,
} as const;

export function ServiceIcon({
  name,
  className,
}: {
  name: keyof typeof map;
  className?: string;
}) {
  const Cmp = map[name];
  return <Cmp className={className} />;
}
