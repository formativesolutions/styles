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
 * NPM main class used for exporting this package's contents.
 *
 * @author Formative Solutions <contact@formativesolutions.io>
 *     (https://formativesolutions.io/)
 * @version v1.0.0
 * @since v1.0.0
 */

export {
	FlexAlignmentOption,
	FlexContainerConfiguration,
	flexContainer,
} from "./mixins/flex-container";

export {
	ColorMap,
	colorNameToCSSVar,
	createColorToCSSVariableNameMap,
	generateColorDefinitionsCSSObject,
} from "./color-mapping";
