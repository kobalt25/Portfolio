import ProjectList from "@/app/projects/utils";
import Image from "next/image";
import profilePic from "@/public/profile.png"; // replace with your image path

export default function Page() {
    return (
        <section
            className="min-h-screen flex justify-center items-start py-12 px-4"
            style={{
                background: "linear-gradient(135deg, #4e7c78, #223333)",
            }}
        >
            {/* Main content container */}
            <div
                className="w-full max-w-3xl rounded-2xl p-8 shadow-lg"
                style={{ backgroundColor: "#2C7A7B" }}
            >
                {/* Page Title */}
                <div className="flex items-center justify-center mb-6">
                    <h1 className="text-3xl font-semibold tracking-tighter text-white">
                        kobalt25
                    </h1>
                    <Image
                        src={profilePic}
                        alt="Profile"
                        width={80}
                        height={80}
                        className="rounded-full ml-8" // added margin-left for extra spacing
                    />
                </div>
                <p className="text-center text-xl font-semibold tracking-tighter text-white">
                    {'Welcome'}
                </p>
                <p className="text-center text-gray-100 mb-8">
                    {'These are my projects that are public on GitHub'}
                </p>

                {/* Project List */}
                <div className="mt-8">
                    <ProjectList />
                </div>
            </div>
        </section>
    );
}
