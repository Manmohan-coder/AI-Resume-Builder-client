import {
    PlusIcon,
    UploadCloudIcon,
    FilePenLineIcon,
    TrashIcon,
    PencilIcon,
    XIcon,
    UploadCloud,
} from 'lucide-react';
import React from 'react';
import { dummyResumeData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [allResumes, setAllResumes] = React.useState([]);
    const [showCreateResume, setShowCreateResume] = React.useState(false);
    const [showUploadResume, setShowUploadResume] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [editResumeId, setEditResumeId] = React.useState('');
    const [resume, setResume] = React.useState(null);
    // Removed unused editResumeId
    const navigate = useNavigate();

    const bgColors = [
        'linear-gradient(135deg, #a5b4fc10, #6366f140)',
        'linear-gradient(135deg, #d8b4fe10, #a21caf40)',
        'linear-gradient(135deg, #f9a8d410, #db277740)',
        'linear-gradient(135deg, #6ee7b710, #04785740)',
        'linear-gradient(135deg, #fde68a10, #ca8a0440)',
        'linear-gradient(135deg, #fca5a510, #b91c1c40)',
        'linear-gradient(135deg, #93c5fd10, #2563eb40)',
    ];

    const borderColors = [
        '#6366f140',
        '#a21caf40',
        '#db277740',
        '#04785740',
        '#ca8a0440',
        '#b91c1c40',
        '#2563eb40',
    ];

    const iconColors = [
        '#6366f1',
        '#a21caf',
        '#db2777',
        '#047857',
        '#ca8a04',
        '#b91c1c',
        '#2563eb',
    ];

    const loadAllResumes = React.useCallback(() => {
        setAllResumes(dummyResumeData);
    }, []);

    const createResume = async (e) => {
        e.preventDefault();
        setShowCreateResume(false);
        setTitle('');
        navigate(`/app/builder/res123`);
    };

    const updateResume = async (e) => {
        e.preventDefault();
        setShowUploadResume(false);
        setTitle('');
        setResume(null);
        navigate(`/app/builder/res123`);
    };

    const editTitle = async (e) => {
        e.preventDefault();
        setEditResumeId('');
        setTitle('');
    }
    const deleteResume = async (id) => {
        const confirmDelete = window.confirm("Are you want to delete this resume?");
        if (confirmDelete) {
            setAllResumes(prev => prev.filter(resume => resume._id !== id));
        }
    }
    React.useEffect(() => {
        loadAllResumes();
    }, [loadAllResumes]);

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <p className="text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
                    Welcome, Joe Doe
                </p>

                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={() => setShowCreateResume(true)}
                        className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                        <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />
                        <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">
                            Create Resume
                        </p>
                    </button>
                    <button
                        type="button"
                        onClick={() => setShowUploadResume(true)}
                        className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                        <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-purple-500 text-white rounded-full" />
                        <p className="text-sm group-hover:text-purple-600 transition-all duration-300">
                            Upload Resume
                        </p>
                    </button>
                </div>

                <hr className="border-slate-300 my-6 sm:w-[305px]" />

                <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
                    {allResumes.map((resume, idx) => {
                        const bgColor = bgColors[idx % bgColors.length];
                        const borderColor = borderColors[idx % borderColors.length];
                        const iconColor = iconColors[idx % iconColors.length];
                        return (
                            <button
                                onClick={() => navigate(`/app/builder/${resume._id}`)}
                                type="button"
                                key={resume.id || idx}
                                className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
                                style={{
                                    background: bgColor,
                                    borderColor: borderColor,
                                }}
                            >
                                <FilePenLineIcon
                                    className="size-7 group-hover:scale-105 transition-all"
                                    style={{ color: iconColor }}
                                />
                                <p
                                    className="text-sm group-hover:scale-105 transition-all px-2 text-center"
                                    style={{ color: bgColor }}
                                >
                                    {resume.title}
                                </p>
                                <p
                                    className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center"
                                    style={{ color: bgColor }}
                                >
                                    Updated on{' '}
                                    {resume.updatedAt
                                        ? new Date(resume.updatedAt).toLocaleDateString()
                                        : ''}
                                </p>
                                <div onClick={e => e.stopPropagation()} className="absolute top-1 right-1 group-hover:flex items-center hidden">
                                    <TrashIcon onClick={() => deleteResume(resume._id)} className="size-7 p-1.5 text-slate-600 hover:text-red-500 rounded transition-colors duration-300" />
                                </div>
                                <div onClick={e => e.stopPropagation()} className="absolute top-1 left-1 group-hover:flex items-center hidden">
                                    <PencilIcon onClick={() => { setEditResumeId(resume._id); setTitle(resume.title) }} className="size-7 p-1.5 text-slate-600 hover:text-blue-500 rounded transition-colors duration-300" />
                                </div>
                            </button>
                        );
                    })}
                </div>

                {showCreateResume && (
                    <form
                        onSubmit={createResume}
                        onClick={() => setShowCreateResume(false)}
                        className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 flex items-center justify-center z-50"
                        autoComplete="off"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-50 border p-6 rounded-lg shadow-md w-full max-w-sm relative"
                        >
                            <h2 className="text-xl font-bold mb-4">Create New Resume</h2>

                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                type="text"
                                placeholder="Resume Title"
                                className="w-full border border-slate-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                                required
                            />

                            <button
                                type="submit"
                                className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                            >
                                Create Resume
                            </button>
                            <XIcon
                                onClick={() => {
                                    setShowCreateResume(false);
                                    setTitle('');
                                }}
                                className="size-6 absolute top-4 right-4 text-slate-600 hover:text-slate-800 cursor-pointer transition-colors"
                            />
                        </div>
                    </form>
                )}


                {showUploadResume && (
                    <form
                        onSubmit={updateResume}
                        onClick={() => setShowUploadResume(false)}
                        className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 flex items-center justify-center z-50"
                        autoComplete="off"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-50 border p-6 rounded-lg shadow-md w-full max-w-sm relative"
                        >
                            <h2 className="text-xl font-bold mb-4">Upload Resume</h2>

                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                type="text"
                                placeholder="Resume Title"
                                className="w-full border border-slate-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                required
                            />

                            <div>
                                <label htmlFor="resume-input" className="block text-sm text-slate-700">
                                    Upload Resume File
                                    <div
                                        className="flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-amber-300 hover:text-amber-500 cursor-pointer transition-colors"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('resume-input')?.click();
                                        }}
                                        tabIndex={0}
                                        role="button"
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                document.getElementById('resume-input')?.click();
                                            }
                                        }}
                                    >
                                        {resume ? (
                                            <p className="text-green-600 ">{resume.name}</p>
                                        ) : (
                                            <>
                                                <UploadCloud className="size-14 stroke-1" />
                                                <p>Upload Resume</p>
                                            </>
                                        )}
                                    </div>
                                </label>
                                <input
                                    type="file"
                                    id="resume-input"
                                    className="hidden"
                                    accept=".pdf"
                                    onChange={(e) =>
                                        setResume(e.target.files && e.target.files[0] ? e.target.files[0] : null)
                                    }
                                    tabIndex={-1}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors"
                            >
                                Upload Resume
                            </button>
                            <XIcon
                                onClick={() => {
                                    setShowUploadResume(false);
                                    setTitle('');
                                    setResume(null);
                                }}
                                className="size-6 absolute top-4 right-4 text-slate-600 hover:text-slate-800 cursor-pointer transition-colors"
                            />
                        </div>
                    </form>
                )}

                {editResumeId && (
                    <form
                        onSubmit={editTitle}
                        onClick={() => setEditResumeId('')}
                        className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 flex items-center justify-center z-50"
                        autoComplete="off"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-50 border p-6 rounded-lg shadow-md w-full max-w-sm relative"
                        >
                            <h2 className="text-xl font-bold mb-4">Edit Resume Title</h2>

                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                type="text"
                                placeholder="Resume Title"
                                className="w-full border border-slate-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                                required
                            />

                            <button
                                type="submit"
                                className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                            >
                                Update Resume
                            </button>
                            <XIcon
                                onClick={() => {
                                    setEditResumeId('');
                                    setTitle('');
                                }}
                                className="size-6 absolute top-4 right-4 text-slate-600 hover:text-slate-800 cursor-pointer transition-colors"
                            />
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
