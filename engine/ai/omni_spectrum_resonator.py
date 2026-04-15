# INFINITY‑CORE‑ENGINE — OMNI SPECTRUM RESONATOR
# Resonates across the full cosmic spectrum to unify multi‑band energy signals.

class OmniSpectrumResonator:
    def __init__(self):
        self.bands = {}
        self.active_resonance = None
        self.log = []

    def register_band(self, name: str, wavelength: float):
        self.bands[name] = wavelength
        entry = {
            "action": "REGISTER_BAND",
            "name": name,
            "wavelength": wavelength
        }
        self.log.append(entry)
        return entry

    def resonate(self, band_names: list):
        selected = {b: self.bands[b] for b in band_names if b in self.bands}
        if not selected:
            return None
        combined = sum(selected.values()) / len(selected)
        self.active_resonance = {
            "bands": selected,
            "combined_wavelength": combined
        }
        entry = {
            "action": "RESONATE",
            "data": self.active_resonance
        }
        self.log.append(entry)
        return entry

    def status(self):
        return self.active_resonance

    def history(self):
        return self.log
