# INFINITY‑CORE‑ENGINE — PREDICTION ENGINE
# Forecasts future engine states, energy levels, and behavioral outcomes.

import time

class PredictionEngine:
    def __init__(self):
        self.history = []

    def record(self, state: dict):
        snapshot = {
            "timestamp": int(time.time()),
            "state": state
        }
        self.history.append(snapshot)
        if len(self.history) > 200:
            self.history.pop(0)

    def predict_energy(self):
        if len(self.history) < 2:
            return None

        last = self.history[-1]["state"]["energy"]
        prev = self.history[-2]["state"]["energy"]

        return {
            "fluxline_next": last["fluxline"] + (last["fluxline"] - prev["fluxline"]),
            "astral_pulse_next": last["astral_pulse"] + (last["astral_pulse"] - prev["astral_pulse"]),
            "emberstone_next": last["emberstone"] + (last["emberstone"] - prev["emberstone"])
        }

    def predict_mode_shift(self):
        if not self.history:
            return "IDLE"

        last_mode = self.history[-1]["state"]["mode"]
        return last_mode
