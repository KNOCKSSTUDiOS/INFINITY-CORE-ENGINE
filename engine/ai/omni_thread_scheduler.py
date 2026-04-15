# INFINITY‑CORE‑ENGINE — OMNI THREAD SCHEDULER
# Schedules multi‑realm execution threads with adaptive priority balancing.

class OmniThreadScheduler:
    def __init__(self):
        self.threads = []
        self.queue = []

    def create_thread(self, name: str, priority: int, task: callable):
        thread = {
            "name": name,
            "priority": priority,
            "task": task
        }
        self.threads.append(thread)
        self.threads.sort(key=lambda t: t["priority"], reverse=True)
        return thread

    def run_next(self):
        if not self.threads:
            return None
        thread = self.threads.pop(0)
        result = thread["task"]()
        self.queue.append({"thread": thread["name"], "result": result})
        return result

    def list_threads(self):
        return self.threads

    def history(self):
        return self.queue
