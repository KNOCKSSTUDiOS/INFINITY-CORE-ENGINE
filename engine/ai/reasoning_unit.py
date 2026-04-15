# INFINITY‑CORE‑ENGINE — REASONING UNIT
# Performs structured reasoning using cognitive maps, patterns, and memory.

class ReasoningUnit:
    def __init__(self, cognitive_map, memory_bank, pattern_engine):
        self.cognitive_map = cognitive_map
        self.memory_bank = memory_bank
        self.pattern_engine = pattern_engine

    def reason(self, query: dict):
        associations = self.cognitive_map.get_associations(query.get("node"))
        recent_memory = self.memory_bank.recall_short()
        detected_patterns = self.pattern_engine.detect(query)

        result = {
            "associations": associations,
            "recent_memory": recent_memory,
            "patterns": detected_patterns
        }

        return result
