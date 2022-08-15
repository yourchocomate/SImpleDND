const NotFound = () => {
    return (
        <div class="relative overflow-hidden h-screen">
            <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                <div class="w-full font-mono flex flex-col items-center relative z-10">
                    <h1 class="font-extrabold text-5xl text-center text-[#00cc9f]  leading-tight mt-4">
                        You are all alone here
                    </h1>
                    <p class="font-extrabold text-8xl my-44 text-[#00cc9f]  animate-bounce">
                        404
                    </p>
                </div>
            </div>
        </div>

    )
}

export default NotFound;