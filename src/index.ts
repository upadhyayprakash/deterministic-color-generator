/**
 * This method returns random color for the given input string. It's deterministic.
 * It generates eye-pleasing unsaturated random colors (saturated colors are sub-optimal).
 * Ref: https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
 *
 * @param seed Text based seed input
 * @returns a hex code or rgb() value of the random generated color.
 */
export const colorGenerator = (seed: string) => {
	/* Get at max 5 characters from the string or the given string */
	let first5Chars = seed.substring(0, 5);
	let asciiSeed = "";
	for (let c of first5Chars) asciiSeed += c.charCodeAt(0);
	let numericSeed = parseInt(asciiSeed);
	let num = Math.round(0xffffff * numericSeed);
	/**
	 * Bitwise Right-Shift operator ( ">>" ) halves the value for every shifted bit.
	 * So 32 >> 1 equals 16. 32 >> 2 equals 8 and so on.
	 */
	let r = (num >> 16) & 255;
	let g = (num >> 8) & 255;
	let b = num & 255;
	return {
		bg: "rgba(" + (r + (255 - r) / 4) + ", " + (g + (255 - g) / 4) + ", " + (b + (255 - b) / 4) + ", 0.71)",
		fg: "rgba(" + r / 2 + ", " + g / 2 + ", " + b / 2 + ", 1)",
		og: "rgb(" + Math.min(r * 2, 255) + ", " + Math.min(g * 2, 255) + "," + Math.min(b * 2, 255) + ")"
	};
};
