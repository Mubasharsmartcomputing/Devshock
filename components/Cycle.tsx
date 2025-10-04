import Image from "next/image";

export default function Cycle() {
    return (
        <div className="flex flex-col container mx-auto justify-center items-center pb-8 md:pb-12 lg:pb-16 px-4 md:px-6 lg:px-8 space-y-4 md:space-y-6">
            {/* Heading with brand color */}
            <h2 className="text-4xl font-bold text-center mb-4" style={{color: '#4169E1'}}>
                End To End Development Cycle
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white text-center">
                Guiding principles that drive everything we do at Devshock
            </p>
            {/* Image section */}
            <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
                <Image
                    src="/cyyle.png"
                    alt="End to End Development Cycle"
                    width={1400}
                    height={600}
                    className="w-full h-auto object-contain rounded-lg md:rounded-xl lg:rounded-2xl"
                    priority={false}
                    loading="lazy"
                />
            </div>
        </div>
    );
}