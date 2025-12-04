"use client";

import { useEffect, useRef } from "react";

export function MouseEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    // 创建粒子数组
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      element: HTMLDivElement;
    }> = [];

    // 创建粒子元素
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.className = "mouse-particle";
      particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, #ffd700 0%, #ffa500 50%, #ff8c00 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
        box-shadow: 0 0 6px rgba(255, 215, 0, 0.8);
      `;
      document.body.appendChild(particle);
      particles.push({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        life: 0,
        element: particle,
      });
    }

    // 使用 requestAnimationFrame 优化性能
    let rafId: number | null = null;

    const updateCursor = () => {
      // 光标直接跟随鼠标，无延迟
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;

      // 拖尾效果保持轻微延迟，营造拖尾感
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      trail.style.left = `${trailX}px`;
      trail.style.top = `${trailY}px`;

      rafId = requestAnimationFrame(updateCursor);
    };

    // 鼠标移动事件
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // 只在第一次移动时启动动画循环
      if (rafId === null) {
        updateCursor();
      }

      // 创建新粒子
      const createParticle = () => {
        const inactiveParticle = particles.find((p) => p.life <= 0);
        if (inactiveParticle) {
          inactiveParticle.x = mouseX;
          inactiveParticle.y = mouseY;
          inactiveParticle.vx = (Math.random() - 0.5) * 4;
          inactiveParticle.vy = (Math.random() - 0.5) * 4;
          inactiveParticle.life = 30;
          inactiveParticle.element.style.left = `${mouseX}px`;
          inactiveParticle.element.style.top = `${mouseY}px`;
          inactiveParticle.element.style.opacity = "1";
        }
      };

      // 每5帧创建一个粒子
      if (Math.random() > 0.7) {
        createParticle();
      }
    };

    // 更新粒子动画
    const updateParticles = () => {
      particles.forEach((particle) => {
        if (particle.life > 0) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vx *= 0.95;
          particle.vy *= 0.95;
          particle.life--;

          particle.element.style.left = `${particle.x}px`;
          particle.element.style.top = `${particle.y}px`;
          particle.element.style.opacity = `${particle.life / 30}`;

          if (particle.life <= 0) {
            particle.element.style.opacity = "0";
          }
        }
      });
      requestAnimationFrame(updateParticles);
    };

    // 鼠标进入/离开事件
    const handleMouseEnter = () => {
      if (cursor) cursor.style.opacity = "1";
      if (trail) trail.style.opacity = "0.5";
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.style.opacity = "0";
      if (trail) trail.style.opacity = "0";
    };

    // 鼠标点击事件 - 创建涟漪效果
    const handleMouseClick = (e: MouseEvent) => {
      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 0;
        height: 0;
        border: 2px solid rgba(255, 215, 0, 0.8);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        animation: ripple 0.6s ease-out forwards;
        box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
      `;

      // 添加动画样式（如果还没有）
      if (!document.getElementById("ripple-animation")) {
        const style = document.createElement("style");
        style.id = "ripple-animation";
        style.textContent = `
          @keyframes ripple {
            to {
              width: 200px;
              height: 200px;
              opacity: 0;
            }
          }
        `;
        document.head.appendChild(style);
      }

      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    // 悬停效果 - 为可交互元素添加
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        if (cursor) {
          cursor.style.transform = "scale(1.5)";
          cursor.style.background =
            "radial-gradient(circle, rgba(255, 215, 0, 0.9) 0%, rgba(255, 165, 0, 0.9) 50%, rgba(255, 140, 0, 0.9) 100%)";
          cursor.style.boxShadow = "0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 165, 0, 0.5)";
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        if (cursor) {
          cursor.style.transform = "scale(1)";
          cursor.style.background =
            "radial-gradient(circle, rgba(255, 215, 0, 0.7) 0%, rgba(255, 165, 0, 0.7) 50%, rgba(255, 140, 0, 0.7) 100%)";
          cursor.style.boxShadow = "0 0 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 165, 0, 0.4)";
        }
      }
    };

    // 添加事件监听器
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("click", handleMouseClick);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    // 启动粒子动画
    updateParticles();

    // 清理函数
    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("click", handleMouseClick);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);

      // 清理粒子元素
      particles.forEach((particle) => {
        if (particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element);
        }
      });
    };
  }, []);

  return (
    <>
      {/* 主光标 */}
      <div
        ref={cursorRef}
        className="mouse-cursor"
        style={{
          position: "fixed",
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, rgba(255, 165, 0, 0.8) 40%, rgba(255, 140, 0, 0.8) 100%)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          opacity: 0,
          transition: "opacity 0.3s ease, transform 0.2s ease",
          boxShadow: "0 0 20px rgba(255, 215, 0, 0.7), 0 0 40px rgba(255, 165, 0, 0.5), 0 0 60px rgba(255, 140, 0, 0.3)",
        }}
      />

      {/* 拖尾效果 */}
      <div
        ref={trailRef}
        className="mouse-trail"
        style={{
          position: "fixed",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, rgba(255, 165, 0, 0.25) 50%, rgba(255, 140, 0, 0.2) 100%)",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          opacity: 0,
          transition: "opacity 0.3s ease",
          filter: "blur(12px)",
        }}
      />
    </>
  );
}

