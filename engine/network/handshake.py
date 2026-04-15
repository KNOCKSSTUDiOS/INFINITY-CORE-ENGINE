# INFINITY‑CORE‑ENGINE — HANDSHAKE SYSTEM
# Establishes trust, identity, and compatibility between engine nodes.

class Handshake:
    def __init__(self):
        self.handshakes = {}

    def initiate(self, node_id: str, version: str):
        packet = {
            "node_id": node_id,
            "version": version,
            "status": "INITIATED"
        }
        self.handshakes[node_id] = packet
        return packet

    def acknowledge(self, node_id: str):
        if node_id in self.handshakes:
            self.handshakes[node_id]["status"] = "ACKNOWLEDGED"
            return self.handshakes[node_id]
        return None

    def complete(self, node_id: str):
        if node_id in self.handshakes:
            self.handshakes[node_id]["status"] = "COMPLETE"
            return self.handshakes[node_id]
        return None

    def get_status(self, node_id: str):
        return self.handshakes.get(node_id, None)
