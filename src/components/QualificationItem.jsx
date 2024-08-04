import React from 'react';

const QualificationItem = ({ level, stream, institute, board, year, percentage, division }) => {
    return (
        <tr className='bg-white border-b odd:bg-pink-50 even:bg-gray-50'>
            <td className="py-2 px-4 border-b">{level}</td>
            <td className="py-2 px-4 border-b">{stream}</td>
            <td className="py-2 px-4 border-b">{institute}</td>
            <td className="py-2 px-4 border-b">{board}</td>
            <td className="py-2 px-4 border-b">{year}</td>
            <td className="py-2 px-4 border-b">{percentage}</td>
            <td className="py-2 px-4 border-b">{division}</td>
        </tr>
    );
}

export default QualificationItem;
