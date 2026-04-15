# INFINITY‑CORE‑ENGINE — COSMIC ENTROPY BALANCER
# Maintains equilibrium between ordered and chaotic energy states.

class CosmicEntropyBalancer:
    def __init__(self):
        self.order_level = 0.0
        self.chaos_level = 0.0
        self.log = []

    def inject_order(self, amount: float):
        self.order_level += amount
        entry = {
            "action": "INJECT_ORDER",
            "order": self.order_level,
            "chaos": self.chaos_level
        }
        self.log.append(entry)
        return entry

    def inject_chaos(self, amount: float):
        self.chaos_level += amount
        entry = {
            "action": "INJECT_CHAOS",
            "order": self.order_level,
            "chaos": self.chaos_level
        }
        self.log.append(entry)
        return entry

    def balance(self):
        midpoint = (self.order_level + self.chaos_level) / 2
        self.order_level = midpoint
        self.chaos_level = midpoint
        entry = {
            "action": "BALANCE",
            "order": self.order_level,
            "chaos": self.chaos_level
        }
        self.log.append(entry)
        return entry

    def status(self):
        return {
            "order": self.order_level,
            "chaos": self.chaos_level
        }

    def history(self):
        return self.log
