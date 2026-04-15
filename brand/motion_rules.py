# INFINITY‑CORE‑ENGINE — MOTION RULES
# Defines the official motion identity of the engine.

class MotionRules:
    def __init__(self):
        self.rules = {
            "MONOLITH_RISE": {
                "easing": "heavy_linear",
                "speed": 0.8,
                "direction": "vertical_up",
                "description": "The monolith ascends with weight and inevitability."
            },
            "COSMIC_FADE": {
                "easing": "slow_dissolve",
                "speed": 1.2,
                "direction": "none",
                "description": "A cosmic fade revealing energy beneath darkness."
            },
            "FLUX_SWEEP": {
                "easing": "sharp_cut",
                "speed": 0.4,
                "direction": "diagonal",
                "description": "A fast fluxline slice through the frame."
            },
            "VOID_COLLAPSE": {
                "easing": "inward_pull",
                "speed": 0.9,
                "direction": "center",
                "description": "The void collapses inward, consuming the frame."
            },
            "EMBER_BURST": {
                "easing": "explosive",
                "speed": 0.6,
                "direction": "radial",
                "description": "A burst of Emberstone energy radiating outward."
            }
        }

    def get(self, name: str):
        return self.rules.get(name, None)

    def list(self):
        return list(self.rules.keys())

    def add(self, name: str, data: dict):
        self.rules[name] = data
