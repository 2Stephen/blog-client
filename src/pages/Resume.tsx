import { useMemo } from "react";
import { Timeline } from "@/components/ui/timeline";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const Resume = () => {
  const resumeData = [
    {
      title: "2025",
      content: {
        headline: "服务端开发工程师(实习生)",
        description: "金山办公 • 2025.04-2025.07",
        details: [
          "部门：研发中台事业部/云平台研发部",
          "",
          "1. 核心技术成果：",
          "• 参与 WPS 产研业务中台 SRE 云平台服务端开发，显著提升公有云服务效能",
          "• 自主开发 Go 语言日志库（log4go），成功开源至公司内部平台",
          "",
          "2. 云服务开发：",
          "• 主导采用 Go 语言开发 WPS 产研业务中台 SRE 云平台服务端",
          "• 实现融合云的统一监管，提升云资源管理效率与可视化程度",
          "",
          "3. API 服务研发：",
          "• 独立承担公有云（阿里云、金山云）API服务全流程开发",
          "• 采用策略模式开发，实现实例、磁盘、镜像等关键服务",
          "",
          "4. 容器化实践：",
          "• 熟练运用 docker compose 进行容器编排和服务部署",
          "• 保障服务在不同环境下的一致性与稳定性",
          "",
          "5. 业务能力：",
          "• 入职仅三天即独立完成小型需求开发",
          "• 面对复杂业务难题时，与导师高效沟通，快速定位问题并制定解决方案"
        ],
        skills: ["云原生", "Golang", "Vue", "Docker", "VMWare", "Paas", "Git", "CI/CD", "微服务"]
      }
    },
    {
      title: "2025",
      content: {
        headline: "AI面试题库系统 项目负责人",
        description: "2024.12-2025.05",
        details: [
          "项目说明：实现面试题库系统，包括AI生成题目、登录鉴权、邮箱验证、在线OJ、题目展示等主要功能。",
          "",
          "技术栈：Gin、Gorm、Redis、MySQL、React、Antd、Docker、Nginx",
          "",
          "1. 使用Gin框架开发服务端网络编程，通过Gin-Router完成路由、中间件开发及使用。",
          "2. 使用Gorm框架完成MySQL数据库ORM操作，实现数据入库。",
          "3. 通过Redis实现服务端JWT鉴权验证，实现不同角色授权，如：鉴权为管理员才可以操作题目、AI出题。",
          "4. 基于React框架以及Antd组件库实现前端页面开发，通过jsx组件化开发实现代码复用。",
          "5. 基于OpenAI协议实现AI交互，实现调用DeepSeek及通义大模型实现AI出题。",
          "6. 将前端页面通过Nginx进行反向代理部署到服务器，将css、js等资源上传至CDN平台实现高效访问。",
          "7. 使用Vite（开发过程）和whistle（调试过程）进行正向代理，确保程序的跨域安全性与健壮性。"
        ],
        skills: ["Gin", "Gorm", "Redis", "MySQL", "React", "Antd", "Docker", "Nginx", "OpenAI", "DeepSeek", "通义千问", "Vite", "whistle"]
      }
    },
    {
      title: "2024",
      content: {
        headline: "国家大学生创新训练项目 项目负责人",
        description: "2023.09-2024.09",
        details: [
          "项目说明：通过拍摄书架书脊图片完成快速定位摆放位置错误的书籍，提高图书管理员效率。",
          "",
          "技术栈：YOLOv11、SpringBoot、MybatisPlus、Redis、MySQL、Nginx、ElasticSearch、Git",
          "",
          "1. AI视觉检测引擎：基于YOLOv11实现书籍实例分割(mAP@0.5达93%+)，集成CLIP(Transformer)模型构建图文跨模态检索系统，匹配错误书籍，定位精度较传统方案提升40%。",
          "2. 多端交互系统：采用Uniapp(Vue3)开发小程序，多端部署，首屏加载耗时优化至2s内(图片及页面懒加载)。",
          "3. 查询性能攻坚：通过引入ElasticSearch实现十余万本书籍数据(标题、作者、ISBN等多字段检索)的模糊查询。",
          "4. AI部署方案：搭建AI服务网关，对于单个书架框区(书籍20余本)错误图片标注响应<3s，实现拍照纠错功能。"
        ],
        skills: ["YOLOv11", "CLIP", "SpringBoot", "MybatisPlus", "Redis", "MySQL", "Nginx", "ElasticSearch", "Git", "Uniapp", "Vue3"]
      }
    },
    {
      title: "Education",
      content: {
        headline: "计算机科学与技术(卓越工程师)",
        description: "武汉理工大学 • 2022-2026 • GPA: 前20% • 班长",
        details: [
          "主修课程: 操作系统(95.4)、计算机网络(92.93)、计算机组成与系统结构(86.35)、Web应用开发(88.87)",
          "2025 • 国家励志奖学金",
          "2025 • 金山软件社会实践奖学金(1万元)",
          "2024 • 全球校园人工智能算法精英赛 • 全国一等奖",
          "2025 • 蓝桥杯程序设计大赛(A组) • 湖北省二等奖",
          "2025 • 中国机器人与人工智能大赛 • 湖北省三等奖",
          "2024 • 武汉理工大学奖学金",
        ],
        skills: ["Golang", "Java", "计算机网络", "数据结构", "算法", "云原生开发", "微服务架构", "Docker", "Git"]
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
                    <span className="text-blue-500 mt-1"></span>
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
