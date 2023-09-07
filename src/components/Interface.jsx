function Section(props) {
    const { children } = props;

    return (
        <section className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>
            {children}
        </section>
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
            <Section>
                <h1>Contact</h1>
            </Section>
        </div>
    )
}


