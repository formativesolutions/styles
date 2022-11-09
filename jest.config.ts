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

import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
	
	// Automatically clear mock calls and instances between every test
	clearMocks: true,
	
	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: true,
	
	// The directory where Jest should output its coverage files
	coverageDirectory: "ts/tests/coverage",
	
	// A list of paths to directories that Jest should use to search for files in
	roots: [
		"<rootDir>/ts/tests",
	],
	
	// The test environment that will be used for testing
	testEnvironment: "node",
	
	transform: {

		"^.+\\.m?[tj]sx?$": [
			"ts-jest",
			{ useESM: true },
		],
	
	},
	
};

export default jestConfig;
