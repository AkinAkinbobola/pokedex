/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                honk: ['Honk', 'system-ui']
            },
            colors: {
                normal: '#A8A77A',
                fire: '#EE8130',
                water: '#6390F0',
                electric: '#F7D02C',
                grass: '#7AC74C',
                ice: '#96D9D6',
                fighting: '#C22E28',
                poison: '#A33EA1',
                ground: '#E2BF65',
                flying: '#A98FF3',
                psychic: '#F95587',
                bug: '#A6B91A',
                rock: '#B6A136',
                ghost: '#735797',
                dragon: '#6F35FC',
                dark: '#705746',
                steel: '#B7B7CE',
                fairy: '#D685AD',
                generic: '#CCCCCC',

                /* Lighter shades */
                darkNormal: '#726E5C',
                darkFire: '#A64A1E',
                darkWater: '#3F5DAD',
                darkElectric: '#C4B111',
                darkGrass: '#5F7839',
                darkIce: '#6A9C97',
                darkFighting: '#902726',
                darkPoison: '#82287A',
                darkGround: '#B18E40',
                darkFlying: '#816BCD',
                darkPsychic: '#D12D58',
                darkBug: '#7C8925',
                darkRock: '#A29430',
                darkGhost: '#4C415C',
                darkDragon: '#5740A3',
                darkDark: '#4D433E',
                darkSteel: '#9393A7',
                darkFairy: '#AA758A',
                darkGeneric: '#B3B3B3',
            }
        },
    },
    plugins: [],
}

