const area = document.getElementById('wrapper');

const trailCount = 25;
const trails = [];
let isInside = false;

for (let i = 0; i < trailCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('trail');
    area.appendChild(dot);

    trails.push({
        el: dot,
        x: 0,
        y: 0
    });
}

area.addEventListener('mouseenter', () => {
    isInside = true;

    trails.forEach(t => {
        t.el.style.opacity = 1;
        t.el.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

area.addEventListener('mouseleave', () => {
    isInside = false;

    trails.forEach(t => {
        t.el.style.opacity = 0;
        t.el.style.transform = 'translate(-50%, -50%) scale(0.3)';
    });
});

area.addEventListener('mousemove', (e) => {
    if (!isInside) return;

    const rect = area.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    trails[0].x = x;
    trails[0].y = y;
});

function animate() {
    for (let i = trails.length - 1; i > 0; i--) {
        trails[i].x += (trails[i - 1].x - trails[i].x) * 0.2;
        trails[i].y += (trails[i - 1].y - trails[i].y) * 0.2;
    }

    trails.forEach(t => {
        t.el.style.left = t.x + 'px';
        t.el.style.top = t.y + 'px';
    });

    requestAnimationFrame(animate);
}

animate();
