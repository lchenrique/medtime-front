export const usePageTransition = () => {
  document.querySelectorAll(".page-transition").forEach((item) => {
    (item as any).style.opacity = 1;
  });
};
