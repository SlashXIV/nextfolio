import { Section } from './Section';
import { Button, buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import Link from 'next/link';
import { cn } from "@/lib/utils";


export const Header = () => {
    return (

        <header className='sticky top-0 py-4'>
            <Section className='flex items-baseline'>
                <h1 className="text-lg font-bold text-primary">
                    Portfolio
                </h1>
                <div className="flex-1">
                    <ul className='flex items-center gap-2'>
                        <Link href="https://github.com/slashxiv" className={cn(buttonVariants({variant: 'outline'}), "size-6 p-0")} >
                        <GithubIcon size={16} className="text-foreground" />
                        </Link >

                        { /* Add here more social media links */}

                    </ul>
                </div>
            </Section>
        </header>
    )
}