import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Socials(){
    return (
        <section id="contact" className="relative px-5 py-10 mx-auto">
            <div className="flex justify-center space-x-2">
                <SocialIcon bgColor="white" fgColor="transparent" url="https://www.linkedin.com/in/gerard-v/" />
                <SocialIcon bgColor="white" fgColor="transparent" url="https://discord.com/channels/@.gerrinator" />
                <SocialIcon bgColor="white" fgColor="transparent" url="https://github.com/Gerrinator" />
            </div>
        </section>
    )
}