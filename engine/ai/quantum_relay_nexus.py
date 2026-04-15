# INFINITY‑CORE‑ENGINE — QUANTUM RELAY NEXUS
# Links quantum‑tier subsystems through entangled relay channels.

class QuantumRelayNexus:
    def __init__(self):
        self.relays = {}
        self.active_link = None
        self.log = []

    def create_relay(self, name: str, stability: float):
        self.relays[name] = stability
        entry = {
            "action": "CREATE_RELAY",
            "name": name,
            "stability": stability
        }
        self.log.append(entry)
        return entry

    def entangle(self, relay_a: str, relay_b: str):
        if relay_a not in self.relays or relay_b not in self.relays:
            return None
        link = {
            "relay_a": relay_a,
            "relay_b": relay_b,
            "combined_stability": (self.relays[relay_a] + self.relays[relay_b]) / 2
        }
        self.active_link = link
        entry = {
            "action": "ENTANGLE",
            "link": link
        }
        self.log.append(entry)
        return entry

    def collapse(self):
        entry = {
            "action": "COLLAPSE",
            "link": self.active_link
        }
        self.active_link = None
        self.log.append(entry)
        return entry

    def status(self):
        return self.active_link

    def history(self):
        return self.log
