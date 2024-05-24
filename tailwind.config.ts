import type {Config} from "tailwindcss"

const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                // Site colors
                blue: "#C9D2EA",
                darkBlue: "#416EDF",
                yellow: "#FFCE31",
                darkGray: "#212121",
                lightGray: "#F5F7FB",

                // Pokemon colors
                fire: "#FF6464",
                bug: "#C9FF84",
                water: "#9FF3FF",
                poison: "#D89CFD",
                normal: "#CBCBCB",
                rock: "#CFC06F",
                ground: "#FFBF72",
                fighting: "#FF699F",
                ghost: "#B592FF",
                psychic: "#FF5E60",
                ice: "#AEFFF4",
                dragon: "#87C5FF",
                dark: "#8F8F8F",
                fairy: "#FFA2E3",
                electric: "#FFFA86",
                steel: "#A4FFE9",
                grass: "#80E177",

                //  Pokemon Background
                fireBackground: "#EB6C6C",
                bugBackground: "#91AC22",
                waterBackground: "#009ACB",
                poisonBackground: "#7E00CB",
                normalBackground: "#B6B6B6",
                rockBackground: "#857D57",
                groundBackground: "#A77437",
                fightingBackground: "#BA114E",
                ghostBackground: "#6B2BF1",
                psychicBackground: "#C4484A",
                iceBackground: "#3A9D90",
                dragonBackground: "#1268B8",
                darkBackground: "#373737",
                fairyBackground: "#C01A8D",
                electricBackground: "#B7B117",
                steelBackground: "#448F85",
                grassBackground: "#1EBA11",

                // Shadcn
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: {height: "0"},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: "0"},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            backgroundImage: {
                flying: "linear-gradient(to right, #CBE9FF, #2299EE)",
                flyingBackground: "linear-gradient(to right, #CBE9FF, #2299EE)"
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config