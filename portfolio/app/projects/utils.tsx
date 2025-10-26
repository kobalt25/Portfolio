"use client";
import React, { useState } from "react";
import data from "@/app/projects/projects.json";
import LanguageFilter from "@/app/projects/LanguageFilter";

interface Project {
    title: string;
    languages: string[];
    link: string;
}

const projects = data as Project[];

const ProjectList = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

    const allLanguages = Array.from(
        new Set(projects.flatMap((p) => p.languages ?? []))
    );

    const filteredProjects = selectedLanguage
        ? projects.filter((p) => (p.languages ?? []).includes(selectedLanguage))
        : projects;

    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="text-2xl font-bold mb-4 text-center text-white">Projects</h2>
            {/* Filter Banner */}
            {allLanguages.length > 0 && (
                <div className="w-full max-w-3xl bg">
                    <LanguageFilter
                        languages={allLanguages}
                        selectedLanguage={selectedLanguage}
                        onSelectLanguage={setSelectedLanguage}
                    />
                </div>
            )}

            {/* Project list */}
            <div className="w-full max-w-3xl mt-4">

                <ul className="space-y-3">
                    {filteredProjects.map((project) => (
                        <li
                            key={project.title}
                            className="border border-[#276e6f] p-4 rounded-2xl shadow-md hover:shadow-lg transition bg-[#1f5e5f]"
                            style={{
                                background: "linear-gradient(160deg, #183C3A, #1E4A47",
                                border: "1px solid rgba(79, 209, 197, 0.2",
                                boxShadow: "0 4px 30px rgba(79, 209, 297, 0.1",
                            }}
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#a2f5e9] font-semibold hover:underline text-lg"
                            >
                                {project.title}
                            </a>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {(project.languages ?? []).map((lang) => (
                                    <span
                                        key={lang}
                                        className="px-3 py-1 rounded-full text-xs bg-[#28a79b] text-white border border-[#1f5e5f]"
                                    >
                    {lang}
                  </span>
                                ))}
                            </div>
                        </li>
                    ))}
                    {filteredProjects.length === 0 && (
                        <p className="text-gray-100 italic">No projects found.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ProjectList;
