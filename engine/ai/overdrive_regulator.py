# INFINITY‑CORE‑ENGINE — OVERDRIVE REGULATOR
# Prevents subsystem overload and stabilizes high-intensity operations.

class OverdriveRegulator:
    def __init__(self, threshold=1.0):
        self.threshold = threshold
        self.current_load = 0.0

    def update_load(self, load: float):
        self.current_load = load
        return self._regulate()

    def _regulate(self):
        if self.current_load > self.threshold:
            return {
                "status": "THROTTLED",
                "load": self.current_load,
                "threshold": self.threshold
            }
        return {
            "status": "STABLE",
            "load": self.current_load,
            "threshold": self.threshold
        }

    def set_threshold(self, threshold: float):
        self.threshold = threshold
