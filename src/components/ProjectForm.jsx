import { Plus, Sparkles, Trash2 } from 'lucide-react';

const ProjectForm = ({ data, onChange }) => {
    const projectData = Array.isArray(data) ? data : [];

    const addProject = () => {
        const newProject = [
            ...projectData,
            { name: '', type: '', description: '' }
        ];
        onChange(newProject);
    };
    const removeProject = (index) => {
        const updated = projectData.filter((_, i) => i !== index);
        onChange(updated);
    };
    const updateProject = (index, field, value) => {
        const updated = [...projectData];
        updated[index] = { ...updated[index], [field]: value };
        onChange(updated);
    };
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                        Projects
                    </h3>
                    <p className="text-sm text-gray-500">
                        Add your projects here.
                    </p>
                </div>
                <button
                    onClick={addProject}
                    className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                    type="button"
                >
                    <Plus className="size-5 text-green-500" /> Add Project
                </button>
            </div>

            <div className="space-y-4">
                {projectData.map((project, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg p-4 mb-4 space-y-4"
                    >
                        <div className="flex justify-between items-center">
                            <h4 className="font-medium text-gray-800">
                                Project #{index + 1}
                            </h4>
                            <button
                                onClick={() => removeProject(index)}
                                className="text-red-500 text-sm hover:text-red-700 transition-colors"
                                type="button"
                            >
                                <Trash2 className="size-4" />
                            </button>
                        </div>
                        <div className="grid gap-3">
                            <input
                                value={project.name || ""}
                                onChange={e =>
                                    updateProject(index, 'name', e.target.value)
                                }
                                type="text"
                                placeholder="Project Name"
                                className="px-3 py-2 text-sm rounded-lg border border-gray-300 w-full"
                            />
                            <input
                                value={project.type || ""}
                                onChange={e =>
                                    updateProject(index, 'type', e.target.value)
                                }
                                type="text"
                                placeholder="Project Type"
                                className="px-3 py-2 text-sm rounded-lg border border-gray-300 w-full"
                            />
                        </div>
                        <div className='space-y-2'>
                            <div className='flex items-center justify-between'>
                                <label className='text-sm font-medium text-gray-700'>Project Description</label>
                                <button className='flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50'>
                                    <Sparkles className='w-3 h-3' />Enhance With AI</button>
                            </div>
                            <textarea
                                value={project.description || ""}
                                onChange={e =>
                                    updateProject(index, 'description', e.target.value)
                                }
                                rows={4}
                                placeholder="Project Description"
                                className=" px-3 py-2 text-sm rounded-lg border border-gray-300 w-full"
                            />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectForm