import { Image, Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

export const projects = [
    {
        title: "Shrink Boxing",
        url: "https://mattycalimbas.github.io/fatboyshrinkboxing/",
        image: "projects/boxingProject.jpg",
        description: "An extensively developed website constructed using only HTML and CSS. To enhance its design and layout, CSS frameworks like Bootstrap were employed. This project was conceived as a proof of concept to demonstrate the potential for a frontend makeover to a client.",
    },
    {
        title: "Gogopix API",
        url: "https://github.com/MattyCalimbas/gogopixApi",
        image: "projects/apithumb.png",
        description: "Learn how to bake a 3D model with Blender and use it in r3f",
    },
    {
        title: "Beer Selector",
        url: "https://beerselector-production.up.railway.app/",
        image: "projects/beerthumb.png",
        description: "This is a personal portfolio project that is still a WIP. This is a near-fully functioning web application that helps a user select beer given personal taste. This web application employs Express and Angular 7 to parse the Punk API database for beers. All data is displayed within a single HTML page.",
    },
    {
        title: "Gogopix",
        url: "https://gogopix.co/",
        image: "gogopixapp.png",
        description: "GOGOPIX is an android based application that acts as promotional tool and marketplace for music related digital art and artists. As product manager for GOGOPIX I worked tirelessly as the liason between the development/design teams and the CEO. Interacting closely with the CEO we ensured adherence to timelines and build out specifications utilizing relevant pop culture metrics in the creation of high level product roadmaps. These strategic frameworks ensure the legitmacy and potential success of future feature builds. Our combined vision has resulted in a stable, aesthetically pleasing application that has near limitless promotional protential utilizing digital art.",
    },
];

function Project(props){
    const {project} = props;

    return (
        <group {...props}>
            <mesh>
                <planeGeometry arg={[2.2,2]} />
                <meshBasicMaterial color="black" transparent opacity={0.4} />
            </mesh>
            <Image scale={[2, 1.2, 1]} url={project.image} toneMapped={false} position-y={0.3}/>
        </group>
    )
}

export default function Projects() {

    const { viewport } = useThree()
    return (
        <group position-y={-viewport.height * 2 + 1}>
            {
                projects.map((project, index) => {
                    <motion.group key={"project_" + index}>
                        <Project project={project } />
                    </motion.group>
                })
            }
        </group>
    )
}