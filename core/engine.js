document.addEventListener("DOMContentLoaded", () => {
    PulsePhysics.setMode("ULTRA_GOD_MODE");
    const pulse = PulsePhysics.getState();

    const root = document.getElementById("engine-root");

    root.innerHTML = `
        <div class="pulse-core">
            <div class="mode-badge">
                <span class="mode-dot"></span>
                <span>ULTRA GOD MODE</span>
            </div>

            <h1>INFINITY-CORE-ENGINE</h1>
            <h2>by KNOCKSSTUDiOS™</h2>

            <p>Pulse ƒ: ${pulse.frequency}</p>
            <p>Glyph ρ: ${pulse.glyphDensity}</p>
            <p>Chrome R: ${pulse.chromeReflectivity}</p>

            <div class="mode-grid">
                <div class="mode-pill">FORM-V</div>
                <div class="mode-pill">FORM-9</div>
                <div class="mode-pill">FORM-R</div>
                <div class="mode-pill active">ULTRA GOD MODE</div>
            </div>

            <div class="footer-tag">RATED E — FOR EVERYONE</div>
        </div>
    `;
});
