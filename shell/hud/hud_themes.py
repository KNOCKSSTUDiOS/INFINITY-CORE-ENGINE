# INFINITY‑CORE‑ENGINE — HUD THEMES
# Obsidian, Voidglass, Sentinel Steel theme definitions.

class HUDThemes:
    def __init__(self):
        self.themes = {
            "OBSIDIAN_CORE": {
                "background": "#000000",
                "accent": "#1A1A1A",
                "glow": "#0A84FF",
                "material": "Obsidian Core™"
            },
            "VOIDGLASS": {
                "background": "#0A0A0A",
                "accent": "#222222",
                "glow": "#A020F0",
                "material": "Voidglass™"
            },
            "SENTINEL_STEEL": {
                "background": "#1C1C1C",
                "accent": "#3A3A3A",
                "glow": "#FF6A00",
                "material": "Sentinel Steel™"
            }
        }

    def get_theme(self, name: str):
        return self.themes.get(name, None)

    def list_themes(self):
        return list(self.themes.keys())
