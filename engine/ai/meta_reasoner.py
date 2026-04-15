# INFINITY‑CORE‑ENGINE — META REASONER
# Performs high-level reasoning across systems, context, and engine intent.

class MetaReasoner:
    def __init__(self, meta_context, reasoning_unit, prediction_engine):
        self.meta_context = meta_context
        self.reasoning_unit = reasoning_unit
        self.prediction_engine = prediction_engine
        self.meta_log = []

    def evaluate(self, query: dict):
        context_snapshot = self.meta_context.get_context()
        reasoning = self.reasoning_unit.reason(query)
        prediction = self.prediction_engine.predict_mode_shift()

        result = {
            "context": context_snapshot,
            "reasoning": reasoning,
            "predicted_mode": prediction
        }

        self.meta_log.append(result)
        return result

    def history(self):
        return self.meta_log
