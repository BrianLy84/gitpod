/**
 * Copyright (c) 2021 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */

// tailwind.config.js
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    jit: true,
    purge: ["./public/**/*.html", "./src/**/*.{js,ts,tsx}"],
    important: true,
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                gray: colors.warmGray,
                green: colors.lime,
                orange: colors.amber,
                blue: {
                    light: "#75A9EC",
                    DEFAULT: "#5C8DD6",
                    dark: "#265583",
                },
                // TODO: figure out if we want to just pull in the specific gitpod-* colors
                teal: colors.teal,
                sky: colors.sky,
                rose: colors.rose,
                "gitpod-black": "#161616",
                "gitpod-red": "#CE4A3E",
                "gitpod-kumquat-light": "#FFE4BC",
                "gitpod-kumquat": "#FFB45B",
            },
            container: {
                center: true,
            },
            outline: {
                blue: "1px solid #000033",
            },
            width: {
                112: "28rem",
                128: "32rem",
            },
            maxWidth: {
                // TODO(andreafalzetti): remove custom ide-modal class once we implement https://github.com/gitpod-io/gitpod/issues/13116
                51.5: "51.5rem",
            },
            lineHeight: {
                64: "64px",
            },
        },
        fontFamily: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
            mono: [
                "JetBrains Mono",
                "SF Mono",
                "Monaco",
                "Inconsolata",
                "Fira Mono",
                "Droid Sans Mono",
                "Source Code Pro",
                "monospace",
            ],
        },
        underlineThickness: {
            thin: "2px",
            thick: "5px",
        },
        underlineOffset: {
            small: "2px",
            medium: "5px",
        },
        filter: {
            // defaults to {}
            // https://github.com/benface/tailwindcss-filters#usage
            none: "none",
            grayscale: "grayscale(1)",
            invert: "invert(1)",
            "brightness-10": "brightness(10)",
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
            display: ["dark"],
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("tailwind-underline-utils"),
        require("tailwindcss-filters"),
        // ...
    ],
};
