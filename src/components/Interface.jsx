import { motion } from "framer-motion";

const skills = [
    {
        title: "HTML5",
        level: 100
    },
    {
        title: "CSS3",
        level: 100
    },
    {
        title: "JavaScript",
        level: 100
    },
    {
        title: "React.js",
        level: 100
    },
    {
        title: "Node.js",
        level: 100
    },
]

const languages = [
    {
        title: "🇺🇸 English",
        level: 100
    },
    {
        title: "🇵🇭 Tagalog",
        level: 100
    },


]

function Section(props) {
    const { children } = props;

    return (
        <motion.section
            className={
                `h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`
            }
            initial={{
                opacity: 0,
                y: 50
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay:0.6
                }
            }}>
            {children}
        </motion.section>
    )
}

function AboutSection() {
    return (
        <Section>
            <h1 className="text-6xl font-extrabold leading-snug">
                Hello, I'm
                <br />
                <span className="bg-white px-1 italic">Matthew Calimbas</span>
                <p className="text-lg text-gray-600 mt-4">
                    Web Developer
                    <br />
                    ...I make web applications!
                </p>
                <button className="bg-cyan-900 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16">
                    Contact me
                </button>
            </h1>
        </Section>
    )
}


function SkillSection() {
    return (
        <Section>
            <div>
                <h2 className="text-5xl font-bold">Skills</h2>
                <div className="mt-8 space-y-4">
                    {skills.map((skill, index) => (
                        <div className="w-64" key={index}>
                            <h3 className="text-xl fond-bold text-gray-800">{skill.title}</h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${skill.level}` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-5xl font-bold mt-10">Languages</h2>
                <div className="mt-8 space-y-4">
                    {languages.map((lang, index) => (
                        <div className="w-64" key={index}>
                            <h3 className="text-xl fond-bold text-gray-800">{lang.title}</h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${lang.level}` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

function ContactSection() {
    return (
        <Section>
            <h2 className="text-5xl font-bold">Contact me</h2>
            <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
                <form>
                    <label for="name" className="font-medium text-gray-900 block mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-900 p-3"
                    />
                    <label
                        for="email"
                        className="font-medium text-gray-900 block mb-1 mt-8"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-900 p-3"
                    />
                    <label
                        for="email"
                        className="font-medium text-gray-900 block mb-1 mt-8"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-900 p-3"
                    />
                    <button className="bg-cyan-900 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
                        Submit
                    </button>
                </form>
            </div>
        </Section>
    )
}

export default function Interface() {
    return (
        <div className='flex flex-col items-center w-screen'>
            <AboutSection />
            <SkillSection />
            <Section>
                <h1>Projects</h1>
            </Section>
            <ContactSection />
        </div>
    )
}


