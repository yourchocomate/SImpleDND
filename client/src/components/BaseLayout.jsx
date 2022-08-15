import { Sidebar } from "./ui";

const BaseLayout = ({children}) => {
    return (
        <>
            <Sidebar>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="py-4">
                        {children}
                    </div>
                </div>
            </Sidebar>
        </>
    );
}

export default BaseLayout;