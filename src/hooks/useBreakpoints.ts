import useMediaQuery from "./useMediaQuery";

export default function useBreakpoints() {
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isXl = useMediaQuery("(min-width: 1280px)");
  return {
    isMd,
    isLg,
    isXl,
  };
}
