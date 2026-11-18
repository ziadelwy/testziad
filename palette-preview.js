const paletteToggle = document.querySelector(".palette-preview__toggle");
const palettePanel = document.querySelector("#palette-preview-panel");
const paletteChoices = [...document.querySelectorAll(".palette-preview__choice")];
const paletteModes = [...document.querySelectorAll(".palette-preview__mode")];
const paletteStatus = document.querySelector("#palette-preview-status");
const paletteTitle = document.querySelector("#palette-preview-title");
const root = document.documentElement;

function makePalette(name, mode, colors) {
	const [bg, surface, surface2, deep, accent, cream, text, muted, bgRgb, creamRgb, accentRgb, deepRgb, accentInk] = colors;
	const isDark = mode === "dark";
	return {
		name,
		mode,
		values: {
			"--borhan-green": deep,
			"--borhan-mint": accent,
			"--borhan-cream": cream,
			"--borhan-taupe": muted,
			"--borhan-charcoal": text,
			"--borhan-white": surface,
			"--c-bg": bg,
			"--c-surface": surface,
			"--c-surface-2": surface2,
			"--c-ink": isDark ? cream : deep,
			"--c-text": text,
			"--c-muted": muted,
			"--c-line": `rgba(${deepRgb}, .12)`,
			"--c-line-strong": `rgba(${deepRgb}, .22)`,
			"--c-accent": accent,
			"--c-accent-soft": `rgba(${accentRgb}, .13)`,
			"--c-on-dark": cream,
			"--c-on-dark-muted": isDark ? text : "#D2D8D4",
			"--c-dark-line": `rgba(${creamRgb}, .18)`,
			"--c-focus": accent,
			"--theme-bg-rgb": bgRgb,
			"--theme-cream-rgb": creamRgb,
			"--theme-grid-rgb": isDark ? creamRgb : deepRgb,
			"--theme-accent-rgb": accentRgb,
			"--theme-deep-rgb": deepRgb,
			"--theme-accent-ink": accentInk
		}
	};
}

