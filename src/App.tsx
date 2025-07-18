import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '@/pages/Home'
import Blog from '@/pages/Blog'
import Resume from '@/pages/Resume'
import { useLenis } from "@/hooks/useLenis";
import { Pointer } from "@/components/magicui/pointer";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

import { FamilyButtonDemo } from './components/diy/Family'

import { DockDemo } from './components/diy/dock'

const App: React.FC = () => {
  useLenis(); // 启用平滑滚动
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <DockDemo />
      <Pointer>
          <motion.div
            animate={{
              scale: [0.8, 1, 0.8],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-pink-600"
            >
              <motion.path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="currentColor"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>
        </Pointer>
      {/* 全局背景网格 */}
      <InteractiveGridPattern
        className={cn(
          "pointer-events-none absolute inset-0 z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="hover:fill-blue-500"
      />

      {/* 页面内容 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
          {/* 其他路由可以在这里添加 */}
        </Routes>
      </BrowserRouter>
      <FamilyButtonDemo />
    </div>

  )
}

export default App
