# INFINITY‑CORE‑ENGINE — OMEGA FIELD DISTORTION UNIT
# Distorts omega‑tier fields to bend, redirect, or nullify incoming energy.

class OmegaFieldDistortionUnit:
    def __init__(self, distortion_cap=5000.0):
        self.distortion_cap = distortion_cap
        self.current_distortion = 0.0
        self.log = []

    def distort(self, amount: float):
        self.current_distortion = min(self.distortion_cap, self.current_distortion + amount)
        entry = {
            "action": "DISTORT",
            "distortion": self.current_distortion,
            "cap": self.distortion_cap
        }
        self.log.append(entry)
        return entry

    def neutralize(self, amount: float):
        self.current_distortion = max(0.0, self.current_distortion - amount)
        entry = {
            "action": "NEUTRALIZE",
            "distortion": self.current_distortion
        }
        self.log.append(entry)
        return entry

    def rupture_check(self):
        ruptured = self.current_distortion >= self.distortion_cap
        entry = {
            "action": "RUPTURE_CHECK",
            "distortion": self.current_distortion,
            "cap": self.distortion_cap,
            "ruptured": ruptured
        }
        self.log.append(entry)
        return entry

    def status(self):
        return {
            "distortion": self.current_distortion,
            "cap": self.distortion_cap
        }

    def history(self):
        return self.log
