# INFINITY‑CORE‑ENGINE — NARRATIVE ENGINE
# Generates dynamic narrative beats, adaptive story arcs, and reactive lore.

class NarrativeEngine:
    def __init__(self):
        self.arcs = {}
        self.active_arc = None
        self.history = []

    def define_arc(self, name: str, generator):
        self.arcs[name] = generator

    def start_arc(self, name: str, context=None):
        if name in self.arcs:
            self.active_arc = name
            beat = self.arcs[name](context)
            self.history.append({"arc": name, "beat": beat})
            return beat
        return None

    def continue_arc(self, context=None):
        if not self.active_arc:
            return None
        beat = self.arcs[self.active_arc](context)
        self.history.append({"arc": self.active_arc, "beat": beat})
        return beat

    def end_arc(self):
        self.active_arc = None

    def get_history(self):
        return self.history
