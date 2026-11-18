const paletteToggle = document.querySelector(".palette-preview__toggle");
const palettePanel = document.querySelector("#palette-preview-panel");
const paletteChoices = [...document.querySelectorAll(".palette-preview__choice")];
const paletteModes = [...document.querySelectorAll(".palette-preview__mode")];
const paletteStatus = document.querySelector("#palette-preview-status");
const paletteTitle = document.querySelector("#palette-preview-title");
const root = document.documentElement;

function makeLightPalette(name, colors) {
	const [bg, surface, surface2, deep, accent, cream, text, muted, bgRgb, creamRgb, accentRgb, deepRgb] = colors;
	return {
		name,
		mode: "light",
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
			"--c-ink": deep,
			"--c-text": text,
			"--c-muted": muted,
			"--c-line": `rgba(${deepRgb}, .12)`,
			"--c-line-strong": `rgba(${deepRgb}, .22)`,
			"--c-accent": accent,
			"--c-accent-soft": `rgba(${accentRgb}, .13)`,
			"--c-on-dark": cream,
			"--c-on-dark-muted": "#D2D8D4",
			"--c-dark-line": `rgba(${creamRgb}, .18)`,
			"--c-focus": accent,
			"--theme-bg-rgb": bgRgb,
			"--theme-cream-rgb": creamRgb,
			"--theme-grid-rgb": deepRgb,
			"--theme-accent-rgb": accentRgb,
			"--theme-deep-rgb": deepRgb,
			"--theme-accent-ink": "#FFFFFF"
		}
	};
}

