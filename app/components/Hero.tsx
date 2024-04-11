import { cn } from "@/lib/utils"
import { Section } from "./Section"
import pp from './icons/pp.png'
import { ComponentPropsWithoutRef } from "react"
import { ReactIcon } from "./icons/ReactIcon"
import Link from 'next/link'

const Code = ({ className, ...props }: ComponentPropsWithoutRef<'span'>) => {
    return <span className={cn('bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent px-1 py-0.5 -m-1 text-primary rounded-sm', className)} {...props} />
}

export const Hero = () => {

    return (

        <Section className="flex max-md:flex-col items-starts gap-4">

            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary" >
                    Gabriel Ifrim
                </h2>
                <h3 className="text-3xl font-caption">
                    Student & Web Developer
                </h3>
                <p className="text-base">
                    I love to build things with {' '}
                    <Link href="https://fr.react.dev/">
                        <Code className="inline-flex items-center gap-1"> <ReactIcon size={12} className="inline" />React</Code>
                    </Link>{' '}
                    and {' '}
                    <Link href="https://nextjs.org/">
                        <Code className="inline-flex items-center gap-1"> NextJS</Code>
                    </Link> {' '}.
                    Living in 
                    <Code className="inline-flex items-center gap-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/langfr-225px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png" 
                    style={{width:16, height:"auto" }} alt="France Flag" />France
                    </Code>.

                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img src={pp.src} alt="Gabriel Ifrim" className="w-full h-auto max-w-xs max-md:w-56  rounded-3xl" />
            </div>

        </Section>

    );
}
