"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, MotionConfig, motion } from "motion/react"
import useMeasure from "react-use-measure"

import FamilyButton from "../ui/family-button"

export function FamilyButtonDemo() {
    return (
        <div className=" w-full h-full min-h-[240px]">
            <div className="fixed bottom-10 right-10 ">
                <FamilyButton>
                    <MusicPlayerExample />
                </FamilyButton>
            </div>
        </div>
    )
}

let tabs = [
    { id: 0, label: "发布博客" },
    { id: 1, label: "为我充电" },
]

export function MusicPlayerExample() {
    const [activeTab, setActiveTab] = useState(0)
    const [direction, setDirection] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [ref, bounds] = useMeasure()

    const content = useMemo(() => {
        switch (activeTab) {
            case 0:
                return (
                    <div className="flex items-center justify-center">
                        <svg viewBox="0 0 24 24" 
                        width="5em"
                        height="5em"
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg" 
                        stroke="#fff"><g 
                        id="SVGRepo_bgCarrier" 
                        stroke-width="0"></g><g 
                        id="SVGRepo_tracerCarrier" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12V10.5M13.5 2H12C7.28595 2 4.92893 2 3.46447 3.46447C2.49073 4.43821 2.16444 5.80655 2.0551 8" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M16.652 3.45506L17.3009 2.80624C18.3759 1.73125 20.1188 1.73125 21.1938 2.80624C22.2687 3.88124 22.2687 5.62415 21.1938 6.69914L20.5449 7.34795M16.652 3.45506C16.652 3.45506 16.7331 4.83379 17.9497 6.05032C19.1662 7.26685 20.5449 7.34795 20.5449 7.34795M16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9M20.5449 7.34795L17.5625 10.3304M14.5801 13.3128C14.1761 13.7168 13.9741 13.9188 13.7513 14.0926C13.4886 14.2975 13.2043 14.4732 12.9035 14.6166C12.6485 14.7381 12.3775 14.8284 11.8354 15.0091L10.1 15.5876M10.1 15.5876L8.97709 15.9619C8.71035 16.0508 8.41626 15.9814 8.21744 15.7826C8.01862 15.5837 7.9492 15.2897 8.03811 15.0229L8.41242 13.9M10.1 15.5876L8.41242 13.9" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>

                    </div>
                )
            case 1:
                return (
                    <div className="flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width="5em"
                        height="5em" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 14L22 10" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M11.5 9L9 12H12.5L10 15" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H11.5C15.2712 4 17.1569 4 18.3284 5.17157C19.5 6.34315 19.5 8.22876 19.5 12C19.5 15.7712 19.5 17.6569 18.3284 18.8284C17.1569 20 15.2712 20 11.5 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2.51839 18.1752 2.22937 17.3001 2.10149 16" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                    </div>
                )
            default:
                return null
        }
    }, [activeTab])

    const handleTabClick = (newTabId: number) => {
        if (newTabId !== activeTab && !isAnimating) {
            const newDirection = newTabId > activeTab ? 1 : -1
            setDirection(newDirection)
            setActiveTab(newTabId)
        }
    }

    const variants = {
        initial: (direction: number) => ({
            x: 300 * direction,
            opacity: 0,
            filter: "blur(4px)",
        }),
        active: {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
        },
        exit: (direction: number) => ({
            x: -300 * direction,
            opacity: 0,
            filter: "blur(4px)",
        }),
    }

    return (
        <div className="flex flex-col items-center pt-4 ">
            <div className="flex space-x-1 border border-none rounded-[8px] cursor-pointer bg-neutral-700  px-[3px] py-[3.2px] shadow-inner-shadow">
                {tabs.map((tab, i) => (
                    <button
                        key={`${tab.id}-i-${i}`}
                        onClick={() => handleTabClick(tab.id)}
                        className={`${activeTab === tab.id ? "text-white " : "hover:text-neutral-300/60"
                            } relative rounded-[5px] px-3 py-1.5 text-xs sm:text-sm font-medium text-neutral-600  transition focus-visible:outline-1 focus-visible:ring-1 focus-visible:ring-blue-light focus-visible:outline-none`}
                        style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="family-bubble"
                                className="absolute inset-0 z-10 bg-neutral-800  mix-blend-difference shadow-inner-shadow"
                                style={{ borderRadius: 5 }}
                                transition={{ type: "spring", bounce: 0.19, duration: 0.4 }}
                            />
                        )}
                        {tab.label}
                    </button>
                ))}
            </div>
            <MotionConfig transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}>
                <motion.div
                    className="relative mx-auto my-[10px] w-[60px] md:w-[150px] overflow-hidden"
                    initial={false}
                    animate={{ height: bounds.height }}
                >
                    <div className="md:p-6 p-2" ref={ref}>
                        <AnimatePresence
                            custom={direction}
                            mode="popLayout"
                            onExitComplete={() => setIsAnimating(false)}
                        >
                            <motion.div
                                key={activeTab}
                                variants={variants}
                                initial="initial"
                                animate="active"
                                exit="exit"
                                custom={direction}
                                onAnimationStart={() => setIsAnimating(true)}
                                onAnimationComplete={() => setIsAnimating(false)}
                            >
                                {content}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </MotionConfig>
        </div>
    )
}
