import {
  Scale,
  Building2,
  Briefcase,
  Landmark,
  ShieldCheck,
  Users,
  FileText,
} from "lucide-react";
import type { PracticeArea } from "@/lib/site";

const map = {
  scale: Scale,
  building: Building2,
  briefcase: Briefcase,
  landmark: Landmark,
  shield: ShieldCheck,
  users: Users,
  fileText: FileText,
} as const;

export function PracticeIcon({
  icon,
  className = "size-6",
}: {
  icon: PracticeArea["icon"];
  className?: string;
}) {
  const Icon = map[icon];
  return <Icon className={className} strokeWidth={1.4} />;
}