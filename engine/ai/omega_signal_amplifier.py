# INFINITY‑CORE‑ENGINE — OMEGA SIGNAL AMPLIFIER
# Amplifies omega‑tier signals for maximum clarity and subsystem penetration.

class OmegaSignalAmplifier:
    def __init__(self, max_gain=1000.0):
        self.max_gain = max_gain
        self.gain = 0.0
        self.last_signal = None
        self.log = []

    def boost(self, amount: float):
        self.gain = min(self.max_gain, self.gain + amount)
        entry = {
            "action": "BOOST",
            "gain": self.gain,
            "max_gain": self.max_gain
        }
        self.log.append(entry)
        return entry

    def dampen(self, amount: float):
        self.gain = max(0.0, self.gain - amount)
        entry = {
            "action": "DAMPEN",
            "gain": self.gain
        }
        self.log.append(entry)
        return entry

    def transmit(self, signal):
        amplified = {
            "signal": signal,
            "gain": self.gain,
            "amplified_output": signal * self.gain if isinstance(signal, (int, float)) else signal
        }
        self.last_signal = amplified
        entry = {
            "action": "TRANSMIT",
            "data": amplified
        }
        self.log.append(entry)
        return entry

    def status(self):
        return {
            "gain": self.gain,
            "max_gain": self.max_gain,
            "last_signal": self.last_signal
        }

    def history(self):
        return self.log
