# INFINITY‑CORE‑ENGINE — GLYPH SYSTEM
# Prime glyph definitions and glyph-state logic.

class GlyphSystem:
    def __init__(self):
        self.glyphs = {
            "INFINITY_PRIME": {
                "symbol": "∞",
                "meaning": "Identity / Infinity",
                "active": False
            },
            "FORGE_TRIANGLE": {
                "symbol": "▲",
                "meaning": "Creation / Forging",
                "active": False
            },
            "PULSE_LINE": {
                "symbol": "│",
                "meaning": "Life / Heartbeat",
                "active": False
            },
            "FLUX_VEIN": {
                "symbol": "≡",
                "meaning": "Energy Flow",
                "active": False
            },
            "CORE_LOCK": {
                "symbol": "⧈",
                "meaning": "Order / Security",
                "active": False
            },
            "ORIGIN_PILLAR": {
                "symbol": "▮",
                "meaning": "Monolith Identity",
                "active": False
            }
        }

    def activate(self, glyph_name: str):
        if glyph_name in self.glyphs:
            self.glyphs[glyph_name]["active"] = True

    def deactivate(self, glyph_name: str):
        if glyph_name in self.glyphs:
            self.glyphs[glyph_name]["active"] = False

    def deactivate_all(self):
        for glyph in self.glyphs.values():
            glyph["active"] = False

    def get_state(self):
        return self.glyphs
