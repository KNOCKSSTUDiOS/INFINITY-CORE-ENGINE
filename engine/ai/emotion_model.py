# INFINITY‑CORE‑ENGINE — EMOTION MODEL
# Simulates emotional vectors for adaptive expression and tonal output.

class EmotionModel:
    def __init__(self):
        self.state = {
            "intensity": 0.5,
            "confidence": 0.5,
            "agility": 0.5,
            "aura": 0.5
        }

    def adjust(self, key: str, delta: float):
        if key in self.state:
            self.state[key] = max(0.0, min(1.0, self.state[key] + delta))
        return self.state

    def set(self, key: str, value: float):
        if key in self.state:
            self.state[key] = max(0.0, min(1.0, value))
        return self.state

    def get(self):
        return self.state

    def blend(self, other_state: dict):
        for k, v in other_state.items():
            if k in self.state:
                self.state[k] = (self.state[k] + v) / 2
        return self.state
