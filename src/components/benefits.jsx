"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const benefits = [
    {
        title: "Academic Enhancement",
        description: [
            "The event provides a unique platform for students to showcase and enhance their technical skills.",
            "The coding aspect promotes critical thinking, problem-solving, and algorithmic creativity.",
            "The gaming component sharpens strategic thinking, decision-making, and quick reflexes.",
            "Together, these aspects foster academic growth by encouraging participants to apply theoretical knowledge to real-world challenges."
        ]
    },
    {
        title: "Student Development",
        description: [
            "Apex Code and Combat is more than just an event—it's a comprehensive learning experience.",
            "Students gain valuable exposure to teamwork and collaboration by working in groups, enhancing their leadership abilities and communication skills.",
            "The event encourages technical skill development through coding challenges, while also allowing participants to refine their gaming strategies, decision-making processes, and time management abilities.",
            "By participating, students build confidence and personal growth, becoming well-rounded individuals ready to face professional challenges."
        ]
    },
    {
        title: "Visibility",
        description: [
            "Hosting a dual-focused event such as Apex Code and Combat positions Apex College as a leader in both the tech and esports communities.",
            "The event highlights the college’s commitment to nurturing the next generation of tech innovators and gamers, giving it visibility among potential students, educators, and industry professionals.",
            "It serves as a testament to the college's dedication to diverse educational interests and the cultivation of skills in two booming industries—technology and gaming.",
            "This increased visibility can enhance the college's reputation, making it an attractive choice for prospective students seeking opportunities in both fields."
        ]
    },
    {
        title: "Networking",
        description: [
            "Apex Code and Combat creates an excellent opportunity for students to interact with industry professionals, fostering connections that can lead to internships, mentorships, and career opportunities.",
            "The event attracts a diverse crowd, including tech experts, esports professionals, alumni, and high school students, all of whom bring unique insights into the world of coding and gaming.",
            "The networking aspect encourages students to build valuable relationships, exchange knowledge, and explore potential career paths.",
            "This strengthens the community around the college, making it a valuable hub for future professionals in tech and esports."
        ]
    }
]

export default function ACCBenefits() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/images/1.png",
        "/images/photo5.jpg",
        "/images/photo6.jpg",
        "/images/photo1.JPG",
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
        setCurrentImage(index);
    };

    return (
        <div className="mx-auto px-6 py-48 bg-white text-black">
            <h1 className="text-4xl mb-24">So, why Apex Code and Combat?</h1>
            <div className="flex flex-col md:flex-row gap-8">
                {/* Image section */}
                <div className="md:w-1/2 relative h-[400px]">
                    <AnimatePresence initial={false} custom={currentImage}>
                        <motion.img
                            key={currentImage}
                            src={images[currentImage]}
                            alt={`ACC benefit ${currentImage + 1}`}
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                            custom={currentImage}
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.75 }
                            }}
                        />
                    </AnimatePresence>
                </div>

                {/* Benefits section */}
                <div className="md:w-1/2">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="mb-4 border-b border-gray-200 pb-4"
                            initial={false}
                        >
                            <button
                                className="flex justify-between items-center w-full text-left"
                                onClick={() => handleToggle(index)}
                            >
                                <span className="text-2xl">{benefit.title}</span>
                                <motion.div
                                    className="text-2xl"
                                    initial={false}
                                    animate={{ rotate: activeIndex === index ? 0 : 90 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    {activeIndex === index ? "-" : "+"}
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.75, ease: "easeInOut" }}
                                    >
                                        <ul className="mt-2 text-gray-600 list-disc list-inside">
                                            {benefit.description.map((desc, idx) => (
                                                <li key={idx} className="mt-2">
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}