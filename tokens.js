export const BRANDS = [
 {
  "id": "refactored-a",
  "systemId": "refactored-a",
  "brandId": "refactored",
  "variant": "a",
  "variantLabel": "Option A — Terminal",
  "name": "Refactored.ai",
  "blurb": "Platform infrastructure for AI-driven learning products.",
  "logo": "assets/logo/refactored-logo.svg",
  "mark": "assets/logo/refactored-mark.svg",
  "fonts": {
   "heading": "IBM Plex Mono",
   "body": "IBM Plex Sans",
   "license": "OFL (Google Fonts)"
  },
  "typeScale": {
   "base": 16,
   "ratio": 1.2
  },
  "radius": 4,
  "shadow": "0 1px 2px rgba(8,12,16,0.24)",
  "motion": {
   "personality": "Instrumental — fast and exact; nothing decorative",
   "duration": {
    "fast": "90ms",
    "base": "160ms",
    "slow": "240ms"
   },
   "easing": {
    "standard": "cubic-bezier(0.2,0,0,1)",
    "enter": "cubic-bezier(0,0,0.2,1)",
    "exit": "cubic-bezier(0.3,0,1,1)"
   },
   "enterDistance": "6px",
   "pressScale": 0.99,
   "rules": "fast → hover, press, toggles · base → menus, toasts, accordions · slow → modals, view changes; exits run at fast with the exit curve; prefers-reduced-motion collapses all motion"
  },
  "modes": {
   "light": {
    "bg": "#F7FAFC",
    "bgElevated": "#FFFFFF",
    "fg": "#16222C",
    "fgMuted": "#4E6172",
    "accent": "#1F76B4",
    "accentContrast": "#FFFFFF",
    "accentSoft": "#DDEEF9",
    "line": "#D5E0E8",
    "success": "#1A7F37",
    "warning": "#9A6700",
    "danger": "#C93C37"
   },
   "dark": {
    "bg": "#0C141B",
    "bgElevated": "#14202A",
    "fg": "#E8F0F6",
    "fgMuted": "#9FB3C2",
    "accent": "#5CA7DA",
    "accentContrast": "#06202F",
    "accentSoft": "#123246",
    "line": "#263743",
    "success": "#4AC26B",
    "warning": "#D4A72C",
    "danger": "#F2655F"
   }
  },
  "responsive": {
   "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px"
   },
   "touchTargetMin": "44px",
   "pagePadding": "clamp(16px, 4vw, 32px)",
   "note": "Fluid layout: paddings clamp, grids use minmax(min(Npx,100%),1fr); display type may use clamp() between the Heading and Display steps."
  }
 },
 {
  "id": "refactored-b",
  "systemId": "refactored-b",
  "brandId": "refactored",
  "variant": "b",
  "variantLabel": "Option B — Geometric",
  "name": "Refactored.ai",
  "blurb": "Platform infrastructure for AI-driven learning products.",
  "logo": "assets/logo/refactored-logo.svg",
  "mark": "assets/logo/refactored-mark.svg",
  "fonts": {
   "heading": "Outfit",
   "body": "Outfit",
   "license": "OFL (Google Fonts)"
  },
  "typeScale": {
   "base": 16,
   "ratio": 1.25
  },
  "radius": 8,
  "shadow": "0 2px 6px rgba(12,16,20,0.10)",
  "motion": {
   "personality": "Instrumental — fast and exact; nothing decorative",
   "duration": {
    "fast": "90ms",
    "base": "160ms",
    "slow": "240ms"
   },
   "easing": {
    "standard": "cubic-bezier(0.2,0,0,1)",
    "enter": "cubic-bezier(0,0,0.2,1)",
    "exit": "cubic-bezier(0.3,0,1,1)"
   },
   "enterDistance": "6px",
   "pressScale": 0.99,
   "rules": "fast → hover, press, toggles · base → menus, toasts, accordions · slow → modals, view changes; exits run at fast with the exit curve; prefers-reduced-motion collapses all motion"
  },
  "modes": {
   "light": {
    "bg": "#FAFAFA",
    "bgElevated": "#FFFFFF",
    "fg": "#191C1F",
    "fgMuted": "#535A61",
    "accent": "#256FA6",
    "accentContrast": "#FFFFFF",
    "accentSoft": "#E1EFF8",
    "line": "#DDDFE2",
    "success": "#1A7F37",
    "warning": "#9A6700",
    "danger": "#C93C37"
   },
   "dark": {
    "bg": "#101214",
    "bgElevated": "#191C1F",
    "fg": "#EAEDEF",
    "fgMuted": "#A3AAB1",
    "accent": "#7CBCE8",
    "accentContrast": "#0A2434",
    "accentSoft": "#173248",
    "line": "#2C3136",
    "success": "#4AC26B",
    "warning": "#D4A72C",
    "danger": "#F2655F"
   }
  },
  "responsive": {
   "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px"
   },
   "touchTargetMin": "44px",
   "pagePadding": "clamp(16px, 4vw, 32px)",
   "note": "Fluid layout: paddings clamp, grids use minmax(min(Npx,100%),1fr); display type may use clamp() between the Heading and Display steps."
  }
 },
 {
  "id": "colaberry-enterprise",
  "systemId": "colaberry-enterprise",
  "brandId": "colaberry-enterprise",
  "variant": null,
  "name": "Colaberry Enterprise",
  "blurb": "Enterprise learning and capability programs.",
  "logo": "assets/logo/colaberry-horizontal.png",
  "mark": "assets/cb-enterprise-mark.svg",
  "logoDark": "assets/logo/colaberry-horizontal-white.png",
  "fonts": {
   "heading": "Roboto",
   "body": "Roboto",
   "license": "Apache-2.0 (Google Fonts)"
  },
  "typeScale": {
   "base": 16,
   "ratio": 1.25
  },
  "radius": 8,
  "shadow": "0 3px 8px rgba(26,26,26,0.06), 0 1px 3px rgba(26,26,26,0.04)",
  "motion": {
   "personality": "Composed — measured, quiet fades; nothing bounces",
   "duration": {
    "fast": "120ms",
    "base": "200ms",
    "slow": "300ms"
   },
   "easing": {
    "standard": "cubic-bezier(0.4,0,0.2,1)",
    "enter": "cubic-bezier(0,0,0.2,1)",
    "exit": "cubic-bezier(0.4,0,1,1)"
   },
   "enterDistance": "8px",
   "pressScale": 0.985,
   "rules": "fast → hover, press, toggles · base → menus, toasts, accordions · slow → modals, view changes; exits run at fast with the exit curve; prefers-reduced-motion collapses all motion"
  },
  "modes": {
   "light": {
    "bg": "#F8F8F7",
    "bgElevated": "#FFFFFF",
    "fg": "#1A1A1A",
    "fgMuted": "#6B6B6B",
    "accent": "#2E6A86",
    "accentContrast": "#FFFFFF",
    "accentSoft": "#EAF2F6",
    "line": "#D8D8D8",
    "success": "#468A2E",
    "warning": "#B26E00",
    "danger": "#E5121D"
   },
   "dark": {
    "bg": "#0F0F0F",
    "bgElevated": "#1A1A1A",
    "fg": "#F4F4F4",
    "fgMuted": "#B4B4B4",
    "accent": "#6F9DB6",
    "accentContrast": "#0F1E28",
    "accentSoft": "#1A3947",
    "line": "#2E2E2E",
    "success": "#8AC759",
    "warning": "#F0A93A",
    "danger": "#FF6B72"
   }
  },
  "responsive": {
   "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px"
   },
   "touchTargetMin": "44px",
   "pagePadding": "clamp(16px, 4vw, 32px)",
   "note": "Fluid layout: paddings clamp, grids use minmax(min(Npx,100%),1fr); display type may use clamp() between the Heading and Display steps."
  },
  "markLight": "assets/cb-enterprise-mark.svg",
  "markDark": "assets/cb-enterprise-mark-dark.svg",
  "markPng": "assets/cb-enterprise-mark.png"
 },
 {
  "id": "colaberry-training",
  "systemId": "colaberry-training",
  "brandId": "colaberry-training",
  "variant": null,
  "name": "Colaberry Training",
  "blurb": "Open-enrollment classes and the free-class funnel.",
  "logo": "assets/logo/colaberry-horizontal.png",
  "mark": "assets/logo/cb-training-mark.png",
  "logoDark": "assets/logo/colaberry-horizontal-white.png",
  "fonts": {
   "heading": "Roboto",
   "body": "Roboto",
   "license": "Apache-2.0 (Google Fonts)"
  },
  "typeScale": {
   "base": 17,
   "ratio": 1.28
  },
  "radius": 16,
  "shadow": "0 3px 8px rgba(122,16,22,0.08), 0 1px 3px rgba(26,26,26,0.04)",
  "motion": {
   "personality": "Encouraging — warm, a little springy on arrival",
   "duration": {
    "fast": "140ms",
    "base": "230ms",
    "slow": "360ms"
   },
   "easing": {
    "standard": "cubic-bezier(0.35,0,0.15,1)",
    "enter": "cubic-bezier(0.34,1.3,0.64,1)",
    "exit": "cubic-bezier(0.4,0,1,1)"
   },
   "enterDistance": "14px",
   "pressScale": 0.97,
   "rules": "fast → hover, press, toggles · base → menus, toasts, accordions · slow → modals, view changes; exits run at fast with the exit curve; prefers-reduced-motion collapses all motion"
  },
  "modes": {
   "light": {
    "bg": "#FDF8F4",
    "bgElevated": "#FFFFFF",
    "fg": "#1A1A1A",
    "fgMuted": "#6B6B6B",
    "accent": "#E5121D",
    "accentContrast": "#FFFFFF",
    "accentSoft": "#FFDBDD",
    "line": "#E8DED6",
    "success": "#468A2E",
    "warning": "#B26E00",
    "danger": "#C20E1E"
   },
   "dark": {
    "bg": "#171210",
    "bgElevated": "#221B18",
    "fg": "#F6EFEA",
    "fgMuted": "#B8ACA4",
    "accent": "#FD5760",
    "accentContrast": "#2B0508",
    "accentSoft": "#3A1214",
    "line": "#382E29",
    "success": "#8AC759",
    "warning": "#F0A93A",
    "danger": "#FF8A90"
   }
  },
  "responsive": {
   "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px"
   },
   "touchTargetMin": "44px",
   "pagePadding": "clamp(16px, 4vw, 32px)",
   "note": "Fluid layout: paddings clamp, grids use minmax(min(Npx,100%),1fr); display type may use clamp() between the Heading and Display steps."
  }
 },
 {
  "id": "cpn-a",
  "systemId": "cpn-a",
  "brandId": "cpn",
  "variant": "a",
  "variantLabel": "Option A — Grove",
  "name": "Career Pathways Network",
  "blurb": "Scholarships and career pathways, built on dignity and access.",
  "mark": "assets/logo/cpn-mark.svg",
  "fonts": {
   "heading": "Bitter",
   "body": "Atkinson Hyperlegible",
   "license": "OFL (Google Fonts)"
  },
  "typeScale": {
   "base": 17,
   "ratio": 1.333
  },
  "radius": 12,
  "shadow": "0 1px 4px rgba(28,27,24,0.14)",
  "motion": {
   "personality": "Steady — calm and unhurried; nothing startles",
   "duration": {
    "fast": "170ms",
    "base": "280ms",
    "slow": "420ms"
   },
   "easing": {
    "standard": "cubic-bezier(0.45,0.05,0.25,1)",
    "enter": "cubic-bezier(0.25,0,0.2,1)",
    "exit": "cubic-bezier(0.5,0,0.8,1)"
   },
   "enterDistance": "10px",
   "pressScale": 0.985,
   "rules": "fast → hover, press, toggles · base → menus, toasts, accordions · slow → modals, view changes; exits run at fast with the exit curve; prefers-reduced-motion collapses all motion"
  },
  "modes": {
   "light": {
    "bg": "#FFFDF8",
    "bgElevated": "#FFFFFF",
    "fg": "#1C1B18",
    "fgMuted": "#4E4B42",
    "accent": "#1D6A4C",
    "accentContrast": "#FFFFFF",
    "accentSoft": "#DFF0E6",
    "line": "#DDD8CB",
    "success": "#256C3A",
    "warning": "#8A5A00",
    "danger": "#B3261E"
   },
   "dark": {
    "bg": "#101311",
    "bgElevated": "#1A1E1A",
    "fg": "#F3F1E9",
    "fgMuted": "#B9B5A6",
    "accent": "#5CC08E",
    "accentContrast": "#0B2417",
    "accentSoft": "#17352A",
    "line": "#33382F",
    "success": "#6BCB93",
    "warning": "#E3B341",
    "danger": "#F0736B"
   }
  },
  "responsive": {
   "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px"
   },
   "touchTargetMin": "44px",
   "pagePadding": "clamp(16px, 4vw, 32px)",
   "note": "Fluid layout: paddings clamp, grids use minmax(min(Npx,100%),1fr); display type may use clamp() between the Heading and Display steps."
  }
 },
 {
  "id": "cpn-b",
  "systemId": "cpn-b",
  "brandId": "cpn",
  "variant": "b",
  "variantLabel": "Option B — Vestry",
  "name": "Career Pathways Network",
  "blurb": "Scholarships and career pathways, built on dignity and access.",
  "mark": "assets/logo/cpn-mark.svg",
  "fonts": {
   "heading": "Source Serif 4",
   "body": "Public Sans",
   "license": "OFL (Google Fonts)"
  },
  "typeScale": {
   "base": 17,
   "ratio": 1.3
  },
  "radius": 12,
  "shadow": "0 1px 4px rgba(30,24,38,0.14)",
  "motion": {
   "personality": "Steady — calm and unhurried; nothing startles",
   "duration": {
    "fast": "170ms",
    "base": "280ms",
    "slow": "420ms"
   },
   "easing": {
    "standard": "cubic-bezier(0.45,0.05,0.25,1)",
    "enter": "cubic-bezier(0.25,0,0.2,1)",
    "exit": "cubic-bezier(0.5,0,0.8,1)"
   },
   "enterDistance": "10px",
   "pressScale": 0.985,
   "rules": "fast → hover, press, toggles · base → menus, toasts, accordions · slow → modals, view changes; exits run at fast with the exit curve; prefers-reduced-motion collapses all motion"
  },
  "modes": {
   "light": {
    "bg": "#FCFAF7",
    "bgElevated": "#FFFFFF",
    "fg": "#221D28",
    "fgMuted": "#57505F",
    "accent": "#6D4CA3",
    "accentContrast": "#FFFFFF",
    "accentSoft": "#EDE6F7",
    "line": "#DFD9D2",
    "success": "#256C3A",
    "warning": "#8A5A00",
    "danger": "#B3261E"
   },
   "dark": {
    "bg": "#14111A",
    "bgElevated": "#1E1927",
    "fg": "#F1EDF6",
    "fgMuted": "#B3ABC0",
    "accent": "#B197E0",
    "accentContrast": "#1D1030",
    "accentSoft": "#2C2140",
    "line": "#362E44",
    "success": "#6BCB93",
    "warning": "#E3B341",
    "danger": "#F0736B"
   }
  },
  "responsive": {
   "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px"
   },
   "touchTargetMin": "44px",
   "pagePadding": "clamp(16px, 4vw, 32px)",
   "note": "Fluid layout: paddings clamp, grids use minmax(min(Npx,100%),1fr); display type may use clamp() between the Heading and Display steps."
  }
 },
 {
  "id": "ai-flotation-a",
  "systemId": "ai-flotation-a",
  "brandId": "ai-flotation",
  "variant": "a",
  "variantLabel": "Option A — Forge",
  "name": "AI Flotation",
  "blurb": "Workflow intake to delivered system.",
  "mark": "assets/logo/ai-flotation-mark.svg",
  "fonts": {
   "heading": "Space Grotesk",
   "body": "Archivo",
   "license": "OFL (Google Fonts)"
  },
  "typeScale": {
   "base": 16,
   "ratio": 1.3
  },
  "radius": 2,
  "shadow": "0 1px 2px rgba(20,18,16,0.30)",
  "motion": {
   "personality": "Decisive — crisp, immediate, no flourish",
   "duration": {
    "fast": "80ms",
    "base": "140ms",
    "slow": "210ms"
   },
   "easing": {
    "standard": "cubic-bezier(0.3,0,0,1)",
    "enter": "cubic-bezier(0.16,0,0,1)",
    "exit": "cubic-bezier(0.4,0,1,1)"
   },
   "enterDistance": "5px",
   "pressScale": 0.99,
   "rules": "fast → hover, press, toggles · base → menus, toasts, accordions · slow → modals, view changes; exits run at fast with the exit curve; prefers-reduced-motion collapses all motion"
  },
  "modes": {
   "light": {
    "bg": "#F7F6F4",
    "bgElevated": "#FFFFFF",
    "fg": "#1A1917",
    "fgMuted": "#56524B",
    "accent": "#BA430E",
    "accentContrast": "#FFFFFF",
    "accentSoft": "#FBE4D5",
    "line": "#DEDAD3",
    "success": "#1F7A3D",
    "warning": "#8F6400",
    "danger": "#BB3131"
   },
   "dark": {
    "bg": "#121110",
    "bgElevated": "#1C1A18",
    "fg": "#EDEAE6",
    "fgMuted": "#ADA79E",
    "accent": "#F0813C",
    "accentContrast": "#221206",
    "accentSoft": "#3A2313",
    "line": "#35322E",
    "success": "#57BE7C",
    "warning": "#DFA83E",
    "danger": "#F0736B"
   }
  },
  "responsive": {
   "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px"
   },
   "touchTargetMin": "44px",
   "pagePadding": "clamp(16px, 4vw, 32px)",
   "note": "Fluid layout: paddings clamp, grids use minmax(min(Npx,100%),1fr); display type may use clamp() between the Heading and Display steps."
  }
 },
 {
  "id": "ai-flotation-b",
  "systemId": "ai-flotation-b",
  "brandId": "ai-flotation",
  "variant": "b",
  "variantLabel": "Option B — Harbor",
  "name": "AI Flotation",
  "blurb": "Workflow intake to delivered system.",
  "mark": "assets/logo/ai-flotation-mark.svg",
  "fonts": {
   "heading": "Manrope",
   "body": "Manrope",
   "license": "OFL (Google Fonts)"
  },
  "typeScale": {
   "base": 16,
   "ratio": 1.3
  },
  "radius": 6,
  "shadow": "0 1px 3px rgba(10,20,18,0.18)",
  "motion": {
   "personality": "Decisive — crisp, immediate, no flourish",
   "duration": {
    "fast": "80ms",
    "base": "140ms",
    "slow": "210ms"
   },
   "easing": {
    "standard": "cubic-bezier(0.3,0,0,1)",
    "enter": "cubic-bezier(0.16,0,0,1)",
    "exit": "cubic-bezier(0.4,0,1,1)"
   },
   "enterDistance": "5px",
   "pressScale": 0.99,
   "rules": "fast → hover, press, toggles · base → menus, toasts, accordions · slow → modals, view changes; exits run at fast with the exit curve; prefers-reduced-motion collapses all motion"
  },
  "modes": {
   "light": {
    "bg": "#F6F8F7",
    "bgElevated": "#FFFFFF",
    "fg": "#14201D",
    "fgMuted": "#4C5B57",
    "accent": "#0E6E63",
    "accentContrast": "#FFFFFF",
    "accentSoft": "#D8EEE9",
    "line": "#D6DEDB",
    "success": "#1F7A3D",
    "warning": "#8F6400",
    "danger": "#BB3131"
   },
   "dark": {
    "bg": "#0E1413",
    "bgElevated": "#17201E",
    "fg": "#E9EFED",
    "fgMuted": "#A2B1AC",
    "accent": "#46C2AF",
    "accentContrast": "#062B25",
    "accentSoft": "#123B35",
    "line": "#2C3936",
    "success": "#57BE7C",
    "warning": "#DFA83E",
    "danger": "#F0736B"
   }
  },
  "responsive": {
   "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px"
   },
   "touchTargetMin": "44px",
   "pagePadding": "clamp(16px, 4vw, 32px)",
   "note": "Fluid layout: paddings clamp, grids use minmax(min(Npx,100%),1fr); display type may use clamp() between the Heading and Display steps."
  }
 }
];
