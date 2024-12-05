"use client";
import { ElementWrapper } from "@/api/entities/Framework";
import Link from "next/link";

interface PageNavigationProps {
    previous?: ElementWrapper | undefined;
    next?: ElementWrapper | undefined;
}

export const ContentNavigation = ({ previous, next }: PageNavigationProps) => {
    let nextClasses = "rounded-r-lg rounded-l-lg";
    if (previous) {
        nextClasses = "rounded-r-lg";
    }
    let prevClasses = "rounded-r-lg rounded-l-lg";
    if (next) {
        prevClasses = "rounded-l-lg border-r";
    }

    return (
        <aside className="flex flex-row">
            {previous && (
                <Link
                    href={`/r3/requirement/${previous.requirement}`}
                    className={`flex flex-row items-center bg-gray-200 text-gray-700 border-gray-400 py-2 px-4 border-b-4 hover:bg-gray-300 ${prevClasses}`}
                >
                    <svg
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 19l-7-7 7-7"
                        ></path>
                    </svg>
                    <span className="mr-4 ml-2">
                        {previous.requirement}: {previous.title}
                    </span>
                </Link>
            )}
            {next && (
                <Link
                    href={`/r3/requirement/${next.requirement}`}
                    className={`flex flex-row items-center bg-gray-200 text-gray-700 border-gray-400 py-2 px-4 border-b-4 hover:bg-gray-300 ${nextClasses}`}
                >
                    <span className="ml-4 mr-2">
                        {next.requirement}: {next.title}
                    </span>
                    <svg
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            )}
        </aside>
    );
};
