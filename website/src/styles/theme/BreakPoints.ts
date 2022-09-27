type sizes = "sm" | "md" | "lg" | "xl" | "2xl";

const values: Record<sizes, { min: string; max?: string }> = {
  sm: { min: "640px", max: "767px" },
  md: { min: "768px", max: "1023px" },
  lg: { min: "1024px", max: "1279px" },
  xl: { min: "1280px", max: "1535px" },
  "2xl": { min: "1536px" },
};

const BreakPoints = {
  values: values,
  //up: (key: sizes) => "",
  //down: (key: sizes) => "",
  //only: (key: sizes) => "",
  //not: (key: sizes) => "",
  //between: (start: sizes, end: sizes) => "",
};

export default BreakPoints;
