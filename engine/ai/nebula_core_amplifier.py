# INFINITY‑CORE‑ENGINE — NEBULA CORE AMPLIFIER
# Amplifies subsystem output using nebula‑grade energy compression.

class NebulaCoreAmplifier:
    def __init__(self, capacity=500.0):
        self.capacity = capacity
        self.output = 0.0
        self.log = []

    def amplify(self, amount: float):
        self.output = min(self.capacity, self.output + amount)
        entry = {
            "action": "AMPLIFY",
            "output": self.output,
            "capacity": self.capacity
        }
        self.log.append(entry)
        return entry

    def dissipate(self, amount: float):
        self.output = max(0.0, self.output - amount)
        entry = {
            "action": "DISSIPATE",
            "output": self.output
        }
        self.log.append(entry)
        return entry

    def status(self):
        return {
            "output": self.output,
            "capacity": self.capacity
        }

    def history(self):
        return self.log
