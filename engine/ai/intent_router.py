# INFINITY‑CORE‑ENGINE — INTENT ROUTER
# Routes high-level intents to the correct AI subsystems.

class IntentRouter:
    def __init__(self):
        self.routes = {}

    def register_intent(self, intent: str, handler):
        self.routes[intent] = handler

    def unregister_intent(self, intent: str):
        if intent in self.routes:
            del self.routes[intent]

    def handle(self, intent: str, payload=None):
        if intent in self.routes:
            return self.routes[intent](payload)
        return {
            "status": "UNKNOWN_INTENT",
            "intent": intent,
            "payload": payload
        }

    def list_intents(self):
        return list(self.routes.keys())
