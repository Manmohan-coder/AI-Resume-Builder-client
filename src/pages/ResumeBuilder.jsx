import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dummyResumeData } from './../assets/assets';
import { ArrowLeftIcon, Briefcase, ChevronLeft, FileText, FolderIcon, GraduationCap, Sparkles, User } from 'lucide-react';


const ResumeBuilder = () => {
    const { resumeId } = useParams();
    const [resumeData, setResumeData] = useState({
        _id: '',
        title: '',
        personal_info: {},
        summary: '',
        experience: [],
        education: [],
        project: [],
        skills: [],
        templates: 'classic',
        accent_color: '#3B82F6',
        public: false,
        createdAt: '',
        updatedAt: ''
    })

    const loadExistingResume = async () => {
        const resume = dummyResumeData.find(resume => resume.id === resumeId)
        if (resume) {
            setResumeData(resume)
            document.title = `Editing Resume - ${resume.title}`
        }
    }
    const [activeSectionIndex, setActiveSectionIndex] = useState('personal_info');
    const [removeBackground, setRemoveBackground] = useState(false);

    const sections = [
        { id: 'personal_info', title: 'Personal Information', icon: User },
        { id: 'summary', title: 'Summary', icon: FileText },
        { id: 'experience', title: 'Experience', icon: Briefcase },
        { id: 'education', title: 'Education', icon: GraduationCap },
        { id: 'project', title: 'Projects', icon: FolderIcon },
        { id: 'skills', title: 'Skills', icon: Sparkles }
    ];

    const activeSection = Selection[activeSectionIndex]

    useEffect(() => {
        if (resumeId) {
            loadExistingResume();
        } else {
            document.title = 'Create New Resume'
        }
    }, [resumeId])
    return (
        <div>
            <div className='max-w-7xl mx-auto px-4 py-6'>
                <Link to={'/app'} className='inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all'>
                    <ArrowLeftIcon className='h-6 w-6 text-gray-600' /> Back to Dashboard
                </Link>
            </div>
            <div className='max-w-7xl mx-auto px-4 pb-8'>
                <div className='grid lg:grid-cols-12 gap-8'>
                    {/* left pannel form */}
                    <div className='relative lg:col-span-5 rounded-lg overflow-hidden'>
                        <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1'>
                            <hr className='absolute top-0 left-0 right-0 border-2 border-gray-200' />
                            <hr className='absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 border-none transition-all duration-2000' style={{ width: `${activeSectionIndex * 100 / (sections.length - 1)}%` }} />
                            {/* section Navigation */}
                            <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
                                <div>

                                </div>
                                <div className="flex items-center">
                                    {activeSectionIndex !== 0 && (
                                        <button
                                            className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all">
                                            <ChevronLeft className='size-4' /> Previous
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right pannel form */}
                    <div>
                        Right Pannel Form
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ResumeBuilder
