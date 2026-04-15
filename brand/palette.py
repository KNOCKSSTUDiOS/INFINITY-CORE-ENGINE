# INFINITY‑CORE‑ENGINE — COLOR PALETTE
# Defines the official engine color system.

class Palette:
    def __init__(self):
        self.colors = {
            "OBSIDIAN_CORE_BLACK": "#000000",
            "SENTINEL_STEEL_GREY": "#3A3A3A",
            "VOIDGLASS_DARK": "#0A0A0A",
            "FLUXLINE_BLUE": "#0A84FF",
            "ASTRAL_PULSE_VIOLET": "#A020F0",
            "EMBERSTONE_ORANGE": "#FF6A00"
        }

    def get(self, color_name: str):
        return self.colors.get(color_name, None)

    def list(self):
        return list(self.colors.keys())

    def add(self, color_name: str, hex_value: str):
        self.colors[color_name] = hex_value
