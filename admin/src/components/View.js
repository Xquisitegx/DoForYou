import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function View() {

    const [APIData, setAPIData] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [filesCount, setFilesCount] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/verify/false`)
            .then((response) => {
                setAPIData(response.data);
                // Retrieve files count for each user

                const promises = response.data.map(user =>
                    axios.get(`http://localhost:8000/api/admin/files/${user._id}`)
                        .then((response) => {
                            console.log(response.data.length)
                            setFilesCount(prevState => ({
                                ...prevState,
                                [user._id]: response.data.length

                            }));
                        })
                );
                Promise.all(promises).then(() => console.log('All files count retrieved'));
            })
    }, []);

    const getData = () => {
        axios.get(`http://localhost:8000/api/users/`)
            .then((getData) => {
                setAPIData(getData.data);
            }).catch(error => {
                console.log(error)
            });
    }

    const setData = (data) => {
        let { _id, firstname, lastname, verified } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('First Name', firstname);
        localStorage.setItem('Last Name', lastname);
        localStorage.setItem('Verified', verified);
    }

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl text-accent my-7">Dashboard</h2>
                    </div>
                    <div className="ml-auto">
                        <a href="/"
                            className="text-sm bg-secondary border text-white py-2 px-6 rounded-md hover:bg-primary hover:border font-semibold py-2 px-4 rounded">
                            Logout
                        </a>
                    </div>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">

                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">

                        <table className="min-w-full leading-normal ">
                            <thead >
                                <tr>
                                    <th
                                        className="px-7 py-3 border-b-2 border-gray-200 bg-secondary text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        User
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-secondary text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th
                                        className="px-10 py-3 border-b-2 border-gray-200 bg-secondary text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        Action
                                    </th>
                                    <th
                                        className="px-10 py-3 border-b-2 border-gray-200 bg-secondary text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        Files
                                    </th>
                                </tr>
                            </thead>
                            {APIData.map((data) => {
                                return (
                                    <tbody>

                                        <tr>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white ">
                                                <div className="flex items-center">

                                                    <div className="ml-3">
                                                        <p className="text-primary whitespace-no-wrap">
                                                            {data.firstname} {data.lastname}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-primary whitespace-no-wrap">{data.verified ? 'Verified' : 'Not Verified'}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span
                                                    className="relative inline-block px-3 py-1 font-semibold text-primary leading-tight mx-3 w-20 text-center">
                                                    <span aria-hidden
                                                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                    <Link to='/viewFiles'>
                                                        <button onClick={() => setData(data)} className="relative">View</button>
                                                    </Link>

                                                </span>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-md font-semibold">
                                                <p className={`ml-7 whitespace-no-wrap ${filesCount[data._id] > 0 ? 'text-red-600' : 'text-primary'}`}>{filesCount[data._id] || 0}</p>
                                            </td>

                                        </tr>
                                    </tbody>
                                )
                            })}
                        </table>
                    </div>
                    <p className="mt-8 text-green-400">{successMessage}</p>
                </div>
            </div>
        </div>

    )
}