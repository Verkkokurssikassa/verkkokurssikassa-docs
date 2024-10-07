export const getCurrentTheme = (): string => {
   if (typeof window === "undefined") return "light"; // SSR
   const storedTheme = localStorage.getItem("theme");
   if (storedTheme) {
      return storedTheme;
   }
   return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const toggleTheme = (currentTheme: string): string => {
   const newTheme = currentTheme === "dark" ? "light" : "dark";
   document.documentElement.classList.toggle("dark", newTheme === "dark");
   localStorage.setItem("theme", newTheme);
   return newTheme;
};
