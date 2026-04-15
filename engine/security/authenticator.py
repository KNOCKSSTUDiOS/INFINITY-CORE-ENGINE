# INFINITY‑CORE‑ENGINE — AUTHENTICATOR
# Handles identity verification, token issuance, and session validation.

import uuid
import time

class Authenticator:
    def __init__(self):
        self.sessions = {}

    def issue_token(self, user_id: str, role: str):
        token = str(uuid.uuid4())
        self.sessions[token] = {
            "user_id": user_id,
            "role": role,
            "issued_at": int(time.time()),
            "valid": True
        }
        return token

    def validate(self, token: str):
        session = self.sessions.get(token)
        if not session:
            return False
        return session["valid"]

    def invalidate(self, token: str):
        if token in self.sessions:
            self.sessions[token]["valid"] = False

    def get_session(self, token: str):
        return self.sessions.get(token, None)
