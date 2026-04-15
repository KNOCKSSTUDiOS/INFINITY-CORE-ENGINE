# INFINITY‑CORE‑ENGINE — NEBULA WAVEFORM CONDUCTOR
# Conducts nebula‑tier waveforms to stabilize multi‑frequency cosmic signals.

class NebulaWaveformConductor:
    def __init__(self):
        self.waveforms = {}
        self.active_wave = None
        self.log = []

    def register_waveform(self, name: str, frequency: float):
        self.waveforms[name] = frequency
        entry = {
            "action": "REGISTER_WAVEFORM",
            "name": name,
            "frequency": frequency
        }
        self.log.append(entry)
        return entry

    def harmonize(self, names: list):
        selected = {n: self.waveforms[n] for n in names if n in self.waveforms}
        if not selected:
            return None
        harmonic = sum(selected.values()) / len(selected)
        self.active_wave = {
            "waveforms": selected,
            "harmonic": harmonic
        }
        entry = {
            "action": "HARMONIZE",
            "data": self.active_wave
        }
        self.log.append(entry)
        return entry

    def status(self):
        return self.active_wave

    def history(self):
        return self.log
