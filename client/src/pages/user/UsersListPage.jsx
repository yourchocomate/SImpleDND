import { BaseLayout } from "../../components";
import { UsersListTable } from "../../components/sections";

const UsersListPage = () => {
    return (
        <BaseLayout>
            <div className="p-2">
                <UsersListTable/>
            </div>
        </BaseLayout>
    );
}

export default UsersListPage;