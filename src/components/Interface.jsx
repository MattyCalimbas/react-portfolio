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
        <>
            <Section>
                <h1>About</h1>
            </Section>
            <Section>
                <h1>Skills</h1>
            </Section>
            <Section>
                <h1>Projects</h1>
            </Section>
            <Section>
                <h1>Contact</h1>
            </Section>
        </>
    )
}