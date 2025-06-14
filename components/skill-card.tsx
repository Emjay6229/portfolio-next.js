"use client";

import { getIconForSkill } from "@/lib/getIconForSkill";

type SkillCardProps = {
  skill: string;
  level: string;
};

export default function SkillCard({ skill, level }: SkillCardProps) {
  const { icon, color } = getIconForSkill(skill);

  return (
    <div className="flex flex-col items-center justify-center p-6 border rounded-lg hover:shadow-lg transition">
      {icon && <i className={`${icon} ${color} text-5xl mb-4`} />}
      <h3 className="text-xl font-bold">{skill}</h3>
      <p className="text-blue-400">{level}</p>
    </div>
  );
}
