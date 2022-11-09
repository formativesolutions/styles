/*
 * Created by Formative Solutions <contact@formativesolutions.io>
 *     (https://formativesolutions.io/).
 * 3:00 PM -- November 9th, 2022
 * Project: @formativesolutions/styles
 * 
 * @formativesolutions/styles - A collection of CSS-in-JS styling utilities used
 *     across the Formative Solutions ecosystem.
 * Copyright (C) 2022 Formative Solutions
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * A read-only mapping from color names to color values.
 */
export type ColorMap<Color extends string> = Readonly<Record<Color, string>>;

/**
 * Formats a color name (such as 'PALE_GREEN') into a valid format for a CSS
 * variable identifier (such as '--color-pale-green').
 *
 * @param {string} colorName The original color name (i.e. 'PALE_GREEN').
 * @param {boolean} includeVar true if the resultant CSS variable identifier
 * should be wrapped in 'var(...)' before being returned. Defaults to true.
 * @returns {string} The formatted CSS variable identifier for the original
 * color name (i.e. '--color-pale-green').
 */
export function colorNameToCSSVar(colorName: string,
								  includeVar: boolean = true): string {
	
	let result: string = `--color-${colorName.toLowerCase().replace("_", "-")}`;
	
	if (includeVar) result = `var(${result})`;
	
	return result;
	
}

/**
 * Maps an object from being a human-readable color names to CSS color values
 * map, to being a human-readable color names to CSS variable identifier string
 * map.
 *
 * In other words:
 *   Map<Color Names, Color Values) -> Map<Color Names, CSS Variable Names>
 *
 * This function is intended to be used alongside
 * {@link generateColorDefinitionsCSSObject}.
 *
 * @param {ColorMap<Color>} rawMapping The source color name to color value map.
 * @returns {ColorMap<Color>} A new mapping from color names to the CSS variable
 * identifier for the CSS variable that represents the provided color.
 */
export function createColorToCSSVariableNameMap<Color extends string>(
	rawMapping: ColorMap<Color>): ColorMap<Color> {
	
	return Object.fromEntries(
		Object.entries(rawMapping).map(
			([colorName]: [string, unknown]): [Color, string] =>
				[colorName as Color, colorNameToCSSVar(colorName)]
		)
	) as ColorMap<Color>;
	
}

/**
 * Creates an Emotion-style object/map from CSS variables names (generated with
 * {@link colorNameToCSSVar}) to color values.
 *
 * @param {Record<string, string>} map An object mapping from color names to
 * valid CSS color values.
 * @returns {Record<string, string>} A new object mapping from valid CSS
 * variable identifiers to CSS color values.
 */
export function generateColorDefinitionsCSSObject(
	map: Record<string, string>): Record<string, string> {
	
	return Object.fromEntries(
		Object.entries(map).map(
			([colorName, colorValue]: [string, string]): [string, string] =>
				[colorNameToCSSVar(colorName, false), colorValue]
		)
	);
	
}
