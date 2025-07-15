import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '@/pages/Home'
import Blog from '@/pages/Blog'
import { useLenis } from "@/hooks/useLenis";

import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

const App: React.FC = () => {
  useLenis(); // 启用平滑滚动
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
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
          {/* 其他路由可以在这里添加 */}
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
