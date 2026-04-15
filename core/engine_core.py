# INFINITY‑CORE‑ENGINE — ENGINE CORE
# Heartbeat, modes, and core engine state.

from enum import Enum

class EngineMode(Enum):
    IDLE = "IDLE"
    ACTIVE = "ACTIVE"
    FORGE = "FORGE"
    REGEN = "REGEN"
    GOD_MODE = "GOD_MODE"

class EngineCore:
    def __init__(self):
        self.mode = EngineMode.IDLE
        self.pulse = 0
        self.energy_state = {
            "fluxline": 0.0,
            "astral_pulse": 0.0,
            "emberstone": 0.0
        }

    def heartbeat(self):
        self.pulse += 1
        return {
            "pulse": self.pulse,
            "mode": self.mode.value,
            "energy": self.energy_state
        }

    def set_mode(self, mode: EngineMode):
        self.mode = mode

    def update_energy(self, fluxline=0.0, astral=0.0, ember=0.0):
        self.energy_state["fluxline"] = fluxline
        self.energy_state["astral_pulse"] = astral
        self.energy_state["emberstone"] = ember

    def status(self):
        return {
            "mode": self.mode.value,
            "pulse": self.pulse,
            "energy": self.energy_state
        }
