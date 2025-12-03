import { Briefcase, Plus, Trash2 } from 'lucide-react'
import React from 'react'

const ExperienceForm = ({ data, onChange }) => {
    const addExperience = () => {
        // add a new experience entry
        const newExperience = [...data, { company: '', role: '', startDate: '', endDate: '', description: '' }];
        onChange(newExperience);
    }
    const removeExperience = (index) => {
        // remove a new experience entry
        const Update = data.filter((_, i) => i !== index);
        onChange(Update);
    }
    const updateExperience = (index, field, value) => {
        // remove a new experience entry
        const Update = [...data];
        Update[index] = { ...Update[index], [field]: value };
        onChange(Update);
    }
    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>
                        Professional Experience
                    </h3>
                    <p className='text-sm text-gray-500'>Add your job Exprience Here</p>
                </div>
                <button onClick={addExperience} className='flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors '>
                    <Plus className='size-5 text-purple-500' /> Add Experience
                </button>
            </div>
            {data.length === 0 ? (
                <div className='text-center py-8 text-gray-500'>
                    <Briefcase className='w-12 h-12 mx-auto mb-3 text-gray-300' />
                    <h5>No work experience added yet. </h5>
                    <p className='text-sm'>Click "Add Experience" to get started.</p>
                </div>
            ) : (
                <div className='space-y-4'>
                    {data.map((experience, index) => (
                        <div key={index} className='border border-gray-300 rounded-lg p-4 mb-4 space-y-4'>
                            <div className='flex justify-between items-center'>
                                <h4 className='font-medium text-gray-800'>Experience #{index + 1}</h4>
                                <button onClick={() => removeExperience(index)}
                                    className='text-red-500 text-sm hover:text-red-700 transition-colors'>
                                    <Trash2 className='size-4' />
                                </button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-3">
                                <input value={experience.company || ""} 
                                onChange={(e) => updateExperience(index, 'company', e.target.value)} 
                                type="text" placeholder='company name'
                                    className='px-3 py-2 text-sm rounded-lg' />
                                <input value={experience.position || ""} 
                                onChange={(e) => updateExperience(index, 'position', e.target.value)} 
                                type="text" placeholder='Desegination / Role'
                                    className='px-3 py-2 text-sm rounded-lg' />
                                <input value={experience.startDate || ""} 
                                onChange={(e) => updateExperience(index, 'start date', e.target.value)} 
                                type="text" placeholder='Start Date (e.g., Jan 2020)'
                                    className='px-3 py-2 text-sm rounded-lg' />
                            </div>
                        </div>
                    )
            }
                </div>
            )
            }

            export default ExperienceForm
