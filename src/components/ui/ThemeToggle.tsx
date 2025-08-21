"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-[#1a1b2e] hover:bg-[#24263a] text-indigo-400 hover:text-cyan-400 transition"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}



// "use client";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="p-2 text-white"
//     >
//       {theme === "dark" ? <Sun /> : <Moon />}
//     </button>
//   );
// }
