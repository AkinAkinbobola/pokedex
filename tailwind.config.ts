import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
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

            },
            backgroundImage: {
                flying: "linear-gradient(to right, #CBE9FF, #2299EE)",
                flyingBackground: "linear-gradient(to right, #CBE9FF, #2299EE)"
            }
        },
    },
    plugins: [],
};
export default config;
