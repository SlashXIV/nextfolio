import { Section } from './Section';
import { Card } from '@/components/ui/card'

export const Status = () => {
    return (
            <Section className="flex max-md:flex-col items-start gap-4"> 
                <Card className='flex-[3] w-full h-full flex flex-col gap-2 px-4'> Side Projects </Card>

                <div className='flex-[2] gap-4  flex flex-col'>
                    <Card className='px-4 flex-1'>Work</Card>
                    <Card className='px-4 flex-1'>Contact me</Card>
                </div>
            </Section>
    );
};
