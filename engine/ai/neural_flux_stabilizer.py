# INFINITY‑CORE‑ENGINE — NEURAL FLUX STABILIZER
# Maintains stability during high‑frequency neural signal fluctuations.

class NeuralFluxStabilizer:
    def __init__(self, tolerance=0.05):
        self.tolerance = tolerance
        self.last_flux = 0.0

    def measure(self, flux_value: float):
        self.last_flux = flux_value
        return self._stabilize()

    def _stabilize(self):
        if abs(self.last_flux) > self.tolerance:
            return {
                "status": "UNSTABLE",
                "flux": self.last_flux,
                "tolerance": self.tolerance
            }
        return {
            "status": "STABLE",
            "flux": self.last_flux,
            "tolerance": self.tolerance
        }

    def set_tolerance(self, tolerance: float):
        self.tolerance = tolerance
