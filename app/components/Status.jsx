import { Section } from './Section';
import { Card } from '@/components/ui/card'
import {Code, Citrus, Squirrel, Crown, Book, Search} from "lucide-react";
import Link from 'next/link';



export const Status = () => {
    return (
            <Section className="flex max-md:flex-col items-start gap-4"> 
                {/*<Card className='flex-[3] w-full h-full flex flex-col gap-2 px-4'> Side Projects </Card>

                <div className='flex-[2] gap-4  flex flex-col'>
                    <Card className='px-4 flex-1'>Work</Card>
                    <Card className='px-4 flex-1'>Contact me</Card>
    </div> */}

            <div className='flex-[3] w-full'>
                <Card className='w-full flex flex-col gap-2 px-4 w-ful'>
                    <div className="flex flex-col gap-4 ">
                        <p className="text-lg text-muted-foreground">Side projects</p>
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url={project.url}
                            />
                        ))}
                    </div>
                </Card>
            </div>


            <div className='flex-[2]  gap-4 flex  flex-col'>
                <Card className='flex-1 px-4 '>
                    <div className="flex flex-col gap-4 ">
                    <p className="text-lg text-muted-foreground text-center">Work</p>
                        {WORK_PROJECTS.map((project, index) => (
                            <WorkProject
                                key={index}
                                Logo={project.logo}
                                title={project.title}
                                role={project.role}
                                url={project.url}
                                date={project.date}
                            />
                        ))}
                    </div>
                </Card>
                <Card className='flex-1 px-4 '>
                    <div className="flex flex-col gap-4 ">
                    <p className="text-lg text-muted-foreground text-center">Contact me</p>
                        {CONTACTS.map((contact, index) => (
                            <Contact
                                key={index}
                                title={contact.title}
                                description={contact.description}
                                url={contact.url}
                            />
                        ))}
                    </div>
                </Card>
            </div>


            </Section>
    );
};

const SIDE_PROJECTS = [
    {
        Logo: Citrus,
        title: "Takiwizu",
        description: "School project, in which we are remaking the game Takuzu {C}.",
        url : "https://github.com/SlashXIV/takiwizu"
    },
    {
        Logo: Crown,
        title: "UB Garden",
        description: " Java 2D game project, where a plumber has to save the princess {JAVA}.",
        url : "https://github.com/SlashXIV/UB_Garden-RG"
    },
    {
        Logo: Book,
        title: "Readspot",
        description: "Personal project, website where you can note your readings {ExpressJS, MongoDB, Vue3JS}.",
        url : "not available"
    },
    {
        Logo : Code,
        title: "Portfolio",
        description: "Personal project, website where you can find my resume {NextJS}.",
        url : "/"
    }

]




const SideProject = (props) =>
    {

    return(
    <Link href={props.url} className='inline-flex items-center gap-4 hover:bg-accent/50 transition-colors px-1 rounded-lg'>
        <div className="flex items-center">
            <span className='bg-accent text-accent-foreground px-3 rounded-sm'>
                <props.Logo size={16} className=''/>
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </div>
    </Link>

    )
}



const WORK_PROJECTS = [
    {
        logo : Search,
        title: "SneakyMole",
        role: "Internship project",
        url : "not available",
        date : "2023 - 2 months"
    },

]




const WorkProject = (props) => {
    return (
        <Link href={props.url} className='inline-flex items-center gap-4 hover:bg-accent/50 transition-colors px-1 rounded-lg'>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center">

                    <div className="ml-2"> 
                        <p className="text-md font-semibold">{props.title}</p>
                        <p className="text-sm text-muted-foreground">{props.role}</p>
                    </div>
                </div>
                <div className='text-right'>
                    <p className="text-xs text-muted-foreground">{props.date}</p>
                </div>
            </div>
        </Link>
    )
}

const CONTACTS = [
    {
        title: "Mail",
        description: "ifrimcontactpro@gmail.com",
        url : "mailto:ifrimcontactpro@gmail.com"
    },
    {
        title: "Phone",
        description: "+33783719581",
        url : "tel:+33783719581"
    },
]


const Contact = (props) => {
    return (
        <div href={props.url} className='inline-flex items-center gap-4  transition-colors px-1 rounded-lg'>
            <div className="flex items-center">

                <div>
                    <p className="text-sm font-semibold">{props.title}</p>
                    <p className="text-sm text-muted-foreground">{props.description}</p>
                </div>
            </div>
        </div>
    )
}



