# INFINITY‑CORE‑ENGINE — ASTRAL THREAD WEAVER
# Weaves astral‑tier energy threads into stable constructs for subsystem linking.

class AstralThreadWeaver:
    def __init__(self):
        self.threads = []
        self.constructs = []
        self.log = []

    def spin_thread(self, name: str, tension: float):
        thread = {
            "name": name,
            "tension": tension
        }
        self.threads.append(thread)
        entry = {
            "action": "SPIN_THREAD",
            "thread": thread
        }
        self.log.append(entry)
        return entry

    def weave(self, thread_names: list, construct_name: str):
        selected = [t for t in self.threads if t["name"] in thread_names]
        if not selected:
            return None
        construct = {
            "name": construct_name,
            "threads": selected
        }
        self.constructs.append(construct)
        entry = {
            "action": "WEAVE",
            "construct": construct
        }
        self.log.append(entry)
        return entry

    def list_threads(self):
        return self.threads

    def list_constructs(self):
        return self.constructs

    def history(self):
        return self.log
