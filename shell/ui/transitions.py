
# INFINITY‑CORE‑ENGINE — TRANSITIONS
# Monolith rise, flux cuts, void collapse, and cosmic transitions.

class Transitions:
    def __init__(self):
        self.transitions = {
            "MONOLITH_RISE": {
                "duration": 1.2,
                "motion": "vertical_lift",
                "energy": "fluxline"
            },
            "FLUX_CUT": {
                "duration": 0.4,
                "motion": "diagonal_slice",
                "energy": "fluxline"
            },
            "VOID_COLLAPSE": {
                "duration": 0.9,
                "motion": "inward_implosion",
                "energy": "astral_pulse"
            },
            "EMBER_BURST": {
                "duration": 0.6,
                "motion": "radial_burst",
                "energy": "emberstone"
            }
        }

    def get(self, name: str):
        return self.transitions.get(name, None)

    def list(self):
        return list(self.transitions.keys())

    def add(self, name: str, data: dict):
        self.transitions[name] = data
