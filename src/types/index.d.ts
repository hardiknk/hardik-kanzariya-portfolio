export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

export type TExperience = {
  companyName: string;
  date: string;
  points: string[];
  marker: string;
} & Required<Pick<TCommonProps, "title">>;

export type TProject = {
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
} & Required<Pick<TCommonProps, "name">>;

export type TNavLink = {
  id: string;
} & Required<Pick<TCommonProps, "title">>;

export type TService = Required<Omit<TCommonProps, "name">>;

export type TSkillGroup = {
  title: string;
  skills: string[];
};

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};
