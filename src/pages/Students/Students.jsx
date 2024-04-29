import { MaleUser } from '@/assets/';
import NavBar from "../NavBar/NavBar"
import React, { useState } from 'react';

// Sample student data
const studentsData = [
    { id: 1, name: 'John Doe', prn: '12345', branch: 'CSE - AI', class: 'TY' },
    { id: 2, name: 'Jane Doe', prn: '23456', branch: 'ECE', class: 'FY' },
    { id: 3, name: 'Alice Smith', prn: '34567', branch: 'CSE - AI', class: 'TY' },
    { id: 4, name: 'Bob Johnson', prn: '45678', branch: 'ECE', class: 'TY' },
    { id: 5, name: 'Emma Brown', prn: '56789', branch: 'MECH', class: 'FY' },
    { id: 6, name: 'Michael Wilson', prn: '67890', branch: 'CSE - AI', class: 'FY' },
    { id: 7, name: 'Sophia Lee', prn: '78901', branch: 'ECE', class: 'TY' },
    { id: 8, name: 'David Martinez', prn: '89012', branch: 'CSE - AI', class: 'FY' },
    { id: 9, name: 'Olivia Garcia', prn: '90123', branch: 'MECH', class: 'TY' },
    { id: 10, name: 'James Rodriguez', prn: '01234', branch: 'CSE - AI', class: 'FY' }
];

function Students() {
    // State for search input value and selected branch and class
    const [searchInput, setSearchInput] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
    const [selectedClass, setSelectedClass] = useState('');

    // Filtered students based on search input and selected branch and class
    const filteredStudents = studentsData.filter(student =>
        student.prn.includes(searchInput) &&
        (selectedBranch === '' || student.branch === selectedBranch) &&
        (selectedClass === '' || student.class === selectedClass)
    );

    return (
        <div className="bg-zinc-100">
            <div className="container mx-auto px-4">
                <header className="py-5">
                    <h1 className="text-3xl font-bold text-center">Students</h1>
                </header>
                <div className="bg-yellow-400 p-5 rounded-lg shadow-md">
                    <div className="flex gap-4 mb-4">
                        <input type="text" placeholder="Search by PRN" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="flex-1 p-2 rounded border border-zinc-300" />
                        <select value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)} className="p-2 rounded border border-zinc-300">
                            <option value="">All Branches</option>
                            <option value="CSE - AI">CSE - AI</option>
                            <option value="ECE">ECE</option>
                            
                        </select>
                        <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="p-2 rounded border border-zinc-300">
                            <option value="">All Classes</option>
                            <option value="TY">TY</option>
                            <option value="SY">SY</option>
                            <option value="FY">FY</option>
                            
                        </select>
                    </div>
                </div>
                <div className="mt-6">
                    {filteredStudents.map(student => (
                        <div key={student.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
                            <div className="flex items-center space-x-4 py-2 border-b border-zinc-200">
                                <img src={MaleUser} alt="Profile" className="rounded-full" />
                                <div className="flex-1">
                                    <p className="font-semibold">{student.name}</p>
                                    <p className="text-sm text-zinc-600">{student.prn}</p>
                                </div>
                                <p className="text-sm">{student.branch}</p>
                                <p className="text-sm">{student.class}</p>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded">Schedule meeting</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Students;


// import React, { useEffect } from "react";

// function Students() {
//     useEffect(() => {
//         // Wait for the DOM to fully load
//         document.addEventListener('DOMContentLoaded', () => {
//             const searchInput = document.querySelector('input[type="text"]');
//             const students = document.querySelectorAll('.bg-white');

//             if (!searchInput) return; // Check if searchInput exists

//             searchInput.addEventListener('input', () => {
//                 const searchValue = searchInput.value.toLowerCase();

//                 students.forEach(student => {
//                     const name = student.querySelector('.font-semibold').textContent.toLowerCase();
//                     if (name.includes(searchValue)) {
//                         student.style.display = 'block';
//                     } else {
//                         student.style.display = 'none';
//                     }
//                 });
//             });

//             // Clean up event listener on component unmount
//             return () => {
//                 searchInput.removeEventListener('input');
//             };
//         });
//     }, []); // Run effect only once on component mount

//     return (
//         <div className="mt-6">
//             <div className="bg-white p-4 rounded-lg shadow-md">
//                 <div className="flex items-center space-x-4 py-2 border-b border-zinc-200">
//                     <img src={MaleUser} alt="Profile" className="rounded-full w-10 h-10" />
//                     <div className="flex-1">
//                         <p className="font-semibold">firstname lastname</p>
//                         <p className="text-sm text-zinc-600">PRN number</p>
//                     </div>
//                     <p className="text-sm">branch</p>
//                     <p className="text-sm">class</p>
//                     <button className="bg-blue-500 text-white px-4 py-2 rounded">Schedule meeting</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Students;
