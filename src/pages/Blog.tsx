import { useMemo } from "react";
import { Timeline } from "@/components/ui/timeline";

const Blog = () => {
    const data = [
        {
          title: "2024",
          content: {
            headline: "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
            description: "Here are some of the templates I created for Aceternity UI Pro",
            images: [
              "https://assets.aceternity.com/templates/startup-1.webp",
              "https://assets.aceternity.com/templates/startup-2.webp",
            ],
          }
        },
        {
          title: "Early 2023",
          content: {
            headline: "I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.",
            description: "Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of beautiful designs I built.",
            images: [
              "https://assets.aceternity.com/pro/hero-sections.png",
              "https://assets.aceternity.com/features-section.png",
              "https://assets.aceternity.com/pro/bento-grids.png",
              "https://assets.aceternity.com/cards.png",
            ],
          }
        },
        {
          title: "Changelog",
          content: {
            headline: "Deployed 5 new components on Aceternity today",
            description: "Here are the new components I added to Aceternity UI Pro",
            images: [
              "https://assets.aceternity.com/pro/hero-sections.png",
              "https://assets.aceternity.com/features-section.png",
              "https://assets.aceternity.com/pro/bento-grids.png",
              "https://assets.aceternity.com/cards.png",
            ],
          }
        },
      ];

    // 动态生成 xmlData 格式
    const xmlData = useMemo(() => {
        return data.map((item) => ({
            title: item.title,
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        {item.content.headline}
                    </p>
                    {item.content.description && (
                        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                            {item.content.description}
                        </p>
                    )}
                    {item.content.images && item.content.images.length > 0 && (
                        <div className="grid grid-cols-2 gap-4">
                            {item.content.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${item.title} image ${index + 1}`}
                                    width={500}
                                    height={500}
                                    className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                                />
                            ))}
                        </div>
                    )}
                </div>
            ),
        }));
    }, [data]);
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={xmlData} />
    </div>
  );
}

export default Blog;