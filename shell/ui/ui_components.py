# INFINITY‑CORE‑ENGINE — UI COMPONENTS
# Panels, overlays, buttons, and structural UI elements.

class UIComponents:
    def __init__(self):
        self.components = {
            "panel": {
                "padding": 12,
                "radius": 4,
                "material": "Obsidian Core™",
                "glow": False
            },
            "button": {
                "padding": 8,
                "radius": 3,
                "material": "Sentinel Steel™",
                "glow": True
            },
            "overlay": {
                "opacity": 0.85,
                "color": "#000000",
                "blur": 6
            }
        }

    def get(self, component_name: str):
        return self.components.get(component_name, None)

    def set(self, component_name: str, data: dict):
        self.components[component_name] = data

    def list_components(self):
        return list(self.components.keys())
