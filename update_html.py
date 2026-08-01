import re

with open('index.html', 'r') as f:
    content = f.read()

# 1. Add GSAP & ScrollTrigger to head
if 'gsap' not in content:
    content = content.replace('</head>', '    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>\n</head>')

# 2. Update Fonts
content = re.sub(
    r'<link rel="stylesheet" href="style.css">',
    r'<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Inter:wght@400;500;600&family=JetBrains+Mono&display=swap" rel="stylesheet">\n    <link rel="stylesheet" href="style.css">',
    content
)

# 3. Remove Theme Toggle
content = re.sub(r'<button id="theme-toggle" aria-label="Toggle theme">.*?</button>', '', content, flags=re.DOTALL)

# 4. Remove Particle Canvas
content = re.sub(r'<canvas id="particle-canvas" aria-hidden="true"></canvas>', '', content)

# 5. Remove '☁️' emoji
content = content.replace('<div class="featured-visual" aria-hidden="true">☁️</div>', '')

# 6. Remove icons from skill cards, project cards, achievement cards, cert cards
# We can just remove the div containing the icons.
content = re.sub(r'<div class="skill-icon[^"]*">.*?</div>', '', content, flags=re.DOTALL)
content = re.sub(r'<div class="project-card-icon">.*?</div>', '', content, flags=re.DOTALL)
content = re.sub(r'<div class="achievement-icon[^"]*">.*?</div>', '', content, flags=re.DOTALL)
content = re.sub(r'<div class="cert-icon-wrap[^"]*">.*?</div>', '', content, flags=re.DOTALL)
content = re.sub(r'<span class="achievement-badge[^"]*">.*?</span>', '', content, flags=re.DOTALL)

# 7. Remove all 'reveal', 'reveal-left', 'reveal-right', 'delay-X' classes
content = re.sub(r'\breveal-left\b', 'gsap-reveal', content)
content = re.sub(r'\breveal-right\b', 'gsap-reveal', content)
content = re.sub(r'\breveal\b', 'gsap-reveal', content)
content = re.sub(r'\bdelay-\d+\b', '', content)

with open('index.html', 'w') as f:
    f.write(content)
