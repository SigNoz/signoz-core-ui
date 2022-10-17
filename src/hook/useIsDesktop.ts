import { useMediaQuery } from "@react-hook/media-query";

export const useIsDesktop = (minWidth = 768) => {
  return useMediaQuery(`only screen and (min-width: ${minWidth}px)`);
};
