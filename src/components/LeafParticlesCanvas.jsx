import React, { useEffect, useRef } from 'react';

export default function LeafParticlesCanvas({ isEnabled = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isEnabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Representasi partikel daun
    const leaves = [];
    const leafCount = Math.min(28, Math.floor(window.innerWidth / 50));

    const colors = [
      'rgba(16, 185, 129, 0.45)',  // Emerald leaf
      'rgba(52, 211, 153, 0.40)',  // Mint leaf
      'rgba(5, 150, 105, 0.35)',   // Deep forest green
      'rgba(56, 189, 248, 0.30)',   // Azure sky reflection
      'rgba(110, 231, 183, 0.50)'  // Young leaf shoot
    ];

    for (let i = 0; i < leafCount; i++) {
      leaves.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 7 + Math.random() * 11,
        speedX: 0.3 + Math.random() * 0.7,
        speedY: 0.5 + Math.random() * 1.0,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        oscillationSpeed: 0.015 + Math.random() * 0.02,
        oscillationAmplitude: 15 + Math.random() * 25,
        baseX: Math.random() * canvas.width,
        color: colors[Math.floor(Math.random() * colors.length)],
        t: Math.random() * 100
      });
    }

    const drawLeaf = (x, y, size, angle, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillStyle = color;

      // Bentuk daun elips berserat elegan
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(size * 0.7, -size * 0.4, size * 0.7, size * 0.5, 0, size);
      ctx.bezierCurveTo(-size * 0.7, size * 0.5, -size * 0.7, -size * 0.4, 0, -size);
      ctx.fill();

      // Tulang daun halus
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.85);
      ctx.lineTo(0, size * 0.85);
      ctx.stroke();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let leaf of leaves) {
        leaf.t += leaf.oscillationSpeed;
        leaf.y += leaf.speedY;
        leaf.x = leaf.baseX + Math.sin(leaf.t) * leaf.oscillationAmplitude;
        leaf.baseX += leaf.speedX * 0.35;
        leaf.angle += leaf.rotationSpeed;

        // Reset jika melewati bawah atau kanan layar
        if (leaf.y > canvas.height + 30) {
          leaf.y = -30;
          leaf.baseX = Math.random() * canvas.width;
          leaf.x = leaf.baseX;
        }
        if (leaf.baseX > canvas.width + 50) {
          leaf.baseX = -50;
        }

        drawLeaf(leaf.x, leaf.y, leaf.size, leaf.angle, leaf.color);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      id="leaf-canvas"
      aria-hidden="true"
    />
  );
}
