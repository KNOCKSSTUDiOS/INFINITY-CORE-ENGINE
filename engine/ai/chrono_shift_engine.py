# INFINITY‑CORE‑ENGINE — CHRONO SHIFT ENGINE
# Manages temporal offsets and time‑layer execution windows.

class ChronoShiftEngine:
    def __init__(self):
        self.offset = 0.0
        self.timeline_log = []

    def shift(self, delta: float):
        self.offset += delta
        entry = {
            "delta": delta,
            "new_offset": self.offset
        }
        self.timeline_log.append(entry)
        return entry

    def reset(self):
        self.offset = 0.0
        entry = {
            "reset": True,
            "offset": self.offset
        }
        self.timeline_log.append(entry)
        return entry

    def current_offset(self):
        return self.offset

    def history(self):
        return self.timeline_log
