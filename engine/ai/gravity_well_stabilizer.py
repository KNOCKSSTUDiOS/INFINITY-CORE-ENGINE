# INFINITY‑CORE‑ENGINE — GRAVITY WELL STABILIZER
# Stabilizes artificial gravity wells used for high‑density energy routing.

class GravityWellStabilizer:
    def __init__(self):
        self.wells = {}
        self.log = []

    def create_well(self, name: str, intensity: float):
        self.wells[name] = intensity
        entry = {
            "action": "CREATE_WELL",
            "name": name,
            "intensity": intensity
        }
        self.log.append(entry)
        return entry

    def adjust(self, name: str, delta: float):
        if name not in self.wells:
            return None
        self.wells[name] += delta
        entry = {
            "action": "ADJUST",
            "name": name,
            "intensity": self.wells[name]
        }
        self.log.append(entry)
        return entry

    def collapse(self, name: str):
        if name not in self.wells:
            return None
        intensity = self.wells.pop(name)
        entry = {
            "action": "COLLAPSE",
            "name": name,
            "final_intensity": intensity
        }
        self.log.append(entry)
        return entry

    def list_wells(self):
        return self.wells

    def history(self):
        return self.log
