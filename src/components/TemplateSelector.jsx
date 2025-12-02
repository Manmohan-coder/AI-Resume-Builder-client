import { Check, Layout } from 'lucide-react';
import React from 'react';

const TemplateSelector = ({ selectedTemplate, onChange }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const templates = [
        { id: 'classic', name: 'Classic', preview: "A clean, traditional resume format with clear selections and professional typography" },
        { id: 'modern', name: 'Modern', preview: "A sleek, contemporary design with bold headings and a focus on readability" },
        { id: 'minimal', name: 'Minimal', preview: "A simple, elegant layout with ample white space and understated design elements" },
        { id: 'minimal-image', name: 'Minimal with Image', preview: "A minimalist design that incorporates a profile image for a personal touch" }
    ];
    return (
        <div className='relative'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all text-sm px-3 py-2 rounded-lg border border-gray-300 w-full text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {templates.find(t => t.id === selectedTemplate)?.name || 'Select Template'}
                <Layout className='size-4 inline-block ml-2' />
                <span className='max-sm:hidden'>Template</span>
            </button>
            {isOpen && (
                <div className='absolute top-full w-xs p-3 mt-2 space-y-3 z-10 bg-white border border-gray-200 rounded-md shadow-sm'>
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            onClick={() => { onChange(template.id); setIsOpen(false); }}
                            className={`relative p-3 border rounded-md cursor-pointer transition-all ${selectedTemplate === template.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'}`}
                        >
                            {selectedTemplate === template.id && (
                                <div className="absolute top-2 right-2">
                                    <div className='size-5 bg-blue-400 rounded-full flex items-center justify-center'>
                                        <Check className='w-3 h-3 text-white' />
                                    </div>
                                </div>
                            )}
                            <div className='space-y-1'>
                                <h4 className='font-medium text-gray-800'>{template.name}</h4>
                                <div className='mt-2 p-2 bg-blue-50 rounded text-xs text-gray-500 italic'>{template.preview}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TemplateSelector;
