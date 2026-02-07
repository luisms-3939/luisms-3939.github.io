import { useRef, useEffect } from "react";

const HudBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const DPR = window.devicePixelRatio || 1;
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(DPR, DPR);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    window.addEventListener("resize", resize);

    let t = 0;
    let animationId: number;

    // Particle system for floating data points
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
    }> = [];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: Math.random(),
      });
    }

    // Animated grid
    const drawGrid = () => {
      ctx.strokeStyle = "rgba(80,200,255,0.08)";
      ctx.lineWidth = 1;

      const spacing = 80;
      const offset = (t * 0.3) % spacing;

      for (let x = -offset; x < width + spacing; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    // Animated line chart
    const drawLineChart = (x: number, y: number, w: number, h: number) => {
      ctx.strokeStyle = "rgba(120,220,255,0.7)";
      ctx.lineWidth = 2;
      ctx.beginPath();

      const points = 30;
      for (let i = 0; i < points; i++) {
        const px = x + (i / (points - 1)) * w;
        const py = y + h / 2 + Math.sin(t * 0.02 + i * 0.5) * (h * 0.35);

        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();

      // Add glow effect
      ctx.strokeStyle = "rgba(120,220,255,0.3)";
      ctx.lineWidth = 4;
      ctx.stroke();
    };

    // Animated bars
    const drawBars = (x: number, y: number, w: number, h: number) => {
      const bars = 10;
      const gap = 4;
      const barWidth = (w - gap * (bars - 1)) / bars;

      for (let i = 0; i < bars; i++) {
        const value = (Math.sin(t * 0.025 + i * 0.5) + 1) / 2;
        const barHeight = value * h;

        // Bar with gradient
        const gradient = ctx.createLinearGradient(
          x + i * (barWidth + gap),
          y + h,
          x + i * (barWidth + gap),
          y + h - barHeight
        );
        gradient.addColorStop(0, "rgba(80,180,255,0.6)");
        gradient.addColorStop(1, "rgba(120,220,255,0.8)");

        ctx.fillStyle = gradient;
        ctx.fillRect(
          x + i * (barWidth + gap),
          y + h - barHeight,
          barWidth,
          barHeight
        );

        // Bar outline
        ctx.strokeStyle = "rgba(120,220,255,0.4)";
        ctx.lineWidth = 1;
        ctx.strokeRect(
          x + i * (barWidth + gap),
          y + h - barHeight,
          barWidth,
          barHeight
        );
      }
    };

    // Pulsing radar
    const drawRadar = (cx: number, cy: number, r: number) => {
      const pulse = 0.85 + Math.sin(t * 0.03) * 0.15;

      // Multiple radar rings
      for (let ring = 0; ring < 3; ring++) {
        ctx.strokeStyle = `rgba(120,220,255,${0.3 - ring * 0.1})`;
        ctx.lineWidth = 2 - ring * 0.5;
        ctx.beginPath();

        const points = 6;
        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2;
          const ringR = r * pulse * (1 - ring * 0.15);
          const x = cx + Math.cos(angle) * ringR;
          const y = cy + Math.sin(angle) * ringR;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Radar sweep line
      const sweepAngle = (t * 0.02) % (Math.PI * 2);
      ctx.strokeStyle = "rgba(120,220,255,0.6)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(
        cx + Math.cos(sweepAngle) * r * pulse,
        cy + Math.sin(sweepAngle) * r * pulse
      );
      ctx.stroke();
    };

    // Circular progress indicator
    const drawCircularProgress = (
      cx: number,
      cy: number,
      r: number,
      progress: number
    ) => {
      // Background circle
      ctx.strokeStyle = "rgba(80,200,255,0.2)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();

      // Progress arc
      ctx.strokeStyle = "rgba(120,220,255,0.8)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + progress * Math.PI * 2);
      ctx.stroke();

      // Center dot
      ctx.fillStyle = "rgba(120,220,255,0.6)";
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fill();
    };

    // Scatter plot
    const drawScatterPlot = (x: number, y: number, w: number, h: number) => {
      const points = 15;
      for (let i = 0; i < points; i++) {
        const px = x + (Math.sin(t * 0.01 + i) * 0.3 + 0.5) * w;
        const py = y + (Math.cos(t * 0.015 + i * 0.5) * 0.3 + 0.5) * h;
        const size = 2 + Math.sin(t * 0.05 + i) * 1.5;

        // Point
        ctx.fillStyle = "rgba(120,220,255,0.6)";
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();

        // Glow
        ctx.fillStyle = "rgba(120,220,255,0.2)";
        ctx.beginPath();
        ctx.arc(px, py, size * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Rotating rings
    const drawRotatingRings = (cx: number, cy: number) => {
      for (let i = 0; i < 3; i++) {
        const r = 40 + i * 20;
        const rotation = (t * (0.005 + i * 0.002)) % (Math.PI * 2);

        ctx.strokeStyle = `rgba(80,200,255,${0.3 - i * 0.08})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(
          cx,
          cy,
          r,
          rotation,
          rotation + Math.PI * 1.5
        );
        ctx.stroke();
      }
    };

    // Floating particles
    const drawParticles = () => {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life += 0.01;

        // Wrap around screen
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const alpha = (Math.sin(p.life) * 0.5 + 0.5) * 0.4;

        ctx.fillStyle = `rgba(120,220,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        particles.forEach((p2) => {
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.strokeStyle = `rgba(120,220,255,${(1 - dist / 100) * 0.1})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
    };

    // Data stream effect
    const drawDataStream = (x: number, y: number) => {
      const chars = "01";
      ctx.font = "12px monospace";
      ctx.fillStyle = "rgba(120,220,255,0.4)";

      for (let i = 0; i < 8; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const yPos = y + i * 16 + ((t * 2) % 128);
        const alpha = 0.6 - (yPos - y) / 128;
        ctx.fillStyle = `rgba(120,220,255,${Math.max(0, alpha)})`;
        ctx.fillText(char, x, yPos % (y + 128));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Dark base
      ctx.fillStyle = "#060b14";
      ctx.fillRect(0, 0, width, height);

      drawGrid();
      drawParticles();

      if (width > 768) {
        // Desktop layout
        drawLineChart(100, 100, 450, 180);
        drawBars(width - 450, 140, 350, 200);
        drawRadar(width / 2, height - 220, 140);
        drawScatterPlot(100, height - 280, 300, 200);
        drawCircularProgress(
          width - 120,
          height - 120,
          50,
          (Math.sin(t * 0.02) + 1) / 2
        );
        drawRotatingRings(140, height - 140);

        // Data streams
        for (let i = 0; i < 5; i++) {
          drawDataStream(width - 100 + i * 20, 100);
        }
      } else {
        // Mobile layout - simplified
        drawRadar(width / 2, height / 2, 100);
        drawCircularProgress(
          width / 2,
          height - 100,
          40,
          (Math.sin(t * 0.02) + 1) / 2
        );
        drawRotatingRings(width / 2, 120);
      }

      t += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 0,
        background: "#060b14",
      }}
    />
  );
};

export default HudBackground;
