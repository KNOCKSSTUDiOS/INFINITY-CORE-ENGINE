# INFINITY‑CORE‑ENGINE — ASTRAL PHASE SEQUENCER
# Sequences multi‑phase astral states for synchronized subsystem alignment.

class AstralPhaseSequencer:
    def __init__(self):
        self.phases = []
        self.current_phase = None
        self.log = []

    def add_phase(self, name: str, frequency: float):
        phase = {
            "name": name,
            "frequency": frequency
        }
        self.phases.append(phase)
        return phase

    def activate(self, name: str):
        for phase in self.phases:
            if phase["name"] == name:
                self.current_phase = phase
                entry = {
                    "action": "ACTIVATE",
                    "phase": phase
                }
                self.log.append(entry)
                return entry
        return None

    def sequence(self):
        if not self.phases:
            return None
        for phase in self.phases:
            self.current_phase = phase
            entry = {
                "action": "SEQUENCE_STEP",
                "phase": phase
            }
            self.log.append(entry)
        return self.log[-1] if self.log else None

    def status(self):
        return self.current_phase

    def history(self):
        return self.log
