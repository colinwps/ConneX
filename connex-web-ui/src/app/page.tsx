"use client"; // 客户端组件

import { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // 简单前端验证
    if (!email || !password) {
      setError("邮箱和密码不能为空");
      return;
    }

    // 模拟登录请求
    try {
      console.log("登录中:", { email, password });
      alert("登录成功！");
    } catch (err) {
      setError("登录失败，请检查账号或密码");
    }
  };

  // 初始化 tsParticles
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log("Particles loaded:", container);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* tsParticles 背景 with 科幻特效 */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: {
            color: { value: "#0a0b1e" }, // 深邃的太空蓝黑色背景
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "connect" },
              resize: true,
            },
            modes: {
              push: { quantity: 3 },
              connect: { distance: 200, radius: 400, links: { opacity: 0.7 } },
            },
          },
          particles: {
            color: { value: ["#40c4ff", "#00e5ff", "#ff4081"] }, // 霓虹蓝和粉色
            links: {
              color: "#00e5ff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1.5,
              shadow: { blur: 5, color: "#00e5ff", enable: true }, // 发光连接线
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: { min: 1, max: 3 },
              straight: false,
              attract: { enable: true, rotateX: 600, rotateY: 1200 },
            },
            number: {
              density: { enable: true, area: 800 },
              value: 100,
            },
            opacity: {
              value: { min: 0.3, max: 0.8 },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.2,
                sync: false,
              },
            },
            shape: {
              type: ["circle", "polygon"],
              polygon: { nb_sides: 6 }, // 六边形粒子，增加科幻感
            },
            size: {
              value: { min: 1, max: 4 },
              animation: {
                enable: true,
                speed: 10,
                minimumValue: 0.5,
                sync: false,
              },
            },
            twinkle: {
              particles: {
                enable: true,
                frequency: 0.05,
                opacity: 1,
              },
            },
            glow: {
              enable: true,
              color: "#00e5ff",
              radius: 10,
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* 渐变覆盖层，确保文字可读性 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-indigo-950/40 to-purple-950/40"></div>

      <div className="relative z-10 max-w-md w-full bg-black/80 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-blue-500/30">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          ConneX 登录
        </h2>
        <p className="text-center text-blue-300 mb-8 text-lg">连接一切，探索未来</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blue-200"
            >
              邮箱
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-3 bg-gray-900/50 border border-blue-500/50 text-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all placeholder-blue-700"
              placeholder="请输入邮箱"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-blue-200"
            >
              密码
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full px-4 py-3 bg-gray-900/50 border border-blue-500/50 text-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all placeholder-blue-700"
              placeholder="请输入密码"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm font-medium animate-pulse">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            登录
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-blue-300">
          还没有账号？{" "}
          <a
            href="/signup"
            className="text-blue-400 hover:text-blue-200 font-medium"
          >
            立即注册
          </a>
        </p>
      </div>
    </div>
  );
}