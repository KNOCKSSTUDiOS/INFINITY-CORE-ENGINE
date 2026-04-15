# INFINITY‑CORE‑ENGINE — OMEGA BARRIER CONTROLLER
# Generates defensive energy barriers to protect subsystems under stress.

class OmegaBarrierController:
    def __init__(self, max_strength=100):
        self.max_strength = max_strength
        self.current_strength = 0
        self.log = []

    def charge(self, amount: float):
        self.current_strength = min(self.max_strength, self.current_strength + amount)
        entry = {
            "action": "CHARGE",
            "strength": self.current_strength
        }
        self.log.append(entry)
        return entry

    def release(self):
        entry = {
            "action": "RELEASE",
            "strength": self.current_strength
        }
        self.current_strength = 0
        self.log.append(entry)
        return entry

    def status(self):
        return {
            "current_strength": self.current_strength,
            "max_strength": self.max_strength
        }

    def history(self):
        return self.log
