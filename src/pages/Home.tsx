"use client";
import React from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import { BorderBeam } from "@/components/magicui/border-beam";
import { CoolMode } from "@/components/magicui/cool-mode";
const Home = () => {
    return (
        <>
            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        <TypingAnimation duration={100}>This is Stephen's Blog</TypingAnimation>
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        欢迎来到我的个人博客！这里记录了我的学习和生活点滴，希望能给你带来一些启发和帮助。
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4" >
                        <img
                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as="a"
                            href="/blog"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            进入博客 →
                        </CardItem>
                        <CoolMode>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                查看简历
                            </CardItem>
                        </CoolMode>
                    </div>
                    <BorderBeam
                        duration={6}
                        size={400}
                        className="from-transparent via-red-500 to-transparent"
                    />
                    <BorderBeam
                        duration={6}
                        delay={3}
                        size={400}
                        borderWidth={2}
                        className="from-transparent via-blue-500 to-transparent"
                    />
                </CardBody>

            </CardContainer>
            <div className="z-10 flex justify-center items-center h-[40rem] flex-col px-4">
                <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
                    <LinkPreview url="https://www.setrain.top" className="font-bold">
                        我的简历
                    </LinkPreview>
    
                    {" "}
                    和{" "}
                    <LinkPreview url="https://www.setrain.top/blog" className="font-bold">
                        我的博客
                    </LinkPreview>{" "}
                    是我在学习和生活中的重要记录，希望你能从中找到一些有价值的信息。
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
                    访问我的{" "}
                    <LinkPreview
                        url="https://www.github.com/2Stephen"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                        Github首页
                    </LinkPreview>{" "}
                    了解更多关于我的信息
                </p>
            </div>
        </>

    );
}
export default Home