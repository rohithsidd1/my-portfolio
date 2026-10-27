# Rohith Siddanathi, portfolio

A scroll-driven 3D portfolio: a floating ice outpost in space, a desk setup, and a camera that flies through it chapter by chapter.

**Live:** https://rohithsiddanathi.netlify.app

## Stack
- Three.js (WebGL 2) with GPU-compressed KTX2 textures and Meshopt geometry
- Lenis smooth scrolling, UnrealBloom post-processing
- Spotify embed for the music section, Web Audio for the ambient soundtrack
- No build step: plain HTML, served as static files by Netlify

## Structure
```
index.html          the whole site (markup, styles and scripts)
assets/models/      3D models (.glb)
assets/img/         project, game and wallpaper images
assets/icons/       dock app icons
assets/fonts/       Instrument Serif and Onest (SIL OFL)
credits.html        3D model attribution (CC BY 4.0)
404.html            not-found page
netlify.toml        no build step; publishes the repo root
_headers            caching and security headers
```

## Deploy
Push to `main`; Netlify publishes automatically.

## Credits
3D models are used under CC BY 4.0. See [credits.html](credits.html).
