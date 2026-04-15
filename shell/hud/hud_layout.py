# INFINITY‑CORE‑ENGINE — HUD LAYOUT
# Defines HUD frame structure, regions, and display logic.

class HUDLayout:
    def __init__(self):
        self.regions = {
            "top_left": None,
            "top_right": None,
            "bottom_left": None,
            "bottom_right": None,
            "center": None
        }

    def set_region(self, region: str, content: dict):
        if region in self.regions:
            self.regions[region] = content

    def clear_region(self, region: str):
        if region in self.regions:
            self.regions[region] = None

    def get_layout(self):
        return self.regions
