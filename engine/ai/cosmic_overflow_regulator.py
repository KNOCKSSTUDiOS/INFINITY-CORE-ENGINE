# INFINITY‑CORE‑ENGINE — COSMIC OVERFLOW REGULATOR
# Prevents catastrophic overflow when cosmic‑tier subsystems exceed safe output.

class CosmicOverflowRegulator:
    def __init__(self, overflow_limit=7500.0):
        self.overflow_limit = overflow_limit
        self.current_level = 0.0
        self.log = []

    def accumulate(self, amount: float):
        self.current_level = min(self.overflow_limit, self.current_level + amount)
        entry = {
            "action": "ACCUMULATE",
            "level": self.current_level,
            "limit": self.overflow_limit
        }
        self.log.append(entry)
        return entry

    def vent(self, amount: float):
        self.current_level = max(0.0, self.current_level - amount)
        entry = {
            "action": "VENT",
            "level": self.current_level
        }
        self.log.append(entry)
        return entry

    def overflow_check(self):
        overflow = self.current_level >= self.overflow_limit
        entry = {
            "action": "OVERFLOW_CHECK",
            "level": self.current_level,
            "limit": self.overflow_limit,
            "overflow": overflow
        }
        self.log.append(entry)
        return entry

    def status(self):
        return {
            "level": self.current_level,
            "limit": self.overflow_limit
        }

    def history(self):
        return self.log
