'use client';

import { useEffect, useRef, useState } from 'react';

export default function BlueprintPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Blueprint-style grid lines
    const gridSize = 20;
    let time = 0;

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw blueprint grid
      ctx.strokeStyle = 'rgba(29, 150, 137, 0.1)';
      ctx.lineWidth = 0.5;

      // Vertical lines with subtle animation
      for (let x = 0; x < canvas.width; x += gridSize) {
        const offset = Math.sin(time + x * 0.001) * 2;
        ctx.beginPath();
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x + offset, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        const offset = Math.cos(time + y * 0.001) * 2;
        ctx.beginPath();
        ctx.moveTo(0, y + offset);
        ctx.lineTo(canvas.width, y + offset);
        ctx.stroke();
      }

      // Draw animated blueprint-style connection lines
      const nodes = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3 },
        { x: canvas.width * 0.5, y: canvas.height * 0.5 },
        { x: canvas.width * 0.8, y: canvas.height * 0.4 },
        { x: canvas.width * 0.3, y: canvas.height * 0.7 },
        { x: canvas.width * 0.7, y: canvas.height * 0.7 },
      ];

      ctx.strokeStyle = 'rgba(29, 226, 137, 0.2)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 5]);
      ctx.lineDashOffset = time * 20;

      nodes.forEach((node1, i) => {
        nodes.slice(i + 1).forEach((node2) => {
          const distance = Math.sqrt(
            Math.pow(node2.x - node1.x, 2) + Math.pow(node2.y - node1.y, 2)
          );
          if (distance < 300) {
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke();
          }
        });
      });

      ctx.setLineDash([]);

      // Draw nodes
      nodes.forEach((node) => {
        const pulse = Math.sin(time * 2 + node.x * 0.01) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(29, 226, 137, ${0.3 * pulse})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4 * pulse, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main>
      {/* Hero Section - Matching Other Pages Structure */}
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-32 relative overflow-hidden">
        {/* Animated Blueprint Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-40"
        />

        {/* Dynamic Gradient Overlay - Follows Mouse */}
        <div 
          className="absolute inset-0 opacity-20 transition-opacity duration-1000 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(29, 150, 137, 0.3) 0%, transparent 50%)`,
          }}
        />

        {/* Hero Content - Standard Structure */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-6 max-w-4xl mx-auto fade-in-up">
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
              Coming Soon
            </p>
            <h1 className="text-6xl md:text-8xl font-heading font-medium tracking-tighter leading-none">
              The <span className="gradient-text">Blueprint.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Engineering the strategic gap between Business and Growth. Our knowledge hub is under construction.
            </p>
          </div>

          {/* Creative Visual Elements - Enhanced Box Representation */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Animated Text Reveal 1 */}
              <div className="relative overflow-hidden group">
                <div 
                  className="text-6xl md:text-8xl font-heading font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500"
                  style={{
                    transform: 'translateX(-100%)',
                    animation: 'slideInLeft 1s ease-out 0.5s forwards',
                  }}
                >
                  LOGIC
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-px w-0 bg-accent group-hover:w-full transition-all duration-1000 delay-300" />
                </div>
              </div>

              {/* Animated Text Reveal 2 */}
              <div className="relative overflow-hidden group">
                <div 
                  className="text-6xl md:text-8xl font-heading font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500"
                  style={{
                    transform: 'translateY(-100%)',
                    animation: 'slideInDown 1s ease-out 0.7s forwards',
                  }}
                >
                  STRATEGY
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-0 w-px bg-accent group-hover:h-full transition-all duration-1000 delay-300" />
                </div>
              </div>

              {/* Animated Text Reveal 3 */}
              <div className="relative overflow-hidden group">
                <div 
                  className="text-6xl md:text-8xl font-heading font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500"
                  style={{
                    transform: 'translateX(100%)',
                    animation: 'slideInRight 1s ease-out 0.9s forwards',
                  }}
                >
                  GROWTH
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-px w-0 bg-accent group-hover:w-full transition-all duration-1000 delay-300" />
                </div>
              </div>
            </div>

            {/* Coming Soon Badge - Animated */}
            <div 
              className="mt-16 flex items-center justify-center gap-3"
              style={{
                animation: 'fadeInScale 0.8s ease-out 1.5s forwards',
                opacity: 0,
                transform: 'scale(0.8)',
              }}
            >
              <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm">
                <div className="size-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-bold text-accent tracking-wider">COMING SOON</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideInDown {
          to {
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeInScale {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </main>
  );
}