const palettes = {
	original: {
		name: "الأخضر الأصلي",
		mode: "dark",
		values: {
			"--borhan-green": "#182B27",
			"--borhan-mint": "#9EDAD0",
			"--borhan-cream": "#F0ECE3",
			"--c-bg": "#0D1815",
			"--c-surface": "#14231F",
			"--c-surface-2": "#1A2D28",
			"--c-ink": "#F0ECE3",
			"--c-text": "#CBD4D0",
			"--c-muted": "#9DACA7",
			"--c-line": "rgba(240, 236, 227, .09)",
			"--c-line-strong": "rgba(240, 236, 227, .2)",
			"--c-accent-soft": "rgba(158, 218, 208, .12)",
			"--c-on-dark": "#F0ECE3",
			"--c-on-dark-muted": "#B9C4C0",
			"--c-dark-line": "rgba(240, 236, 227, .14)",
			"--c-focus": "#9EDAD0",
			"--theme-bg-rgb": "13, 24, 21",
			"--theme-cream-rgb": "240, 236, 227",
			"--theme-accent-rgb": "158, 218, 208",
			"--theme-deep-rgb": "24, 43, 39",
			"--theme-accent-ink": "#0D1815"
		}
	},
	"forest-sage": makePalette("غابة ومريمي", "dark", ["#0E1714", "#14201B", "#1B2B23", "#16352C", "#A9C6AC", "#EFEDE3", "#D2D9D3", "#9FAC9F", "14, 23, 20", "239, 237, 227", "169, 198, 172", "22, 53, 44", "#16352C"]),
	"midnight-slate": makePalette("ليلي وأردوازي", "dark", ["#111820", "#19232D", "#232F3B", "#1A2C38", "#ABC0D0", "#EEF1F2", "#D0D9DE", "#A0ADB4", "17, 24, 32", "238, 241, 242", "171, 192, 208", "26, 44, 56", "#1A2C38"]),
	"graphite-silver": makePalette("جرافيت وفضي", "dark", ["#151719", "#1E2224", "#292E30", "#202526", "#B7C0C2", "#F0F0ED", "#D5D8D8", "#A7AFB0", "21, 23, 25", "240, 240, 237", "183, 192, 194", "32, 37, 38", "#202526"]),
	"olive-stone": makePalette("زيتوني وحجري", "dark", ["#171A13", "#202419", "#2D3321", "#252D1B", "#C5C59D", "#F1EEE4", "#D6D6C8", "#AAAD96", "23, 26, 19", "241, 238, 228", "197, 197, 157", "37, 45, 27", "#252D1B"]),
	"petrol-mist": makePalette("بترولي وضبابي", "dark", ["#101A1C", "#172629", "#20373A", "#183237", "#9EC4C1", "#EEF2ED", "#D0DDDB", "#9FB4B2", "16, 26, 28", "238, 242, 237", "158, 196, 193", "24, 50, 55", "#183237"]),
	"plum-smoke": makePalette("دخاني وموف", "dark", ["#1A171D", "#242027", "#302A35", "#2A2430", "#C0B4C7", "#F1EDF1", "#D9D2DA", "#AAA0AE", "26, 23, 29", "241, 237, 241", "192, 180, 199", "42, 36, 48", "#2A2430"]),
	"oxblood-warm": makePalette("عنابي دافئ", "dark", ["#1C1517", "#291D20", "#39272B", "#342126", "#D0A7A2", "#F2ECE6", "#DED5D1", "#B4A6A1", "28, 21, 23", "242, 236, 230", "208, 167, 162", "52, 33, 38", "#342126"]),
	"brown-sand": makePalette("بني ورملي", "dark", ["#201A14", "#2B231A", "#3A3025", "#38291C", "#D1B28A", "#F3EBDD", "#DDD4C8", "#B1A28D", "32, 26, 20", "243, 235, 221", "209, 178, 138", "56, 41, 28", "#38291C"]),
	"slate-sky": makePalette("أردوازي وسماوي", "dark", ["#171B23", "#202631", "#2B3542", "#263642", "#A9C2CE", "#EEF1F3", "#D2DADF", "#A3AEB6", "23, 27, 35", "238, 241, 243", "169, 194, 206", "38, 54, 66", "#263642"]),
	ivory: makePalette("عاجي وأخضر", "light", ["#F5F5EF", "#FFFFFF", "#E7EEE8", "#153B35", "#2F796A", "#E8EEE7", "#33443E", "#68746E", "245, 245, 239", "232, 238, 231", "47, 121, 106", "21, 59, 53", "#FFFFFF"]),
	"porcelain-navy": makePalette("خزفي وكحلي", "light", ["#F3F5F7", "#FFFFFF", "#E6EBF0", "#243746", "#506E82", "#E8EDF0", "#394951", "#707E84", "243, 245, 247", "232, 237, 240", "80, 110, 130", "36, 55, 70", "#FFFFFF"]),
	"warm-sand": makePalette("رملي وزيتوني", "light", ["#F7F4EC", "#FFFDF8", "#E8E4D9", "#3B4639", "#607850", "#EBE7DC", "#424B41", "#737C6F", "247, 244, 236", "235, 231, 220", "96, 120, 80", "59, 70, 57", "#FFFFFF"]),
	"cloud-teal": makePalette("سحابي وبترولي", "light", ["#F1F6F6", "#FCFEFE", "#DFEAEA", "#284548", "#527C80", "#E5EEEE", "#37494A", "#6D7F80", "241, 246, 246", "229, 238, 238", "82, 124, 128", "40, 69, 72", "#FFFFFF"]),
	"stone-copper": makePalette("حجري ونحاسي هادئ", "light", ["#F5F2ED", "#FFFEFC", "#EAE4DC", "#4A3B31", "#936F55", "#EAE2D7", "#51443A", "#80766D", "245, 242, 237", "234, 226, 215", "147, 111, 85", "74, 59, 49", "#FFFFFF"]),
	"pearl-sage": makePalette("لؤلؤي ومريمي", "light", ["#F2F5F1", "#FDFFFC", "#E2E9E1", "#30453A", "#5F7D6C", "#E6ECE4", "#3E5045", "#738075", "242, 245, 241", "230, 236, 228", "95, 125, 108", "48, 69, 58", "#FFFFFF"]),
	"mist-blue": makePalette("ضبابي وأزرق", "light", ["#F1F4F7", "#FFFFFF", "#E1E7EC", "#2D3E4F", "#607B93", "#E8EDF1", "#3D4B59", "#74818C", "241, 244, 247", "232, 237, 241", "96, 123, 147", "45, 62, 79", "#FFFFFF"]),
	"rose-grey": makePalette("وردي ورمادي هادئ", "light", ["#F7F2F2", "#FFFDFD", "#ECE3E4", "#493538", "#8D676C", "#EFE5E5", "#514347", "#807276", "247, 242, 242", "239, 229, 229", "141, 103, 108", "73, 53, 56", "#FFFFFF"]),
	"lavender-stone": makePalette("لافندر وحجر", "light", ["#F4F2F7", "#FEFDFF", "#E9E6EE", "#3D394C", "#77718A", "#ECE9F1", "#494656", "#777484", "244, 242, 247", "236, 233, 241", "119, 113, 138", "61, 57, 76", "#FFFFFF"]),
	"graphite-mint": makePalette("جرافيت ونعناعي", "light", ["#F1F3F2", "#FFFFFF", "#E2E7E4", "#35413F", "#5B786E", "#E6EBE8", "#3F4A47", "#737E7A", "241, 243, 242", "230, 235, 232", "91, 120, 110", "53, 65, 63", "#FFFFFF"])
};

