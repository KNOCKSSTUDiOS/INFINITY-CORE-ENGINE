# INFINITY-CORE-ENGINE - Copilot Instructions

## Project Identity
- **Name:** INFINITY-CORE-ENGINE powered by KNOCKSSTUDiOS
- **Type:** Cinematic studio platform and creative engine
- **Domain:** hollywoodimaging.studio
- **Owner:** @KNOCKSSTUDiOS

## Code Style
- Use ES6+ JavaScript (const/let, arrow functions, template literals)
- Tailwind CSS for styling with dark theme defaults
- Semantic HTML5 elements
- Mobile-first responsive design
- Modular file organization

## Architecture
- Static frontend deployed via GitHub Pages
- Modular engine structure (ENGINE/, CINEMA-SUITE/, sentinel/, pipeline/)
- No server-side rendering required
- Assets served from /assets/ directory

## Brand Guidelines
- **Primary Colors:** Black (#000000), Cyan (#00FFFF), Gold (#FFD700)
- **Aesthetic:** Industrial, cinematic, photorealistic metal finish
- **Typography:** Bold, clean, modern sans-serif
- **Tone:** Professional, powerful, production-grade

## File Organization
- `/ENGINE/` - Core engine modules
- `/CINEMA-SUITE/` - Cinema and video tools
- `/sentinel/` - Security and monitoring
- `/pipeline/` - CI/CD and build pipeline
- `/assets/` - Images, icons, media
- `/docs/` - Documentation

## Security Rules
- Never commit .env or secret files
- All API keys must use environment variables
- Follow SECURITY.md disclosure policy
- CODEOWNERS enforced for critical paths
