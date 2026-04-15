# INFINITY‑CORE‑ENGINE — DECISION TREE
# Lightweight branching logic for AI-driven engine responses.

class DecisionTree:
    def __init__(self):
        self.tree = {}

    def add_node(self, node_id: str, condition, true_branch=None, false_branch=None):
        self.tree[node_id] = {
            "condition": condition,
            "true": true_branch,
            "false": false_branch
        }

    def evaluate(self, node_id: str, context=None):
        if node_id not in self.tree:
            return None

        node = self.tree[node_id]
        condition_result = node["condition"](context)

        next_node = node["true"] if condition_result else node["false"]
        return next_node
