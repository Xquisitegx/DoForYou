import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ViewFiles() {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [id, setId] = useState('');
    const [files, setFiles] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setId(localStorage.getItem('ID'));


        axios.get(`http://localhost:8000/api/admin/files/${id}`)
            .then(response => {
                setFiles(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    function downloadFile(fileId) {
        axios({
            url: `http://localhost:8000/api/admin/files/${id}/${fileId}`,
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            //console.log(response.data.type)
            const contentType = response.data.type;
            const extensions = {
                'application/pdf': '.pdf',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.doc',
            };
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            let filename = `${fileId}`; // default filename if name property not found
            if (response.data.name) {
                filename = response.data.name;
            }
            const extension = extensions[contentType] || '';
            filename = `${filename}.${extension}`;
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
        });
    }

    const postData = () => {
        axios.put(`http://localhost:8000/api/users/verify/${id}`, {
            verify: true
        },
        ).then((response) => {
            console.log(response);
            setErrorMessage("")
            setSuccessMessage("User has been verified")
        }).catch(error => {
            setSuccessMessage("")
            setErrorMessage("Something went wrong")
        });
    }

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl text-accent my-7">User: {first_name} {last_name}</h2>
                    </div>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal ">
                            <thead >
                                <tr>
                                    <th
                                        className="px-7 py-3 border-b-2 border-gray-200 bg-secondary text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        File Name
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-secondary text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        Size
                                    </th>
                                    <th
                                        className="px-10 py-3 border-b-2 border-gray-200 bg-secondary text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {files.map((file) => (
                                    <tr key={file._id}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white ">
                                            <div className="flex items-center">
                                                <div className="ml-3">
                                                    <p className="text-primary whitespace-no-wrap">
                                                        {file.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-primary whitespace-no-wrap">{file.size}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="relative bg-secondary text-white inline-block px-3 py-1 font-semibold leading-tight mx-3 w-25 text-center rounded-full">
                                                <button onClick={() => downloadFile(file._id)}>Download</button>
                                            </div>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-center">
                <p className="text-green-400">{successMessage}</p>
                <p className="text-red-400">{errorMessage}</p>
            </div>
                    <div class="flex justify-center items-baseline">
                        <div class="flex">
                        
                            <button onClick={postData}  class="w-40 mt-4 bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-500 mr-20">Verify</button>
                            <Link to='/view'>
                                <button  class=" w-40 mt-4 bg-secondary text-white py-2 px-6 rounded-md hover:bg-gray-500">Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}