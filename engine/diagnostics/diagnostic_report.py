# INFINITY‑CORE‑ENGINE — DIAGNOSTIC REPORT
# Generates engine health, energy balance, glyph status, and mode readouts.

class DiagnosticReport:
    def __init__(self, core, energy, glyphs):
        self.core = core
        self.energy = energy
        self.glyphs = glyphs

    def generate(self):
        return {
            "engine_mode": self.core.mode.value if hasattr(self.core, "mode") else None,
            "pulse_count": self.core.pulse if hasattr(self.core, "pulse") else None,
            "energy_state": self.energy.get_state(),
            "glyph_state": self.glyphs.get_state(),
            "health": self._calculate_health()
        }

    def _calculate_health(self):
        energy = self.energy.get_state()
        score = (
            energy["fluxline"] +
            energy["astral_pulse"] +
            energy["emberstone"]
        ) / 3

        if score > 75:
            return "OPTIMAL"
        if score > 40:
            return "STABLE"
        if score > 10:
            return "LOW"
        return "CRITICAL"
