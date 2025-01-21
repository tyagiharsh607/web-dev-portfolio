"use client"
import React, { useState, useRef, useEffect } from 'react';
import styles from "./Chatbot.module.css";
import { StartChat, GetResponse } from './model';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

import botIcon from "../../../public/image/bot-icon.png";

// Define types for message structure
type Message = {
    text: string | JSX.Element;
    sender: 'user' | 'bot';
};

const ChatBotAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isInitialized, setIsInitialized] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    // Scroll to the bottom of the messages when new ones are added
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const toggleChat = async () => {
        if (!isInitialized) {
            const response = await StartChat();
            setMessages([{ text: response, sender: 'bot' }]);
            setIsInitialized(true);
        }
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputMessage.trim() !== '') {
            const userMessage: Message = { text: inputMessage, sender: 'user' }; // Explicitly type userMessage
            setMessages((prev) => [...prev, userMessage]);

            setInputMessage('');

            // Get response from API
            const response = await GetResponse(inputMessage);
            const botMessage: Message = { text: <ReactMarkdown>{response}</ReactMarkdown>, sender: 'bot' }; // Explicitly type botMessage
            setMessages((prev) => [...prev, botMessage]);
        }
    };

    const getCurrentTime = () => {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className={styles.chatBotContainer}>
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    className="bg-blue-500 hover:bg-blue-600 rounded-full w-16 h-16 shadow-lg transform transition-transform ease-in-out"
                >
                    <Image
                        src={botIcon}
                        alt="Chat Icon"
                        className="w-10 h-10 object-contain mx-auto animate-move-left-right"  // Apply the left-right movement
                    />
                </button>

            )}
            {isOpen && (
                <div className={styles.chatBox}>
                    <div className={styles.chatHeader}>
                        <div className={styles.headerInfo}>
                            <h3>Charlie Assistant</h3>
                        </div>
                        <button onClick={toggleChat} className={styles.closeButton}>
                            ✕
                        </button>
                    </div>
                    <div className={styles.chatMessages}>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`${styles.message} ${message.sender === 'user' ? styles.user : styles.bot}`}
                            >
                                <div className={styles.messageContent}>
                                    <span>{message.text}</span>
                                    <div className={styles.messageTime}>{getCurrentTime()}</div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <form onSubmit={handleSendMessage} className={styles.chatInputForm}>
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Type your message here..."
                            className={styles.chatInput}
                        />
                        <button type="submit" className=" ml-2 bg-blue-500  rounded-full w-14 h-14">
                            <Image
                                src={botIcon}
                                alt="Chat Icon"
                                className="w-10 h-10 object-contain mx-auto "  // Apply the left-right movement
                            />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ChatBotAssistant;
