import "./index.css";
const t = {
  BG_ROBIN_100: "#CAD5FD",
  BG_ROBIN_200: "#B8C7FC",
  BG_ROBIN_300: "#95ACFB",
  BG_ROBIN_400: "#7190F9",
  BG_ROBIN_500: "#4E74F8",
  BG_ROBIN_600: "#3F5ECC",
  BG_SIENNA_100: "#E6D9CD",
  BG_SIENNA_200: "#DECCBC",
  BG_SIENNA_300: "#CEB29B",
  BG_SIENNA_400: "#BD9979",
  BG_SIENNA_500: "#AD7F58",
  BG_SIENNA_600: "#8A6646",
  BG_CHERRY_100: "#FADADB",
  BG_CHERRY_200: "#F7C8CA",
  BG_CHERRY_300: "#F5B6B8",
  BG_CHERRY_400: "#EA6D71",
  BG_CHERRY_500: "#E5484D",
  BG_CHERRY_600: "#B83A3E",
  BG_AQUA_100: "#C1EEFD",
  BG_AQUA_200: "#9AE4FC",
  BG_AQUA_300: "#72D9FB",
  BG_AQUA_400: "#4BCFF9",
  BG_AQUA_500: "#23C4F8",
  BG_AQUA_600: "#07AFE6",
  BG_SAKURA_100: "#FBC8D2",
  BG_SAKURA_200: "#FAB5C3",
  BG_SAKURA_300: "#F791A5",
  BG_SAKURA_400: "#F56C87",
  BG_SAKURA_500: "#F24769",
  BG_SAKURA_600: "#C53955",
  BG_AMBER_100: "#FFF0CC",
  BG_AMBER_200: "#FFEBBB",
  BG_AMBER_300: "#FFE19A",
  BG_AMBER_400: "#FFD778",
  BG_AMBER_500: "#FFCD56",
  BG_AMBER_600: "#D5AA45",
  BG_INK_100: "#2A2E37",
  BG_INK_200: "#23262E",
  BG_INK_300: "#16181D",
  BG_INK_400: "#121317",
  BG_INK_500: "#0B0C0E",
  BG_VANILLA_100: "#FFFFFF",
  BG_VANILLA_200: "#F5F5F5",
  BG_VANILLA_300: "#E9E9E9",
  BG_VANILLA_400: "#C0C1C3",
  BG_SLATE_200: "#2C3140",
  BG_SLATE_300: "#242834",
  BG_SLATE_400: "#1D212D",
  BG_SLATE_500: "#161922",
  BG_GRADIENT_CORAL: "linear-gradient(114deg, #ED6D68 14.99%, #FCA083 77.27%)",
  "BG_GRADIENT_DARK-SHADOW": "linear-gradient(139deg, rgba(18, 19, 23, 0.80) 0%, rgba(18, 19, 23, 0.90) 98.68%)",
  BG_GRADIENT_DAWN: "linear-gradient(99deg, #7A97FA 4.42%, #F977FF 96.6%)",
  BG_GRADIENT_OCEAN: "linear-gradient(99deg, #48F8CF 4.42%, #28CBF3 96.6%)",
  BG_GRADIENT_SPLASH: "linear-gradient(99deg, #4568DC 4.42%, #324DAA 96.6%)",
  BG_GRADIENT_FLAMINGO: "linear-gradient(92deg, #CA9CD0 1.36%, #D38972 68.48%, #A1B1E7 98.99%)",
  BG_FOREST_200: "#A8F3D3",
  BG_FOREST_300: "#7CEDBE",
  BG_FOREST_400: "#51E7A8",
  BG_FOREST_500: "#25E192",
  BG_FOREST_600: "#1EB475",
  TEXT_ROBIN_100: "#CAD5FD",
  TEXT_ROBIN_200: "#B8C7FC",
  TEXT_ROBIN_300: "#95ACFB",
  TEXT_ROBIN_400: "#7190F9",
  TEXT_ROBIN_500: "#4E74F8",
  TEXT_ROBIN_600: "#3F5ECC",
  TEXT_SIENNA_100: "#E6D9CD",
  TEXT_SIENNA_200: "#DECCBC",
  TEXT_SIENNA_300: "#CEB29B",
  TEXT_SIENNA_400: "#BD9979",
  TEXT_SIENNA_500: "#AD7F58",
  TEXT_SIENNA_600: "#8A6646",
  TEXT_CHERRY_100: "#FADADB",
  TEXT_CHERRY_200: "#F7C8CA",
  TEXT_CHERRY_300: "#F5B6B8",
  TEXT_CHERRY_400: "#EA6D71",
  TEXT_CHERRY_500: "#E5484D",
  TEXT_CHERRY_600: "#B83A3E",
  TEXT_AQUA_100: "#C1EEFD",
  TEXT_AQUA_200: "#9AE4FC",
  TEXT_AQUA_300: "#72D9FB",
  TEXT_AQUA_400: "#4BCFF9",
  TEXT_AQUA_500: "#23C4F8",
  TEXT_AQUA_600: "#07AFE6",
  TEXT_SAKURA_100: "#FBC8D2",
  TEXT_SAKURA_200: "#FAB5C3",
  TEXT_SAKURA_300: "#F791A5",
  TEXT_SAKURA_400: "#F56C87",
  TEXT_SAKURA_500: "#F24769",
  TEXT_SAKURA_600: "#C53955",
  TEXT_AMBER_100: "#FFF0CC",
  TEXT_AMBER_200: "#FFEBBB",
  TEXT_AMBER_300: "#FFE19A",
  TEXT_AMBER_400: "#FFD778",
  TEXT_AMBER_500: "#FFCD56",
  TEXT_AMBER_600: "#D5AA45",
  TEXT_INK_100: "#2A2E37",
  TEXT_INK_200: "#23262E",
  TEXT_INK_300: "#16181D",
  TEXT_INK_400: "#121317",
  TEXT_INK_500: "#0B0C0E",
  TEXT_VANILLA_100: "#FFFFFF",
  TEXT_VANILLA_200: "#F5F5F5",
  TEXT_VANILLA_300: "#E9E9E9",
  TEXT_VANILLA_400: "#C0C1C3",
  TEXT_SLATE_200: "#2C3140",
  TEXT_SLATE_300: "#242834",
  TEXT_SLATE_400: "#1D212D",
  TEXT_SLATE_500: "#161922",
  TEXT_GRADIENT_CORAL: "linear-gradient(114deg, #ED6D68 14.99%, #FCA083 77.27%)",
  "TEXT_GRADIENT_DARK-SHADOW": "linear-gradient(139deg, rgba(18, 19, 23, 0.80) 0%, rgba(18, 19, 23, 0.90) 98.68%)",
  TEXT_GRADIENT_DAWN: "linear-gradient(99deg, #7A97FA 4.42%, #F977FF 96.6%)",
  TEXT_GRADIENT_OCEAN: "linear-gradient(99deg, #48F8CF 4.42%, #28CBF3 96.6%)",
  TEXT_GRADIENT_SPLASH: "linear-gradient(99deg, #4568DC 4.42%, #324DAA 96.6%)",
  TEXT_GRADIENT_FLAMINGO: "linear-gradient(92deg, #CA9CD0 1.36%, #D38972 68.48%, #A1B1E7 98.99%)",
  TEXT_FOREST_200: "#A8F3D3",
  TEXT_FOREST_300: "#7CEDBE",
  TEXT_FOREST_400: "#51E7A8",
  TEXT_FOREST_500: "#25E192",
  TEXT_FOREST_600: "#1EB475"
}, G = "_main_1taid_5", B = {
  main: G
}, R = ["color"];
function N(E) {
  return E && typeof E == "object" && E.constructor === Object;
}
function X(E, ...T) {
  const _ = new Set(T);
  return _.add(B.main), _.add(E.className || ""), Object.keys(E).forEach((A) => {
    if (!R.includes(A))
      return;
    _.add(B[A]);
    const F = E[A];
    Array.isArray(F) ? F.forEach((C) => _.add(B[`${A}-${C}`])) : N(F) ? Object.entries(F).forEach(([C, D]) => {
      _.add(B[`${A}-${C}`]), _.add(B[`${A}-${C}-${D}`]);
    }) : _.add(B[`${A}-${F}`]);
  }), Array.from(_).filter((A) => !!A).join(" ");
}
function e(E, T) {
  const _ = {};
  return E.width && (_.width = E.width), E.height && (_.height = E.height), _.width || _.height ? Object.assign(T || {}, _) : T;
}
function I(E, ...T) {
  return Object.keys(E).filter(
    (_) => E[_] !== void 0 && !R.includes(_) && !T.includes(_)
  ).reduce(
    (_, A) => (_[A] = E[A], _),
    {
      style: e(E, E.style)
    }
  );
}
export {
  t as Color,
  I as omitStyledProps,
  X as styledClasses
};
