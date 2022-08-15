import { BaseLayout } from "../../components";
import { AUCharts } from "../../components/sections";
import { Segmentation } from "../../components/ui";

const DashboardPage = () => {
    return (
        <BaseLayout>
            <div className="flex flex-col">
                <div className="flex justify-end">
                    <Segmentation/>
                </div>
                <AUCharts/>
            </div>
        </BaseLayout>
                            
    );
}

export default DashboardPage;