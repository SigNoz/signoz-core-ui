import { promises as fs } from "fs";
const generateEnum = (obj, parent = "", finalObj) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      const currentKey = parent ? `${parent}_${key}` : key;
      generateEnum(obj[key], currentKey, finalObj);
    } else {
      if (key === "value") {
        finalObj[parent.toUpperCase()] = obj[key];
      }
    }
  });
};

(async () => {
  // Generate Color.ts file
  const colorEnum = {};
  const colors = await JSON.parse(
    await fs.readFile("./src/Colors/colors.json")
  );
  generateEnum(colors, undefined, colorEnum);
  fs.writeFile(
    "./src/Colors/Colors.ts",
    `export const Color = ${JSON.stringify(colorEnum, null, 2)};
    export type Color = (typeof Color)[keyof typeof Color];
    `
  )
    .then(() => {
      console.log("Color.ts generated successfully");
    })
    .catch((e) => {
      console.log(`Something Went wrong - ${e}`);
    });

  // Generate Spacing.ts file
  const spacingEnum = {};
  const spacings = await JSON.parse(
    await fs.readFile("./src/Spacing/spacing.json")
  );
  generateEnum(spacings, undefined, spacingEnum);
  fs.writeFile(
    "./src/Spacing/Spacing.ts",
    `export const Spacing = ${JSON.stringify(spacingEnum, null, 2)};
    export type Spacing = (typeof Spacing)[keyof typeof Spacing];
    `
  )
    .then(() => {
      console.log("Spacing.ts generated successfully");
    })
    .catch((e) => {
      console.log(`Something Went wrong - ${e}`);
    });

  // Generate Typography.ts file
  const typographyEnum = {};
  const typography = await JSON.parse(
    await fs.readFile("./src/Typography/typography.json")
  );
  generateEnum(typography, undefined, typographyEnum);
  fs.writeFile(
    "./src/Typography/Typography.ts",
    `export const Typography = ${JSON.stringify(typographyEnum, null, 2)};
    export type Typography = (typeof Typography)[keyof typeof Typography];
    `
  )
    .then(() => {
      console.log("Typography.ts generated successfully");
    })
    .catch((e) => {
      console.log(`Something Went wrong - ${e}`);
    });
})();
