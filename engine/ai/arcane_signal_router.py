# INFINITY‑CORE‑ENGINE — ARCANE SIGNAL ROUTER
# Routes arcane‑tier signals between high‑order subsystems.

class ArcaneSignalRouter:
    def __init__(self):
        self.routes = {}
        self.log = []

    def add_route(self, source: str, target: str):
        self.routes[source] = target
        entry = {
            "action": "ADD_ROUTE",
            "source": source,
            "target": target
        }
        self.log.append(entry)
        return entry

    def route(self, source: str, payload):
        target = self.routes.get(source)
        if not target:
            return None
        entry = {
            "source": source,
            "target": target,
            "payload": payload
        }
        self.log.append(entry)
        return entry

    def list_routes(self):
        return self.routes

    def history(self):
        return self.log
