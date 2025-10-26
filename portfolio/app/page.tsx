import ProjectList from "@/app/projects/utils";
import Image from "next/image";
import profilePic from "@/public/profile.png"; // replace with your image path

export default function Page() {
    return (
        <section
            className="min-h-screen flex justify-center items-start py-12 px-4"
            style={{
                background: "linear-gradient(135deg, #0F1F1F, #1A2E2E)",
            }}
        >
            {/* Main content container */}
            <div
                className="w-full max-w-3xl rounded-2xl p-8 shadow-xl backdrop-blur-md"
                style={{
                    background: "linear-gradient(160deg, #245F5A, #1E4A47)", // dark seafoam gradient
                    border: "1px solid rgba(80, 200, 180, 0.2)",
                }}
            >
                {/* Page Title */}
                <div className="flex items-center justify-center mb-6">
                    <h1 className="text-3xl font-semibold text-white tracking-tighter">
                        kobalt25
                    </h1>
                    <Image
                        src={profilePic}
                        alt="Profile"
                        width={80}
                        height={80}
                        className="rounded-full ml-8 ring-2 ring-white ring-offset-1 ring-offset-[#2C7A7B] hover:scale-105 transition-transform duration-300" // added margin-left for extra spacing
                    />
                </div>
                <p className="text-center text-2xl font-semibold tracking-tighter text-gray-200 ">
                    {'Welcome'}
                </p>
                <p className="text-center mt-2 text-[#4FD1C5]">
                    {'These are my projects that are public on GitHub'}
                </p>

                {/* Project List */}
                <div className="mt-10">
                    <ProjectList />
                </div>
            </div>
        </section>
    );
}
