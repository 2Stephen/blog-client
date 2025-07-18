import { useMemo } from "react";
import { Timeline } from "@/components/ui/timeline";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const Resume = () => {
  const resumeData = [
    {
      title: "2024",
      content: {
        headline: "服务端开发工程师(实习生)",
        description: "金山办公 • 2025.04-2025.07",
        details: [
          "Led a team of 5 developers in building a modern e-commerce platform",
          "Implemented micro-frontend architecture reducing build time by 40%",
          "Introduced automated testing pipeline improving code quality",
          "Mentored 3 junior developers, helping them advance their careers"
        ],
        skills: ["React", "TypeScript", "Next.js", "Docker", "AWS"]
      }
    },
    {
      title: "Education",
      content: {
        headline: "计算机科学与技术(卓越工程师)",
        description: "武汉理工大学 • 2022-2026 • GPA: 前20% • 班长",
        details: [
          "主修课程: 操作系统(95.4)、计算机网络(92.93)、计算机组成与系统结构(86.35)、Web应用开发(88.87)",
          "2025 • 金山软件社会实践奖学金(1万元)",
          "2024 • 全球校园人工智能算法精英赛 • 全国一等奖",
          "2025 • 蓝桥杯程序设计大赛(A组) • 湖北省二等奖",
          "2025 • 中国机器人与人工智能大赛 • 湖北省三等奖",
          "2024 • 武汉理工大学奖学金",
        ],
        skills: ["Go", "Java", "计算机网络", "数据结构", "算法"]
      }
    }
  ];

  const xmlData = useMemo(() => {
    return resumeData.map((item) => ({
      title: item.title,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              {item.content.headline}
            </h3>
            <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 mb-4">
              {item.content.description}
            </p>
          </div>
          
          {item.content.details && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                主要成就:
              </h4>
              <ul className="space-y-1">
                {item.content.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="text-blue-500 mt-1">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {item.content.skills && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                主要技能:
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.content.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-md border border-blue-200 dark:border-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ),
    }));
  }, [resumeData]);

  return (
    <div className="relative w-full overflow-clip">
      {/* Header Section */}
      <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h1 className="text-2xl md:text-5xl font-bold text-black dark:text-white max-w-4xl mb-6">
            我的简历
          </h1>
          <div className="space-y-4 max-w-2xl">
            <TypingAnimation className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300" duration={100}>
              服务端开发工程师 • 实习 • 专注于云原生架构及微服务开发
            </TypingAnimation>
            <div className="flex flex-wrap gap-4 text-sm md:text-base text-neutral-600 dark:text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="text-blue-500">Email:</span>
                han_le_lin@whut.edu.cn
              </span>
              <span className="flex items-center gap-2">
                <span className="text-blue-500">Phone:</span>
                +86 136-3864-2286
              </span>
              <span className="flex items-center gap-2">
                <span className="text-blue-500">Address:</span>
                武汉，中国
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Summary */}
      <div className="w-full bg-neutral-50 dark:bg-neutral-900 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <h2 className="text-xl md:text-3xl font-bold text-black dark:text-white mb-8">
            技能概览
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-neutral-900 dark:text-neutral-100">
                前端技术
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Vite"].map((skill) => (
                  <span key={skill} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-neutral-900 dark:text-neutral-100">
                后端技术
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Go", "Gin", "GORM", "MySQL", "Redis", "RabbbitMQ"].map((skill) => (
                  <span key={skill} className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-neutral-900 dark:text-neutral-100">
                工具 & 其他
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Cloud", "Git", "MicroServices", "OpenSource"].map((skill) => (
                  <span key={skill} className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <Timeline data={xmlData} />
    </div>
  );
};

export default Resume;
