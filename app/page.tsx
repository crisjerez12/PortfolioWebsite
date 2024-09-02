"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Marquee from "@/components/component/LanguagesMarquee";
import {
  ArrowLeftIcon,
  MoonIcon,
  NavigationIcon,
  SunIcon,
  XIcon,
} from "lucide-react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className={`flex flex-col min-h-[100dvh] ${isDarkMode ? "dark" : ""}`}>
      <header className="sticky top-0 z-10 w-full bg-background dark:bg-muted transition-colors duration-300">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="#" className="text-lg font-bold" prefetch={false}>
            Ariser
          </Link>
          <nav
            className={`flex items-center gap-4 md:gap-6 ${
              isNavOpen ? "flex" : "hidden md:flex"
            }`}
          >
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Skills
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Contact
            </Link>
            <button
              className={`flex items-center justify-center rounded-full w-8 h-8 transition-colors ${
                isDarkMode
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-muted text-muted-foreground hover:bg-muted/90"
              }`}
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </nav>
          <button
            className="md:hidden flex items-center justify-center rounded-full w-8 h-8 transition-colors bg-muted text-muted-foreground hover:bg-muted/90"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <NavigationIcon className="w-5 h-5" />
          </button>
        </div>
      </header>
      {isNavOpen && (
        <div className="fixed inset-0 z-20 bg-background/80 backdrop-blur-sm dark:bg-muted/80 flex justify-center items-center">
          <nav className="bg-background dark:bg-muted p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
            <div className="flex justify-between items-center">
              <Link
                href="#"
                className="block text-lg font-medium hover:underline"
                onClick={() => setIsNavOpen(false)}
                prefetch={false}
              >
                Home
              </Link>
              <button
                className={`flex items-center justify-center rounded-full w-8 h-8 transition-colors ${
                  isDarkMode
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-muted text-muted-foreground hover:bg-muted/90"
                }`}
                onClick={() => {
                  setIsDarkMode(!isDarkMode);
                  setIsNavOpen(false);
                }}
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <Link
              href="#"
              className="block text-lg font-medium hover:underline"
              onClick={() => setIsNavOpen(false)}
              prefetch={false}
            >
              Skills
            </Link>
            <Link
              href="#"
              className="block text-lg font-medium hover:underline"
              onClick={() => setIsNavOpen(false)}
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="#"
              className="block text-lg font-medium hover:underline"
              onClick={() => setIsNavOpen(false)}
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
      <section
        id="hero"
        className="w-full py-12 md:py-24 lg:py-32 animate__animated animate__bounceIn"
      >
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Cris Jerez
            </h1>
            <h2 className="text-2xl font-semibold text-muted-foreground">
              Junior Full-Stack Developer
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am a passionate and driven Junior Full-Stack Developer with a
              strong foundation in JavaScript, React, Next.js, Express, Node.js,
              MongoDB, MySQL, and TypeScript. I am eager to contribute my skills
              and knowledge to help your organization achieve its goals.
            </p>
          </div>
          <div className="flex flex-col items-start space-y-4 animate__animated animate__slideInRight">
            <Image
              src="/placeholder.svg"
              width="400"
              height="400"
              alt="John Doe"
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
            />
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-background animate__animated animate__slideInLeft"
      >
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Technical Skills
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I have a strong command of the following technologies:
            </p>
          </div>
          <Marquee
            items={[
              "Javascript",
              "ReactJS",
              "NextJS",
              "ExpressJS",
              "NodeJS",
              "Typescript",
              "MySQL",
            ]}
          />
        </div>
      </section>
      <section
        id="projects"
        className="w-full py-12 md:py-24 lg:py-32 animate__animated animate__bounceIn"
      >
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I&apos;ve worked on:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Project 1"
                  className="rounded-t-lg object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold">Project 1</h3>
                <p className="text-muted-foreground">
                  A full-stack web application built with React, Next.js,
                  Express, and MongoDB. It features user authentication, CRUD
                  operations, and real-time updates.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Project
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Project 2"
                  className="rounded-t-lg object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold">Project 2</h3>
                <p className="text-muted-foreground">
                  A mobile-friendly e-commerce website built with React,
                  Next.js, and a MySQL backend. It includes features like
                  product listings, shopping cart, and checkout.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Project
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Project 3"
                  className="rounded-t-lg object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold">Project 3</h3>
                <p className="text-muted-foreground">
                  A real-time chat application built with React, Socket.IO, and
                  Node.js. It features user authentication, private messaging,
                  and group chat functionality.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Project
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-background animate__animated animate__slideInRight"
      >
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;m always excited to connect with new people and explore
              potential opportunities. Feel free to reach out to me using the
              form below.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-4">
              <Input
                type="text"
                placeholder="Name"
                className="max-w-lg flex-1"
              />
              <Input
                type="email"
                placeholder="Email"
                className="max-w-lg flex-1"
              />
              <Textarea placeholder="Message" className="max-w-lg flex-1" />
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Ariser. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
        </nav>
      </footer>
      <button
        className="fixed bottom-4 right-4 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-transform hover:scale-110"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowLeftIcon />
      </button>
    </div>
  );
}
