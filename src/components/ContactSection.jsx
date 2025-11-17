import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
export const ContactSection = () => {
    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a
                                        href="mailto:hello@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        mustafasayed1025@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a
                                        href="tel:+819070963394"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        (+81) 090-7096-3394
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Nerima, Tokyo, Japan
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/mustafa-sayed-5640b9238/" target="_blank" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Why Work With Me?</h3>

                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <div className="w-3 h-3 rounded-full bg-primary mt-2"></div>
                                <p className="text-muted-foreground">
                                    <span className="font-medium text-foreground">Full-Stack Expertise: </span>
                                    Experience building modern, scalable apps with React, Next.js, .NET, Node.js, and more.
                                </p>
                            </li>

                            <li className="flex items-start space-x-3">
                                <div className="w-3 h-3 rounded-full bg-primary mt-2"></div>
                                <p className="text-muted-foreground">
                                    <span className="font-medium text-foreground">Strong Problem-Solving: </span>
                                     I deliver clean architecture, maintainable code, and practical solutions.
                                </p>
                            </li>

                            <li className="flex items-start space-x-3">
                                <div className="w-3 h-3 rounded-full bg-primary mt-2"></div>
                                <p className="text-muted-foreground">
                                    <span className="font-medium text-foreground">Fast Communication: </span>
                                     Professional, responsive, and easy to collaborate with across cultures.
                                </p>
                            </li>

                            <li className="flex items-start space-x-3">
                                <div className="w-3 h-3 rounded-full bg-primary mt-2"></div>
                                <p className="text-muted-foreground">
                                    <span className="font-medium text-foreground">Reliable & Detail-Oriented: </span>
                                     I care about quality, UI/UX consistency, and long-term maintainability.
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
