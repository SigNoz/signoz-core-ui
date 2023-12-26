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
    `export const Colors = ${JSON.stringify(colorEnum, null, 2)};`
  )
    .then(() => {
      console.log("Color.ts generated successfully");
    })
    .catch((e) => {
      console.log(`Something Went wrong - ${e}`);
    });
})();
