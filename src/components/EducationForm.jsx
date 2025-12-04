import React from 'react'
import { GraduationCap, Plus, Trash2 } from 'lucide-react';

const EducationForm = ({ data, onChange }) => {
    const educationData = Array.isArray(data) ? data : [];

    const addEducation = () => {
        const newEducation = [
            ...educationData,
            { institution: '', degree: '', field: '', graduation_date: '', gpa: '' }
        ];
        onChange(newEducation);
    };
    const removeEducation = (index) => {
        const updated = educationData.filter((_, i) => i !== index);
        onChange(updated);
    };
    const updateEducation = (index, field, value) => {
        const updated = [...educationData];
        updated[index] = { ...updated[index], [field]: value };
        onChange(updated);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                        Education
                    </h3>
                    <p className="text-sm text-gray-500">
                        Add your education here.
                    </p>
                </div>
                <button
                    onClick={addEducation}
                    className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                    type="button"
                >
                    <Plus className="size-5 text-green-500" /> Add Education
                </button>
            </div>
            {educationData.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                    <GraduationCap className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <h5>No education added yet.</h5>
                    <p className="text-sm">Click "Add Education" to get started.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {educationData.map((education, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg p-4 mb-4 space-y-4"
                        >
                            <div className="flex justify-between items-center">
                                <h4 className="font-medium text-gray-800">
                                    Education #{index + 1}
                                </h4>
                                <button
                                    onClick={() => removeEducation(index)}
                                    className="text-red-500 text-sm hover:text-red-700 transition-colors"
                                    type="button"
                                >
                                    <Trash2 className="size-4" />
                                </button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-3">
                                <input
                                    value={education.institution || ""}
                                    onChange={e =>
                                        updateEducation(index, 'institution', e.target.value)
                                    }
                                    type="text"
                                    placeholder="Institution Name"
                                    className="px-3 py-2 text-sm rounded-lg border border-gray-300 w-full"
                                />
                                <input
                                    value={education.degree || ""}
                                    onChange={e =>
                                        updateEducation(index, 'degree', e.target.value)
                                    }
                                    type="text"
                                    placeholder="Degree/Certification"
                                    className="px-3 py-2 text-sm rounded-lg border border-gray-300 w-full"
                                />
                                <input
                                    value={education.field || ""}
                                    onChange={e =>
                                        updateEducation(index, 'field', e.target.value)
                                    }
                                    type="text"
                                    placeholder="Field of Study"
                                    className="px-3 py-2 text-sm rounded-lg border border-gray-300 w-full"
                                />
                                <input
                                    value={education.gpa || ""}
                                    onChange={e =>
                                        updateEducation(index, 'gpa', e.target.value)
                                    }
                                    type="text"
                                    placeholder="Marks / GPA"
                                    className="px-3 py-2 text-sm rounded-lg border border-gray-300 w-full"
                                />
                                <input
                                    value={education.graduation_date || ""}
                                    onChange={e =>
                                        updateEducation(index, 'graduation_date', e.target.value)
                                    }
                                    type="month"
                                    placeholder="Graduation Date"
                                    className="px-3 py-2 text-sm rounded-lg border border-gray-300 w-full disabled:bg-gray-100"
                                />
                            </div>
                            
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default EducationForm
