import { PlusIcon, UploadCloudIcon, FilePenLineIcon, TrashIcon, PencilIcon } from 'lucide-react'
import React from 'react'
import { dummyResumeData } from '../assets/assets'

const Dashboard = () => {
    const [allResumes, setAllResumes] = React.useState([])
    const [showCreateResume, setShowCreateResume] = React.useState(false)
    const [showUploadResume, setShowUploadResume] = React.useState(false)

    const bgColors = [
        'linear-gradient(135deg, #a5b4fc10, #6366f140)',
        'linear-gradient(135deg, #d8b4fe10, #a21caf40)',
        'linear-gradient(135deg, #f9a8d410, #db277740)',
        'linear-gradient(135deg, #6ee7b710, #04785740)',
        'linear-gradient(135deg, #fde68a10, #ca8a0440)',
        'linear-gradient(135deg, #fca5a510, #b91c1c40)',
        'linear-gradient(135deg, #93c5fd10, #2563eb40)'
    ]

    const borderColors = [
        '#6366f140',
        '#a21caf40',
        '#db277740',
        '#04785740',
        '#ca8a0440',
        '#b91c1c40',
        '#2563eb40'
    ]

    const iconColors = [
        '#6366f1',
        '#a21caf',
        '#db2777',
        '#047857',
        '#ca8a04',
        '#b91c1c',
        '#2563eb'
    ]

    const loadAllResumes = async () => {
        setAllResumes(dummyResumeData)
    }
    React.useEffect(() => {
        loadAllResumes()
    }, [])

    return (
        <div>
            <div className='max-w-7xl mx-auto px-4 py-8'>
                <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden'>Welcome, Joe Doe</p>

                <div className='flex gap-4'>
                    <button className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
                        <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full' />
                        <p className='text-sm group-hover:text-indigo-600 transition-all duration-300'>Create Resume</p>
                    </button>
                    <button className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
                        <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-purple-500 text-white rounded-full' />
                        <p className='text-sm group-hover:text-purple-600 transition-all duration-300'>Upload Resume</p>
                    </button>
                </div>

                <hr className='border-slate-300 my-6 sm:w-[305px]' />

                <div className='grid grid-cols-2 sm:flex flex-wrap gap-4'>
                    {allResumes.map((resume, idx) => {
                        const bgColor = bgColors[idx % bgColors.length];
                        const borderColor = borderColors[idx % borderColors.length];
                        const iconColor = iconColors[idx % iconColors.length];
                        return (
                            <button
                                key={idx}
                                className='relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer'
                                style={{
                                    background: bgColor,
                                    borderColor: borderColor,
                                }}
                            >
                                <FilePenLineIcon className='size-7 group-hover:scale-105 transition-all' style={{ color: iconColor }} />
                                <p className="text-sm group-hover:scale-105 transition-all px-2 text-center" style={{color: bgColor}}>{resume.title}</p>
                                <p className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center" style={{color: bgColor}}> Updated on {new Date(resume.updatedAt).toLocaleDateString()} </p>
                                <div className='absolute top-1 right-1 group-hover:flex items-center hidden'>
                                    <TrashIcon className='size-7 p-1.5 text-slate-600 hover:text-red-500 rounded transition-colors duration-300' />
                                </div>
                                <div className='absolute top-1 left-1 group-hover:flex items-center hidden'>
                                    <PencilIcon className='size-7 p-1.5 text-slate-600 hover:text-blue-500 rounded transition-colors duration-300' />
                                </div>
                            </button>
                        )
                    })}
                </div>

                {/* {showCreateResume && (
                    <form className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 flex items-center justify-center z-50'>

                        <div className='bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md'>
                            <h2 className='text-xl font-semibold mb-4'>Create New Resume</h2>
                            <input type="text" placeholder='Resume Title' className='w-full border border-slate-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500' />
                            <div className='flex justify-end gap-2'>} */}

            </div>
        </div>
    )
}

export default Dashboard
