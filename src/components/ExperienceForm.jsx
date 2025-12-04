import { Briefcase, Plus, Sparkles, Trash2 } from 'lucide-react'
import React from 'react'

const ExperienceForm = ({ data, onChange }) => {
    // Ensure data is an array
    const experienceData = Array.isArray(data) ? data : [];

    const addExperience = () => {
        const newExperience = [
            ...experienceData,
            { company: '', position: '', startDate: '', endDate: '', description: '',is_current:false }
        ];
        onChange(newExperience);
    };
    const removeExperience = (index) => {
        const updated = experienceData.filter((_, i) => i !== index);
        onChange(updated);
    };
    const updateExperience = (index, field, value) => {
        const updated = [...experienceData];
        updated[index] = { ...updated[index], [field]: value };
        onChange(updated);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                        Professional Experience
                    </h3>
                    <p className="text-sm text-gray-500">
                        Add your job experience here.
                    </p>
                </div>
                <button
                    onClick={addExperience}
                    className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                    type="button"
                >
                    <Plus className="size-5 text-green-500" /> Add Experience
                </button>
            </div>
            {experienceData.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                    <Briefcase className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <h5>No work experience added yet.</h5>
                    <p className="text-sm">Click "Add Experience" to get started.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {experienceData.map((experience, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg p-4 mb-4 space-y-4"
                        >
                            <div className="flex justify-between items-center">
                                <h4 className="font-medium text-gray-800">
                                    Experience #{index + 1}
                                </h4>
                                <button
                                    onClick={() => removeExperience(index)}
                                    className="text-red-500 text-sm hover:text-red-700 transition-colors"
                                    type="button"
                                >
                                    <Trash2 className="size-4" />
                                </button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-3">
                                <input
                                    value={experience.company || ""}
                                    onChange={e =>
                                        updateExperience(index, 'company', e.target.value)
                                    }
                                    type="text"
                                    placeholder="Company Name"
                                    className="px-3 py-2 text-sm rounded-lg border border-gray-300 w-full"
                                />
                                <input
                                    value={experience.position || ""}
                                    onChange={e =>
                                        updateExperience(index, 'position', e.target.value)
                                    }
                                    type="text"
                                    placeholder="Designation / Role"
                                    className="px-3 py-2 text-sm rounded-lg border border-gray-300 w-full"
                                />
                                <input
                                    value={experience.startDate || ""}
                                    onChange={e =>
                                        updateExperience(index, 'startDate', e.target.value)
                                    }
                                    type="month"
                                    placeholder="Start Date (e.g., Jan 2020)"
                                    className="px-3 py-2 text-sm rounded-lg border border-gray-300 w-full"
                                />
                                <input
                                    value={experience.endDate || ""}
                                    onChange={e =>
                                        updateExperience(index, 'endDate', e.target.value)
                                    }
                                    disabled={experience.is_current}
                                    type="month"
                                    placeholder="End Date (e.g., Dec 2022 or Present)"
                                    className="px-3 py-2 text-sm rounded-lg border border-gray-300 w-full disabled:bg-gray-100"
                                />
                            </div>
                            <label className='flex items-center gap-2'>
                                <input type="checkbox" checked={experience.is_current || false}
                                    onChange={(e) => { updateExperience(index, 'is_current', e.target.checked ? true : false) }} className='rounded border-gray-300 text-blue-600 focus:ring-blue-500' /><span className='text-sm text-gray-700'>Currently working here</span>
                            </label>
                            <div className='space-y-2'>
                                <div className='flex items-center justify-between'>
                                    <label className='text-sm font-medium text-gray-700'>Job Description</label>
                                    <button className='flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50'><Sparkles className='w-3 h-3' />Enhance With AI</button>
                                </div>
                                <textarea
                                    value={experience.description || ""}
                                    onChange={e =>
                                        updateExperience(index, 'description', e.target.value)
                                    }
                                    placeholder="Describe your responsibilities, achievements, technologies etc."
                                    rows={5}
                                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExperienceForm
