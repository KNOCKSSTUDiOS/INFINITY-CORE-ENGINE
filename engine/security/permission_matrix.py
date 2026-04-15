# INFINITY‑CORE‑ENGINE — PERMISSION MATRIX
# Defines access levels for subsystems, modules, and external nodes.

class PermissionMatrix:
    def __init__(self):
        self.matrix = {
            "ROOT": {
                "access_level": 5,
                "allowed_actions": ["read", "write", "execute", "override", "shutdown"]
            },
            "SYSTEM": {
                "access_level": 4,
                "allowed_actions": ["read", "write", "execute"]
            },
            "MODULE": {
                "access_level": 3,
                "allowed_actions": ["read", "execute"]
            },
            "CLIENT": {
                "access_level": 2,
                "allowed_actions": ["read"]
            },
            "GUEST": {
                "access_level": 1,
                "allowed_actions": []
            }
        }

    def get_role(self, role: str):
        return self.matrix.get(role, None)

    def can(self, role: str, action: str):
        role_data = self.matrix.get(role)
        if not role_data:
            return False
        return action in role_data["allowed_actions"]

    def list_roles(self):
        return list(self.matrix.keys())
