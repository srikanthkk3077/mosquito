import React, { useEffect, useRef } from 'react';

export default function MosquitoSwarmAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create mosquito particles
    const mosquitoCount = 10;
    const mosquitoes = Array.from({ length: mosquitoCount }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * (canvas.height * 0.8) + 40,
      vx: (Math.random() - 0.5) * 2.5 + (i % 2 === 0 ? 1.2 : -1.2),
      vy: (Math.random() - 0.5) * 2.0,
      size: Math.random() * 8 + 14,
      wingAngle: 0,
      wingSpeed: 0.4 + Math.random() * 0.3,
      buzzOffset: Math.random() * Math.PI * 2,
      label: i % 3 === 0 ? 'Aedes (Dengue)' : i % 3 === 1 ? 'Anopheles (Malaria)' : 'Culex Vector'
    }));

    // Draw single mosquito
    const drawMosquito = (m, time) => {
      ctx.save();
      ctx.translate(m.x, m.y);

      // Rotate towards direction of movement
      const angle = Math.atan2(m.vy, m.vx);
      ctx.rotate(angle);

      // 1. Draw Translucent Wings (Flapping Animation)
      m.wingAngle += m.wingSpeed;
      const wingSpread = Math.sin(m.wingAngle) * 0.8 + 0.2;

      ctx.fillStyle = 'rgba(0, 162, 255, 0.45)';
      ctx.strokeStyle = '#00A2FF';
      ctx.lineWidth = 1.2;

      // Left Wing
      ctx.beginPath();
      ctx.ellipse(-2, -m.size * 0.7 * wingSpread, m.size * 0.4, m.size * 0.8, -0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Right Wing
      ctx.beginPath();
      ctx.ellipse(-2, m.size * 0.7 * wingSpread, m.size * 0.4, m.size * 0.8, 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // 2. Draw Body (Thorax & Abdomen)
      ctx.fillStyle = '#0F172A';
      ctx.beginPath();
      ctx.ellipse(0, 0, m.size * 0.6, m.size * 0.3, 0, 0, Math.PI * 2);
      ctx.fill();

      // Striated striped abdomen
      ctx.fillStyle = '#334155';
      ctx.beginPath();
      ctx.ellipse(-m.size * 0.5, 0, m.size * 0.7, m.size * 0.25, 0, 0, Math.PI * 2);
      ctx.fill();

      // Red Glowing Eyes
      ctx.fillStyle = '#EF4444';
      ctx.beginPath();
      ctx.arc(m.size * 0.5, -2, 2, 0, Math.PI * 2);
      ctx.arc(m.size * 0.5, 2, 2, 0, Math.PI * 2);
      ctx.fill();

      // Proboscis Needle
      ctx.strokeStyle = '#F43F5E';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(m.size * 0.6, 0);
      ctx.lineTo(m.size * 1.1, 0);
      ctx.stroke();

      // Draw Label Badge
      ctx.restore();
      ctx.save();
      ctx.font = 'bold 10px sans-serif';
      ctx.fillStyle = '#0284C7';
      ctx.fillText(`🦟 ${m.label}`, m.x - 30, m.y - m.size - 6);
      ctx.restore();
    };

    // Render loop
    let lastTime = 0;
    const render = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Bio-Shield Repel Pulse Wave
      const pulseR = (time * 0.08) % (canvas.width * 0.4);
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height * 0.4, pulseR, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 162, 255, ${Math.max(0, 0.4 - pulseR / (canvas.width * 0.4))})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Update & Draw Mosquitoes
      mosquitoes.forEach((m) => {
        // Natural erratic buzzing physics
        m.x += m.vx + Math.sin(time * 0.005 + m.buzzOffset) * 0.8;
        m.y += m.vy + Math.cos(time * 0.006 + m.buzzOffset) * 0.8;

        // Bounce off canvas boundaries
        if (m.x < 20 || m.x > canvas.width - 20) m.vx *= -1;
        if (m.y < 20 || m.y > canvas.height - 20) m.vy *= -1;

        drawMosquito(m, time);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}
