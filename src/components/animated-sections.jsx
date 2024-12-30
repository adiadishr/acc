'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

const sections = [
    {
        id: 1,
        title: "Stumble Guys",
        image: "/images/2.png",
        content: [
            "A fun-filled, multiplayer obstacle course game where participants race through hilarious, chaotic challenges to claim victory.",
            "Open to all individuals looking for a fun, competitive experience.",
            "Solo with players competing through various obstacle courses.",
            "128 expected participation",
            "To be the last player standing by avoiding obstacles, completing challenges, and outlasting the competition.",
            "Intracollege Competition.",
        ]
    },
    {
        id: 2,
        title: "Ideathon",
        image: "/images/1.png",
        content: [
            "Event Type: Inter-college competition",
            "Teams: 8 teams, each with 4 members",
            "Duration: 3 days",
            "Possible themes: Agro-Tech, E-Governance, Cybersecurity & Cybercrime prevention, Health and Wellness"
        ]
    },
    {
        id: 3,
        title: "PUBG",
        image: "/images/3.png",
        content: [
            "An online battle royal game enjoyed by participants and spectators during AGC 2024.",
            "2 Days Inter-college Event",
            "40 teams expected to participate, targeting highschoolers and high-school graduates.",
            "Team of 5, including 1 manager.",
            "Teamwork and Strategic Thinking"
        ]
    }
];


export default function ExpandableSections() {
    const [openSheet, setOpenSheet] = useState(null)
    const [hoveredSection, setHoveredSection] = useState(null)

    return (
        <div className="flex h-screen">
            {sections.map((section) => (
                <motion.div
                    key={section.id}
                    className="relative flex-1 flex items-center justify-center cursor-pointer overflow-hidden"
                    animate={{
                        flex: hoveredSection === section.id ? 1.5 : 1
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onHoverStart={() => setHoveredSection(section.id)}
                    onHoverEnd={() => setHoveredSection(null)}
                    onClick={() => setOpenSheet(section.id)}
                    style={{
                        backgroundImage: `url(${section.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                    <motion.h2
                        className="text-white text-3xl font-bold z-10 text-center px-4"
                        animate={{
                            scale: hoveredSection === section.id ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {section.title}
                    </motion.h2>

                    <AnimatePresence>
                        {openSheet === section.id && (
                            <Sheet open={openSheet === section.id} onOpenChange={(open) => setOpenSheet(open ? section.id : null)}>
                                <SheetContent side="bottom" className="h-[80vh] sm:h-[70vh] w-full">
                                    <SheetHeader>
                                        <SheetTitle><div className="text-4xl">{section.title}</div></SheetTitle>
                                    </SheetHeader>
                                    <ScrollArea className="h-[calc(100%-4rem)] mt-6 rounded-md">
                                        <SheetDescription>
                                            <ul className='text-neutral-700 text-2xl list-disc list-inside'>
                                                {section.content.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </SheetDescription>
                                    </ScrollArea>
                                </SheetContent>
                            </Sheet>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    )
}

