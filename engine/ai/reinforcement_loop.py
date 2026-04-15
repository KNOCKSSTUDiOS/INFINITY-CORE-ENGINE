# INFINITY‑CORE‑ENGINE — REINFORCEMENT LOOP
# Continuously evaluates outcomes and strengthens or weakens behaviors.

class ReinforcementLoop:
    def __init__(self):
        self.rewards = []
        self.penalties = []

    def reward(self, behavior: str, value: float):
        self.rewards.append({
            "behavior": behavior,
            "value": value
        })

    def penalize(self, behavior: str, value: float):
        self.penalties.append({
            "behavior": behavior,
            "value": value
        })

    def evaluate(self):
        score_map = {}

        for r in self.rewards:
            score_map[r["behavior"]] = score_map.get(r["behavior"], 0) + r["value"]

        for p in self.penalties:
            score_map[p["behavior"]] = score_map.get(p["behavior"], 0) - p["value"]

        return score_map

    def clear(self):
        self.rewards = []
        self.penalties = []
