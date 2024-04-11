import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{className?:string}>) => {
    const sectionClasses = `max-w-3xl px-4 m-auto ${props.className || ''}`;

    return (
        <section className={sectionClasses}>
            {props.children}
        </section>
    );
};
