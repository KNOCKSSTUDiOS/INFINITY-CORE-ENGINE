# INFINITY‑CORE‑ENGINE — CINEMATIC INTRO SCENES
# Social intros, platform intros, and identity reveals.

class IntroScenes:
    def __init__(self):
        self.scenes = {
            "TIKTOK_QUANTUM_INTRO": {
                "duration": 1.5,
                "elements": [
                    "void_fade_in",
                    "fluxline_flash",
                    "monolith_snap_in",
                    "glyph_spin",
                    "identity_lock"
                ]
            },
            "YOUTUBE_NEBULA_INTRO": {
                "duration": 2.0,
                "elements": [
                    "nebula_swirl",
                    "astral_pulse_wave",
                    "monolith_rise",
                    "glyph_activation",
                    "brand_reveal"
                ]
            },
            "CAPCUT_ION_INTRO": {
                "duration": 1.2,
                "elements": [
                    "ion_spark",
                    "diagonal_flux_cut",
                    "monolith_pop",
                    "ember_burst",
                    "logo_stamp"
                ]
            }
        }

    def get(self, scene_name: str):
        return self.scenes.get(scene_name, None)

    def list(self):
        return list(self.scenes.keys())

    def add(self, scene_name: str, data: dict):
        self.scenes[scene_name] = data
