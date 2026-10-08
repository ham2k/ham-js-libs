# lib-country-file

A JavaScript library for using the **Amateur Radio Country Files** data collected by Jim Reisert AD1C and available from https://www.country-files.com/


Coordinates and UTC offsets use the ordinary signs, not the country file's: `lon`
is east-positive, and `tz` reads `"GMT-5"` for five hours behind UTC. The file
itself states both west-positive, and releases before 1.1 passed them through
as they were.
