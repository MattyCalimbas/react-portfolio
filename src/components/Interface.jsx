function Section(props) {
    const { children } = props;

    return (
        <section className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>
            {children}
        </section>
    )
}

export default function Interface() {
    return (
        <div className='flex flex-col items-center w-screen'>
            <AboutSection />
            <Section>
                <h1>Skills</h1>
            </Section>
            <Section>
                <h1>Projects</h1>
            </Section>
            <Section>
                <h1>Contact</h1>
            </Section>
        </div>
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