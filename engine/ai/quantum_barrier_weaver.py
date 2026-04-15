# INFINITY‑CORE‑ENGINE — QUANTUM BARRIER WEAVER
# Weaves quantum‑tier defensive barriers using entangled energy threads.

class QuantumBarrierWeaver:
    def __init__(self):
        self.barriers = []
        self.active_barrier = None
        self.log = []

    def weave(self, name: str, strength: float, coherence: float):
        barrier = {
            "name": name,
            "strength": strength,
            "coherence": coherence
        }
        self.barriers.append(barrier)
        entry = {
            "action": "WEAVE",
            "barrier": barrier
        }
        self.log.append(entry)
        return entry

    def activate(self, name: str):
        for barrier in self.barriers:
            if barrier["name"] == name:
                self.active_barrier = barrier
                entry = {
                    "action": "ACTIVATE",
                    "barrier": barrier
                }
                self.log.append(entry)
                return entry
        return None

    def collapse(self):
        entry = {
            "action": "COLLAPSE",
            "barrier": self.active_barrier
        }
        self.active_barrier = None
        self.log.append(entry)
        return entry

    def status(self):
        return self.active_barrier

    def history(self):
        return self.log
