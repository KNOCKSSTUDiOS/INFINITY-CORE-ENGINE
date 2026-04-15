# INFINITY‑CORE‑ENGINE — SENTIMENT ANALYZER
# Interprets emotional tone from text, signals, or contextual payloads.

class SentimentAnalyzer:
    def __init__(self):
        self.history = []

    def analyze(self, payload: dict):
        text = payload.get("text", "").lower()

        score = 0
        if any(w in text for w in ["power", "rise", "ignite", "ascend"]):
            score += 0.4
        if any(w in text for w in ["focus", "precision", "clarity"]):
            score += 0.3
        if any(w in text for w in ["anger", "fear", "stress"]):
            score -= 0.5

        sentiment = "positive" if score > 0.2 else "neutral" if score >= -0.2 else "negative"

        result = {
            "sentiment": sentiment,
            "score": score,
            "raw": text
        }

        self.history.append(result)
        return result

    def get_history(self):
        return self.history
