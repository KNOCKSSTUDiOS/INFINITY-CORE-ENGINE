@github-copilot apply# .github/workflows/promote.yml
name: Promote Rendered Video

on:
  workflow_dispatch:
    inputs:
      video_id:
        description: "Unique ID or slug of the rendered video"
        required: true
        type: string
      title:
        description: "Public title for the video"
        required: true
        type: string
      description:
        description: "Long-form description / synopsis"
        required: true
        type: string
      tags:
        description: "Comma-separated tags (e.g. cinematic, trailer, 4k)"
        required: false
        type: string
      visibility:
        description: "Publication visibility"
        required: true
        default: "public"
        type: choice
        options:
          - public
          - unlisted
          - private

env:
  NODE_ENV: production
  # Base paths inside INFINITY-CORE-ENGINE
  ICE_CONTENT_ROOT: content/videos
  ICE_ASSETS_ROOT: content/assets
  ICE_PROMO_OUTPUT: content/promo
  # External endpoints (configure in repo or org settings)
  HOLLYWOODIMAGING_API_BASE: ${{ secrets.HOLLYWOODIMAGING_API_BASE }}
  HOLLYWOODIMAGING_API_KEY: ${{ secrets.HOLLYWOODIMAGING_API_KEY }}
  KNOCKSSTUDIOS_SOCIAL_API_BASE: ${{ secrets.KNOCKSSTUDIOS_SOCIAL_API_BASE }}
  KNOCKSSTUDIOS_SOCIAL_API_KEY: ${{ secrets.KNOCKSSTUDIOS_SOCIAL_API_KEY }}

jobs:
  promote:
    name: Generate and Publish Promotional Assets
    runs-on: ubuntu-latest

    permissions:
      contents: read

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: |
          npm ci

      - name: Resolve video paths
        id: resolve_paths
        run: |
          VIDEO_ID="${{ github.event.inputs.video_id }}"
          VIDEO_DIR="${ICE_CONTENT_ROOT}/${VIDEO_ID}"
          PROMO_DIR="${ICE_PROMO_OUTPUT}/${VIDEO_ID}"

          echo "video_dir=${VIDEO_DIR}" >> "$GITHUB_OUTPUT"
          echo "promo_dir=${PROMO_DIR}" >> "$GITHUB_OUTPUT"

      - name: Ensure promo output directory
        run: |
          mkdir -p "${{ steps.resolve_paths.outputs.promo_dir }}"

      - name: Generate thumbnails
        run: |
          npx infinity-core-cli promo thumbnails \
            --video "${{ steps.resolve_paths.outputs.video_dir }}/master.mp4" \
            --out   "${{ steps.resolve_paths.outputs.promo_dir }}/thumbnails"

      - name: Generate posters
        run: |
          npx infinity-core-cli promo posters \
            --video "${{ steps.resolve_paths.outputs.video_dir }}/master.mp4" \
            --out   "${{ steps.resolve_paths.outputs.promo_dir }}/posters"

      - name: Generate short clips
        run: |
          npx infinity-core-cli promo shorts \
            --video "${{ steps.resolve_paths.outputs.video_dir }}/master.mp4" \
            --out   "${{ steps.resolve_paths.outputs.promo_dir }}/shorts"

      - name: Generate social cuts
        run: |
          npx infinity-core-cli promo social-cuts \
            --video "${{ steps.resolve_paths.outputs.video_dir }}/master.mp4" \
            --out   "${{ steps.resolve_paths.outputs.promo_dir }}/social"

      - name: Generate faceless cinematic promos
        run: |
          npx infinity-core-cli promo faceless \
            --video "${{ steps.resolve_paths.outputs.video_dir }}/master.mp4" \
            --out   "${{ steps.resolve_paths.outputs.promo_dir }}/faceless"

      - name: Package promo manifest
        id: manifest
        run: |
          VIDEO_ID="${{ github.event.inputs.video_id }}"
          TITLE="${{ github.event.inputs.title }}"
          DESCRIPTION="${{ github.event.inputs.description }}"
          TAGS="${{ github.event.inputs.tags }}"
          VISIBILITY="${{ github.event.inputs.visibility }}"
          PROMO_DIR="${{ steps.resolve_paths.outputs.promo_dir }}"

          node scripts/build-promo-manifest.mjs \
            --video-id    "$VIDEO_ID" \
            --title       "$TITLE" \
            --description "$DESCRIPTION" \
            --tags        "$TAGS" \
            --visibility  "$VISIBILITY" \
            --promo-dir   "$PROMO_DIR"

          echo "manifest=${PROMO_DIR}/promo-manifest.json" >> "$GITHUB_OUTPUT"

      - name: Publish to hollywoodimaging.studio
        if: env.HOLLYWOODIMAGING_API_BASE != ''
        run: |
          curl -X POST "${HOLLYWOODIMAGING_API_BASE}/v1/videos/publish" \
            -H "Authorization: Bearer ${HOLLYWOODIMAGING_API_KEY}" \
            -H "Content-Type: application/json" \
            --data-binary "@${{ steps.manifest.outputs.manifest }}"

      - name: Publish to KNOCKSSTUDiOS social channels
        if: env.KNOCKSSTUDIOS_SOCIAL_API_BASE != ''
        run: |
          curl -X POST "${KNOCKSSTUDIOS_SOCIAL_API_BASE}/v1/promos/publish" \
            -H "Authorization: Bearer ${KNOCKSSTUDIOS_SOCIAL_API_KEY}" \
            -H "Content-Type: application/json" \
            --data-binary "@${{ steps.manifest.outputs.manifest }}"

      - name: Summary
        run: |
          echo "✅ Promotion workflow completed for video: ${{ github.event.inputs.video_id }}"
          echo "Promo assets directory: ${{ steps.resolve_paths.outputs.promo_dir }}"

Perform a scan of full repository, if need to do engine upgrade. Scan the entire repository and fix, add, refine, clean up, and correct all files. Improve HTML, CSS, JS, and any other code. Repair broken structure, missing tags, invalid syntax, and inconsistent formatting.

Optimize all files for performance, readability, and stability. Ensure all filenames remain the same unless a correction is required. Organize assets, remove duplicates, and fix broken paths or references.

Refine and enhance all cinematic, UI, and engine-related components. Apply consistent formatting, indentation, and structure across the entire repo. Add missing pieces where needed and complete incomplete files.

After all fixes and upgrades are applied, prepare the repository for upload and commit all improvements as a single update.
