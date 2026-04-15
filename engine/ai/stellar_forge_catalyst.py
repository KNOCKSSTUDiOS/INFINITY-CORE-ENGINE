# INFINITY‑CORE‑ENGINE — STELLAR FORGE CATALYST
# Catalyzes stellar‑grade reactions to forge high‑density energy constructs.

class StellarForgeCatalyst:
    def __init__(self, forge_temp=5_000_000.0):
        self.forge_temp = forge_temp
        self.heat = 0.0
        self.constructs = []
        self.log = []

    def heat_up(self, amount: float):
        self.heat = min(self.forge_temp, self.heat + amount)
        entry = {
            "action": "HEAT_UP",
            "heat": self.heat,
            "forge_temp": self.forge_temp
        }
        self.log.append(entry)
        return entry

    def cool_down(self, amount: float):
        self.heat = max(0.0, self.heat - amount)
        entry = {
            "action": "COOL_DOWN",
            "heat": self.heat
        }
        self.log.append(entry)
        return entry

    def forge(self, name: str, density: float):
        if self.heat < self.forge_temp * 0.75:
            return None
        construct = {
            "name": name,
            "density": density,
            "heat_used": self.heat
        }
        self.constructs.append(construct)
        entry = {
            "action": "FORGE",
            "construct": construct
        }
        self.log.append(entry)
        return entry

    def status(self):
        return {
            "heat": self.heat,
            "forge_temp": self.forge_temp,
            "constructs": self.constructs
        }

    def history(self):
        return self.log
