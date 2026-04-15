# INFINITY‑CORE‑ENGINE — OMNI FIELD TRANSLATOR
# Translates signals between dimensional fields and subsystem languages.

class OmniFieldTranslator:
    def __init__(self):
        self.protocols = {}
        self.log = []

    def add_protocol(self, field: str, translator: callable):
        self.protocols[field] = translator

    def translate(self, field: str, data):
        translator = self.protocols.get(field)
        if not translator:
            return None
        result = translator(data)
        self.log.append({"field": field, "input": data, "output": result})
        return result

    def list_protocols(self):
        return list(self.protocols.keys())

    def history(self):
        return self.log