const palettes = {
	original: {
		name: "الأخضر الأصلي",
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
	"navy-gold": {
		name: "كحلي وذهبي",
		values: {
			"--borhan-green": "#182434",
			"--borhan-mint": "#D5B877",
			"--borhan-cream": "#F2EBDD",
			"--c-bg": "#101822",
			"--c-surface": "#172333",
			"--c-surface-2": "#223142",
			"--c-ink": "#F2EBDD",
			"--c-text": "#D6DCE1",
			"--c-muted": "#A7B1BA",
			"--c-line": "rgba(242, 235, 221, .1)",
			"--c-line-strong": "rgba(242, 235, 221, .22)",
			"--c-accent-soft": "rgba(213, 184, 119, .14)",
			"--c-on-dark": "#F2EBDD",
			"--c-on-dark-muted": "#C2C5C5",
			"--c-dark-line": "rgba(242, 235, 221, .14)",
			"--c-focus": "#D5B877",
			"--theme-bg-rgb": "16, 24, 34",
			"--theme-cream-rgb": "242, 235, 221",
			"--theme-accent-rgb": "213, 184, 119",
			"--theme-deep-rgb": "24, 36, 52",
			"--theme-accent-ink": "#101822"
		}
	},
	copper: {
		name: "فحمي ونحاسي",
		values: {
			"--borhan-green": "#211A16",
			"--borhan-mint": "#D69A73",
			"--borhan-cream": "#F2E9DF",
			"--c-bg": "#171412",
			"--c-surface": "#211C18",
			"--c-surface-2": "#2D241F",
			"--c-ink": "#F2E9DF",
			"--c-text": "#D9CFC5",
			"--c-muted": "#AA9F95",
			"--c-line": "rgba(242, 233, 223, .1)",
			"--c-line-strong": "rgba(242, 233, 223, .22)",
			"--c-accent-soft": "rgba(214, 154, 115, .14)",
			"--c-on-dark": "#F2E9DF",
			"--c-on-dark-muted": "#C5B9AE",
			"--c-dark-line": "rgba(242, 233, 223, .14)",
			"--c-focus": "#D69A73",
			"--theme-bg-rgb": "23, 20, 18",
			"--theme-cream-rgb": "242, 233, 223",
			"--theme-accent-rgb": "214, 154, 115",
			"--theme-deep-rgb": "33, 26, 22",
			"--theme-accent-ink": "#171412"
		}
	},
	emerald: {
		name: "زمردي وكريمي",
		values: {
			"--borhan-green": "#122923",
			"--borhan-mint": "#83C8AF",
			"--borhan-cream": "#F1EEE3",
			"--c-bg": "#0C1C1A",
			"--c-surface": "#142824",
			"--c-surface-2": "#1D3933",
			"--c-ink": "#F1EEE3",
			"--c-text": "#CCDDD5",
			"--c-muted": "#9EB9AE",
			"--c-line": "rgba(241, 238, 227, .1)",
			"--c-line-strong": "rgba(241, 238, 227, .22)",
			"--c-accent-soft": "rgba(131, 200, 175, .14)",
			"--c-on-dark": "#F1EEE3",
			"--c-on-dark-muted": "#B9CEC4",
			"--c-dark-line": "rgba(241, 238, 227, .14)",
			"--c-focus": "#83C8AF",
			"--theme-bg-rgb": "12, 28, 26",
			"--theme-cream-rgb": "241, 238, 227",
			"--theme-accent-rgb": "131, 200, 175",
			"--theme-deep-rgb": "18, 41, 35",
			"--theme-accent-ink": "#0C1C1A"
		}
	},
	burgundy: {
		name: "عنابي ووردي",
		values: {
			"--borhan-green": "#2A151D",
			"--borhan-mint": "#D8A1AD",
			"--borhan-cream": "#F4E8E6",
			"--c-bg": "#211218",
			"--c-surface": "#2C1921",
			"--c-surface-2": "#3D222E",
			"--c-ink": "#F4E8E6",
			"--c-text": "#E0D3D7",
			"--c-muted": "#BDAAB0",
			"--c-line": "rgba(244, 232, 230, .1)",
			"--c-line-strong": "rgba(244, 232, 230, .22)",
			"--c-accent-soft": "rgba(216, 161, 173, .14)",
			"--c-on-dark": "#F4E8E6",
			"--c-on-dark-muted": "#D0BCC2",
			"--c-dark-line": "rgba(244, 232, 230, .14)",
			"--c-focus": "#D8A1AD",
			"--theme-bg-rgb": "33, 18, 24",
			"--theme-cream-rgb": "244, 232, 230",
			"--theme-accent-rgb": "216, 161, 173",
			"--theme-deep-rgb": "42, 21, 29",
			"--theme-accent-ink": "#211218"
		}
	},
	"royal-blue": {
		name: "أزرق ملكي",
		values: {
			"--borhan-green": "#18203B",
			"--borhan-mint": "#9BB6EC",
			"--borhan-cream": "#EEF1F7",
			"--c-bg": "#11172A",
			"--c-surface": "#19223A",
			"--c-surface-2": "#222F4F",
			"--c-ink": "#EEF1F7",
			"--c-text": "#D4DBEB",
			"--c-muted": "#A5B0CC",
			"--c-line": "rgba(238, 241, 247, .1)",
			"--c-line-strong": "rgba(238, 241, 247, .22)",
			"--c-accent-soft": "rgba(155, 182, 236, .14)",
			"--c-on-dark": "#EEF1F7",
			"--c-on-dark-muted": "#BDC8E0",
			"--c-dark-line": "rgba(238, 241, 247, .14)",
			"--c-focus": "#9BB6EC",
			"--theme-bg-rgb": "17, 23, 42",
			"--theme-cream-rgb": "238, 241, 247",
			"--theme-accent-rgb": "155, 182, 236",
			"--theme-deep-rgb": "24, 32, 59",
			"--theme-accent-ink": "#11172A"
		}
	},
	plum: {
		name: "بنفسجي ليلي",
		values: {
			"--borhan-green": "#261A30",
			"--borhan-mint": "#B8A0D9",
			"--borhan-cream": "#F1EAF8",
			"--c-bg": "#1B1525",
			"--c-surface": "#251D32",
			"--c-surface-2": "#342844",
			"--c-ink": "#F1EAF8",
			"--c-text": "#DED4E9",
			"--c-muted": "#B5A9C2",
			"--c-line": "rgba(241, 234, 248, .1)",
			"--c-line-strong": "rgba(241, 234, 248, .22)",
			"--c-accent-soft": "rgba(184, 160, 217, .14)",
			"--c-on-dark": "#F1EAF8",
			"--c-on-dark-muted": "#C9BED4",
			"--c-dark-line": "rgba(241, 234, 248, .14)",
			"--c-focus": "#B8A0D9",
			"--theme-bg-rgb": "27, 21, 37",
			"--theme-cream-rgb": "241, 234, 248",
			"--theme-accent-rgb": "184, 160, 217",
			"--theme-deep-rgb": "38, 26, 48",
			"--theme-accent-ink": "#1B1525"
		}
	},
	petrol: {
		name: "بترولي ومرجاني",
		values: {
			"--borhan-green": "#142A30",
			"--borhan-mint": "#EEA18D",
			"--borhan-cream": "#F5ECE3",
			"--c-bg": "#0D1D20",
			"--c-surface": "#152B30",
			"--c-surface-2": "#1E3B40",
			"--c-ink": "#F5ECE3",
			"--c-text": "#D3DFDF",
			"--c-muted": "#9FB3B4",
			"--c-line": "rgba(245, 236, 227, .1)",
			"--c-line-strong": "rgba(245, 236, 227, .22)",
			"--c-accent-soft": "rgba(238, 161, 141, .14)",
			"--c-on-dark": "#F5ECE3",
			"--c-on-dark-muted": "#BFCBC9",
			"--c-dark-line": "rgba(245, 236, 227, .14)",
			"--c-focus": "#EEA18D",
			"--theme-bg-rgb": "13, 29, 32",
			"--theme-cream-rgb": "245, 236, 227",
			"--theme-accent-rgb": "238, 161, 141",
			"--theme-deep-rgb": "20, 42, 48",
			"--theme-accent-ink": "#0D1D20"
		}
	},
	slate: {
		name: "رمادي ونعناعي",
		values: {
			"--borhan-green": "#202728",
			"--borhan-mint": "#A9C9BD",
			"--borhan-cream": "#F0F0E9",
			"--c-bg": "#181C1D",
			"--c-surface": "#222829",
			"--c-surface-2": "#2C3434",
			"--c-ink": "#F0F0E9",
			"--c-text": "#D4D9D7",
			"--c-muted": "#A7B0AD",
			"--c-line": "rgba(240, 240, 233, .1)",
			"--c-line-strong": "rgba(240, 240, 233, .22)",
			"--c-accent-soft": "rgba(169, 201, 189, .14)",
			"--c-on-dark": "#F0F0E9",
			"--c-on-dark-muted": "#BEC7C3",
			"--c-dark-line": "rgba(240, 240, 233, .14)",
			"--c-focus": "#A9C9BD",
			"--theme-bg-rgb": "24, 28, 29",
			"--theme-cream-rgb": "240, 240, 233",
			"--theme-accent-rgb": "169, 201, 189",
			"--theme-deep-rgb": "32, 39, 40",
			"--theme-accent-ink": "#181C1D"
		}
	},
	bronze: {
		name: "بني وذهبي مطفي",
		values: {
			"--borhan-green": "#2A2116",
			"--borhan-mint": "#D5B66F",
			"--borhan-cream": "#F2E7D2",
			"--c-bg": "#1F1A13",
			"--c-surface": "#2B241A",
			"--c-surface-2": "#3A3021",
			"--c-ink": "#F2E7D2",
			"--c-text": "#DDD4C3",
			"--c-muted": "#B4A88F",
			"--c-line": "rgba(242, 231, 210, .1)",
			"--c-line-strong": "rgba(242, 231, 210, .22)",
			"--c-accent-soft": "rgba(213, 182, 111, .14)",
			"--c-on-dark": "#F2E7D2",
			"--c-on-dark-muted": "#C9BDA6",
			"--c-dark-line": "rgba(242, 231, 210, .14)",
			"--c-focus": "#D5B66F",
			"--theme-bg-rgb": "31, 26, 19",
			"--theme-cream-rgb": "242, 231, 210",
			"--theme-accent-rgb": "213, 182, 111",
			"--theme-deep-rgb": "42, 33, 22",
			"--theme-accent-ink": "#1F1A13"
		}
	}
};

Object.assign(palettes, {
	ivory: makeLightPalette("عاجي وأخضر", ["#F5F5EF", "#FFFFFF", "#E7EEE8", "#153B35", "#2F796A", "#E8EEE7", "#33443E", "#68746E", "245, 245, 239", "232, 238, 231", "47, 121, 106", "21, 59, 53"]),
	porcelain: makeLightPalette("خزفي وكحلي", ["#F2F5FA", "#FFFFFF", "#E4EAF3", "#1A2E48", "#466C9E", "#E4EAF3", "#374458", "#68758A", "242, 245, 250", "228, 234, 243", "70, 108, 158", "26, 46, 72"]),
	sand: makeLightPalette("رملي ونحاسي", ["#FBF5EC", "#FFFDFA", "#F2E6D8", "#40281D", "#A95F3E", "#F3E6D7", "#4D3B31", "#817064", "251, 245, 236", "243, 230, 215", "169, 95, 62", "64, 40, 29"]),
	sage: makeLightPalette("مريمي وغابي", ["#F1F6EF", "#FCFEFB", "#E2EBDD", "#243B2B", "#4B7755", "#E0EBDD", "#3E5041", "#68796C", "241, 246, 239", "224, 235, 221", "75, 119, 85", "36, 59, 43"]),
	blush: makeLightPalette("وردي وعنابي", ["#FBF1F4", "#FFFCFD", "#F2E2E7", "#482735", "#9A526B", "#F3E1E7", "#4D3942", "#806F76", "251, 241, 244", "243, 225, 231", "154, 82, 107", "72, 39, 53"]),
	ice: makeLightPalette("جليدي وأزرق", ["#EFF6FA", "#FCFEFF", "#DCEBF2", "#203D4C", "#36789A", "#DDEBF2", "#344A56", "#687C85", "239, 246, 250", "221, 235, 242", "54, 120, 154", "32, 61, 76"]),
	lavender: makeLightPalette("لافندر وبنفسجي", ["#F5F1FA", "#FDFBFF", "#E9E1F2", "#3B2C4E", "#73549A", "#EAE2F2", "#493B59", "#786B87", "245, 241, 250", "234, 226, 242", "115, 84, 154", "59, 44, 78"]),
	mint: makeLightPalette("نعناعي وبترولي", ["#EDF7F5", "#FBFEFD", "#DCEEEA", "#1C3C37", "#26796D", "#DCEEEA", "#334E49", "#687F79", "237, 247, 245", "220, 238, 234", "38, 121, 109", "28, 60, 55"]),
	"cream-gold": makeLightPalette("كريمي وذهبي", ["#FAF7ED", "#FFFEFA", "#F0E7CE", "#3D331F", "#947129", "#F0E7CE", "#4F4734", "#82785E", "250, 247, 237", "240, 231, 206", "148, 113, 41", "61, 51, 31"]),
	pearl: makeLightPalette("لؤلؤي وفحمي", ["#F4F5F5", "#FFFFFF", "#E5E8E8", "#28383C", "#435B60", "#E5E8E8", "#3C4B4E", "#6D797B", "244, 245, 245", "229, 232, 232", "67, 91, 96", "40, 56, 60"])
});

const selectedByMode = { dark: "original", light: "ivory" };
let activeMode = "dark";

function selectPalette(id) {
	const palette = palettes[id];
	if (!palette) return;
	const mode = palette.mode || "dark";

	Object.entries(palette.values).forEach(([property, value]) => {
		root.style.setProperty(property, value);
	});
	root.style.setProperty("--c-accent", palette.values["--c-accent"] || palette.values["--borhan-mint"]);
	root.style.setProperty("--borhan-taupe", palette.values["--borhan-taupe"] || "#A6A19B");
	root.style.setProperty("--borhan-charcoal", palette.values["--borhan-charcoal"] || "#4F4F51");
	root.style.setProperty("--borhan-white", palette.values["--borhan-white"] || "#FFFFFF");
	root.style.colorScheme = mode;
	root.dataset.paletteMode = mode;
	if (palette.values["--theme-grid-rgb"]) {
		root.style.setProperty("--theme-grid-rgb", palette.values["--theme-grid-rgb"]);
	} else {
		root.style.setProperty("--theme-grid-rgb", palette.values["--theme-cream-rgb"]);
	}
	selectedByMode[mode] = id;

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
