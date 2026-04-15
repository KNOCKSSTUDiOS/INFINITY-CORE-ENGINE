# INFINITY‑CORE‑ENGINE — SINGULARITY EVENT MONITOR
# Detects and logs high‑intensity system events approaching singularity thresholds.

class SingularityEventMonitor:
    def __init__(self, threshold=1000):
        self.threshold = threshold
        self.events = []

    def record(self, magnitude: float, source: str):
        event = {
            "magnitude": magnitude,
            "source": source,
            "singularity": magnitude >= self.threshold
        }
        self.events.append(event)
        return event

    def set_threshold(self, threshold: float):
        self.threshold = threshold

    def history(self):
        return self.events

    def critical_events(self):
        return [e for e in self.events if e["singularity"]]
