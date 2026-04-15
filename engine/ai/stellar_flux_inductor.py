# INFINITY‑CORE‑ENGINE — STELLAR FLUX INDUCTOR
# Induces stellar‑grade flux currents to energize high‑density subsystems.

class StellarFluxInductor:
    def __init__(self, max_flux=9000.0):
        self.max_flux = max_flux
        self.current_flux = 0.0
        self.log = []

    def induce(self, amount: float):
        self.current_flux = min(self.max_flux, self.current_flux + amount)
        entry = {
            "action": "INDUCE",
            "flux": self.current_flux,
            "max_flux": self.max_flux
        }
        self.log.append(entry)
        return entry

    def dissipate(self, amount: float):
        self.current_flux = max(0.0, self.current_flux - amount)
        entry = {
            "action": "DISSIPATE",
            "flux": self.current_flux
        }
        self.log.append(entry)
        return entry

    def surge_check(self):
        surged = self.current_flux >= self.max_flux
        entry = {
            "action": "SURGE_CHECK",
            "flux": self.current_flux,
            "max_flux": self.max_flux,
            "surged": surged
        }
        self.log.append(entry)
        return entry

    def status(self):
        return {
            "flux": self.current_flux,
            "max_flux": self.max_flux
        }

    def history(self):
        return self.log
