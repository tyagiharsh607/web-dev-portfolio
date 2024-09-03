"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { BackgroundBeams } from "../../../components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WavyBackground } from "@/components/ui/wavy-background";


export function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef<HTMLFormElement>(null);


    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string; 
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY as string; 

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (name === "" || email === "" || message === "") {
            return toast.error("All Fields Are Required!!!");
        }

        try {
            emailjs
                .sendForm(
                    SERVICE_ID,
                    TEMPLATE_ID,
                    form.current!,
                    PUBLIC_KEY
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        toast.success("Message Sent Successfully!");
                        setName("");
                        setEmail("");
                        setMessage("");
                    },
                    (error) => {
                        console.log(error.text);
                        toast.error("Try Again!");
                    }
                );
        } catch (error) {
            console.log(error);
            toast.error("An unexpected error occurred.");
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="z-10 h-[47rem] sm:h-[44rem] w-full rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased overflow-hidden">
           
            <WavyBackground className="">
          
                <div className="mt-10 sm:mt-0 relative">
                    <div className="max-w-2xl mt-16 mx-auto flex flex-col justify-center align-middle p-4 relative z-10">

                        <h1 className="mt-4 text-3xl md:text-5xl text-center font-sans font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-blue-400/40 bg-opacity-50 capitalize">
                            Love to hear from you..!
                        </h1>
                        <p className="text-neutral-400 max-w-lg mx-auto my-1 text-sm text-center">
                            Interested in collaborating or hiring me? I'd love to hear from you! Share your ideas, project details, or job opportunities, and let's create something amazing together.
                        </p>
                        <form
                            ref={form}
                            onSubmit={handleSubmit}
                            className="space-y-4 mt-4"
                        >
                            <input
                                name="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name"
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-slate-500 w-full p-4 bg-black placeholder:text-neutral-500 outline-none"
                                required
                            />
                            <input
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email Address"
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-slate-500 w-full p-4 bg-black placeholder:text-neutral-500 outline-none"
                                required
                            />
                            <textarea
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your Message"
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-slate-500 w-full p-4 bg-black placeholder:text-neutral-500 outline-none"
                                rows={5}
                                required
                            ></textarea>
                            <Button
                                type="submit"
                                borderRadius="1.75rem"
                                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-medium tracking-wider transform transition-transform duration-300 hover:scale-105"
                            >
                                Send Message!
                            </Button>
                        </form>
                    </div>
                </div>
            </WavyBackground>
            <ToastContainer
                position="bottom-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}