const selectedByMode = { dark: "original", light: "ivory" };
let activeMode = "dark";

function selectPalette(id) {
	const palette = palettes[id];
	if (!palette) return;

	Object.entries(palette.values).forEach(([property, value]) => {
		root.style.setProperty(property, value);
	});
	root.style.setProperty("--c-accent", palette.values["--c-accent"] || palette.values["--borhan-mint"]);
	root.style.setProperty("--borhan-taupe", palette.values["--borhan-taupe"] || "#A6A19B");
	root.style.setProperty("--borhan-charcoal", palette.values["--borhan-charcoal"] || "#4F4F51");
	root.style.setProperty("--borhan-white", palette.values["--borhan-white"] || "#FFFFFF");
	root.style.colorScheme = palette.mode;
	root.dataset.paletteMode = palette.mode;
	selectedByMode[palette.mode] = id;

	const themeColor = document.querySelector('meta[name="theme-color"]');
	if (themeColor) themeColor.content = palette.values["--c-bg"];
	paletteChoices.forEach((choice) => {
		choice.setAttribute("aria-pressed", String(choice.dataset.palette === id));
	});
	paletteStatus.textContent = `تم اختيار ألوان ${palette.name}`;
}

function setMode(mode) {
	if (mode !== "dark" && mode !== "light") return;
	activeMode = mode;
	paletteModes.forEach((button) => {
		button.setAttribute("aria-pressed", String(button.dataset.mode === mode));
	});
	paletteChoices.forEach((choice) => {
		choice.hidden = choice.dataset.mode !== mode;
	});
	paletteTitle.textContent = mode === "light"
		? "اختر لوحة فاتحة بنفس طابع برهان"
		: "جرّب لونًا داكنًا مع نفس طابع برهان";
	selectPalette(selectedByMode[mode]);
}

Object.entries(palettes).forEach(([id, palette]) => {
	const choice = paletteChoices.find((button) => button.dataset.palette === id);
	choice.style.setProperty("--swatch-accent", palette.values["--borhan-mint"]);
	choice.style.setProperty("--swatch-bg", palette.values["--c-bg"]);
	choice.style.setProperty("--swatch-surface", palette.values["--c-surface-2"]);
});

paletteModes.forEach((button) => {
	button.addEventListener("click", () => setMode(button.dataset.mode));
});

paletteToggle.addEventListener("click", () => {
	const isExpanded = paletteToggle.getAttribute("aria-expanded") === "true";
	paletteToggle.setAttribute("aria-expanded", String(!isExpanded));
	palettePanel.hidden = isExpanded;
});

palettePanel.addEventListener("click", (event) => {
	if (!(event.target instanceof Element)) return;
	const choice = event.target.closest(".palette-preview__choice");
	if (choice) selectPalette(choice.dataset.palette);
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && !palettePanel.hidden) {
		palettePanel.hidden = true;
		paletteToggle.setAttribute("aria-expanded", "false");
		paletteToggle.focus();
	}
});

setMode(activeMode);
