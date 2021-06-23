import { useMemo } from "react";
import skills from "../../data/skills/skills";
import { SkillType } from "../../types/enums";

const useSkillList = (selectedType: SkillType) => {
  return useMemo(
    () =>
      skills
        .filter((skill) => skill.type === selectedType)
        .sort((a, b) => b.level - a.level),
    [selectedType]
  );
};

export default useSkillList;
