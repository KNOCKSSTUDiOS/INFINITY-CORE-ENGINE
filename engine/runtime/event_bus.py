# INFINITY‑CORE‑ENGINE — EVENT BUS
# Centralized event dispatch system for engine-wide communication.

class EventBus:
    def __init__(self):
        self.listeners = {}

    def subscribe(self, event_name: str, callback):
        if event_name not in self.listeners:
            self.listeners[event_name] = []
        self.listeners[event_name].append(callback)

    def unsubscribe(self, event_name: str, callback):
        if event_name in self.listeners:
            self.listeners[event_name] = [
                fn for fn in self.listeners[event_name] if fn != callback
            ]

    def emit(self, event_name: str, data=None):
        if event_name in self.listeners:
            for callback in self.listeners[event_name]:
                callback(data)

    def list_events(self):
        return list(self.listeners.keys())
