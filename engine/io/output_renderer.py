# INFINITY‑CORE‑ENGINE — OUTPUT RENDERER
# Handles visual, audio, and HUD output from engine events.

class OutputRenderer:
    def __init__(self, hud=None, audio=None):
        self.hud = hud
        self.audio = audio
        self.render_log = []

    def render_visual(self, visual_event: dict):
        self.render_log.append({"type": "visual", "event": visual_event})
        return visual_event

    def render_audio(self, audio_event: dict):
        if self.audio:
            cue = self.audio.get(audio_event.get("cue"))
            self.render_log.append({"type": "audio", "event": cue})
            return cue
        return None

    def render_hud(self, hud_update: dict):
        if self.hud:
            self.render_log.append({"type": "hud", "event": hud_update})
            return hud_update
        return None

    def get_log(self):
        return self.render_log
