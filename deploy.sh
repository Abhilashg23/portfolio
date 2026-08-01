#!/bin/bash
# Exit on error
set -e

echo "=== Building Next.js Portfolio ==="
cd space-portfolio-src
npm run build
cd ..

echo "=== Cleaning Up Old Site Files ==="
# Remove old CSS, JS, python helper, and build folders
rm -f style.css
rm -f script.js
rm -f update_html.py
rm -rf _next
rm -rf projects
rm -rf skills
rm -rf videos
rm -rf resume

echo "=== Deploying Build to Root Directory ==="
# Copy files from out/ folder to repo root
cp -r space-portfolio-src/out/* ./
cp -r space-portfolio-src/out/.[!.]* ./ 2>/dev/null || true

# Ensure .nojekyll is present so GitHub Pages serves directories starting with underscores (like _next)
touch .nojekyll

echo "=== Git Operations ==="
git add -A
git commit -m "Deploy new space-themed portfolio to GitHub Pages"
git push origin main

echo "=== Successfully Deployed to GitHub Pages! ==="
