# INFINITY‑CORE‑ENGINE — ENERGY SYSTEM
# Fluxline, Astral Pulse, and Emberstone energy logic.

class EnergySystem:
    def __init__(self):
        self.fluxline = 0.0
        self.astral_pulse = 0.0
        self.emberstone = 0.0

    def set_fluxline(self, value: float):
        self.fluxline = max(0.0, value)

    def set_astral_pulse(self, value: float):
        self.astral_pulse = max(0.0, value)

    def set_emberstone(self, value: float):
        self.emberstone = max(0.0, value)

    def charge(self, flux=0.0, astral=0.0, ember=0.0):
        self.fluxline = max(0.0, self.fluxline + flux)
        self.astral_pulse = max(0.0, self.astral_pulse + astral)
        self.emberstone = max(0.0, self.emberstone + ember)

    def drain(self, flux=0.0, astral=0.0, ember=0.0):
        self.fluxline = max(0.0, self.fluxline - flux)
        self.astral_pulse = max(0.0, self.astral_pulse - astral)
        self.emberstone = max(0.0, self.emberstone - ember)

    def get_state(self):
        return {
            "fluxline": self.fluxline,
            "astral_pulse": self.astral_pulse,
            "emberstone": self.emberstone
        }
