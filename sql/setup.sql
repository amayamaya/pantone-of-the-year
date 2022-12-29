-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE if exists colors;

CREATE TABLE colors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    year SMALLINT,
    name VARCHAR,
    value VARCHAR,
    hex VARCHAR
);

INSERT into colors (year, name, value, hex) VALUES
(2020, 'Cerulean', '15-4020', '#9BB7D4'),

(2001, 'Fuschia Rose', '17-2031', '#C74375'),
(2002, 'True Red', '19-1664', '#BF1932'),
(2003, 'Aqua Sky', '14-4811', '#7BC4C4'),
(2004, 'Tigerlily', '17-1456', '#E2583E'),
(2005, 'Blue Turquoise', '15-5217', '#55B4B0'),

(2006, 'Sand Dollar', '13-1106', '#DFCFBE'),
(2007, 'Chili Peppers', '19-1557', '#9B1B30'),
(2008, 'Blue Iris', '18-3943', '#5B5EA6'),
(2009, 'Mimosa', '14-0848', '#EFC050'),
(2010, 'Turquoise', '15-5519', '#40E0D0'),

(2011, 'Honeysuckle', '18-2120', '#D94F70'),
(2012, 'Tangering Tango', '17-1463', '#DD4124'),
(2013, 'Emerald', '17-5641', '#50C878'),
(2014, 'Radiant Orchid', '18-3224', '#AD5E99'),
(2015, 'Marsala', '18-1438', '#B57170'),

(2016, 'Rose Quartz + Serenity', '13-1520 + 15-3919', '#F7CAC9 + #B3CEE5'),
(2017, 'Greenery', '15-0343', '#88B04B'),
(2018, 'Ultra Violet', '18-3838', '#5f4b8b'),
(2019, 'Living Coral', '16-1546', '#ff6f61'),
(2020, 'Classic Blue', '19-4052', '#0F4C81'),

(2021, 'Ultimate Grey + Illuminating', '17-5104 + 13-0647', '#939597 + #F5DF4D'),
(2022, 'Very Peri', '17-3938', '#6667AB'),
(2023, 'Viva Magenta', '18-1750', '#BB2649');
