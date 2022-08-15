import { useEffect, useState } from "react";
import { useUser } from "../../hooks";

const UsersListTable = () => {

    const [page, setPage] = useState(1);

    const { getUsersByPagination, users} = useUser();

    useEffect(() => {
        getUsersByPagination()
    },[])

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <tbody className="card divide-y divide-gray-200">
                                {users.map((user) => (
                                <tr key={user.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className=" font-medium text-[#00c49f] truncate">{user.fullName}</div>
                                                <div className="text-sm text-gray-500">{user.gender}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">{user.country}</div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> 
                </div>
            </div>
            <nav
                className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-2"
                aria-label="Pagination"
            >
                <div className="hidden sm:block">
                    <div className="flex flex-row justify-center items-center">
                        <button
                            type="button"
                            onClick={() => {getUsersByPagination(1); setPage(1)}}
                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            First Page
                        </button>
                        <p className="ml-4 text-sm text-gray-700">
                            Showing page <span className="font-medium">{page}</span>
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex justify-between sm:justify-end">
                    <button
                        type="button"
                        onClick={() => {getUsersByPagination(page == 1 ? 1 : page - 1); setPage(page == 1 ? 1 : page - 1)}}
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        onClick={() => { getUsersByPagination(page + 1); setPage(page + 1);}}
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Next
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default UsersListTable;