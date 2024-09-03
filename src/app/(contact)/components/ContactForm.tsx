"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
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
        <div className="mt-10 md:mt-0 z-10 min-h-screen w-full rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased overflow-hidden p-4">
            <WavyBackground className="">
                <div className="relative w-full max-w-lg md:max-w-2xl mt-8 sm:mt-0 mx-auto flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
                    <h1 className="mt-4 text-2xl sm:text-3xl md:text-5xl text-center font-sans font-bold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-blue-400/40 capitalize">
                        Love to hear from you..!
                    </h1>
                    <p className="text-neutral-400 max-w-sm sm:max-w-md md:max-w-lg mx-auto my-2 sm:my-3 text-xs sm:text-sm md:text-base text-center">
                        Interested in collaborating or hiring me? I'd love to hear from you! Share your ideas, project details, or job opportunities, and let's create something amazing together.
                    </p>
                    <form
                        ref={form}
                        onSubmit={handleSubmit}
                        className="space-y-3 sm:space-y-4 mt-4 w-full"
                    >
                        <input
                            name="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-slate-500 w-full p-3 sm:p-4 bg-black placeholder:text-neutral-500 outline-none"
                            required
                        />
                        <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email Address"
                            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-slate-500 w-full p-3 sm:p-4 bg-black placeholder:text-neutral-500 outline-none"
                            required
                        />
                        <textarea
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your Message"
                            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-slate-500 w-full p-3 sm:p-4 bg-black placeholder:text-neutral-500 outline-none"
                            rows={4}
                            required
                        ></textarea>
                        <Button
                            type="submit"
                            borderRadius="1.75rem"
                            className="w-full bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-medium tracking-wider transform transition-transform duration-300 hover:scale-105"
                        >
                            Send Message!
                        </Button>
                    </form>
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
