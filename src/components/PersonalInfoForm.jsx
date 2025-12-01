import React from 'react'
import { BriefcaseBusiness, Globe, Linkedin, Mail, MapPin, Phone, User } from 'lucide-react';

// The PersonalInfoForm component captures and updates personal info fields.
const PersonalInfoForm = ({
    data = {},
    onChange,
    removeBackground,
    setRemoveBackground
}) => {
    // Handles updating personal_info state on change
    const handleChange = (field, value) => {
        if (typeof onChange === "function") {
            onChange({
                ...data,
                [field]: value
            });
        }
    };

    // Field specifications for form mapping
    const fields = [
        {
            key: 'full_name',
            label: 'Full Name',
            icon: User,
            type: 'text',
            required: true
        },
        {
            key: 'email',
            label: 'Email Address',
            icon: Mail,
            type: 'email',
            required: true
        },
        {
            key: 'phone',
            label: 'Phone Number',
            icon: Phone,
            type: 'tel'
        },
        {
            key: 'location',
            label: 'Location',
            icon: MapPin,
            type: 'text'
        },
        {
            key: 'profession',
            label: 'Profession',
            icon: BriefcaseBusiness,
            type: 'text'
        },
        {
            key: 'linkedin',
            label: 'LinkedIn Profile',
            icon: Linkedin,
            type: 'url'
        },
        {
            key: 'website',
            label: 'portfolio/Website',
            icon: Globe,
            type: 'url'
        }
    ];

    return (
        <div>
            <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
            <p className="text-sm text-gray-600">Get Started with the Personal Information</p>
            <div className="flex items-center gap-2">
                <label>
                    {data.image ? (
                        <img
                            src={
                                typeof data.image === 'string'
                                    ? data.image
                                    : URL.createObjectURL(data.image)
                            }
                            alt="user-image"
                            className="w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300 hover:opacity-80"
                        />
                    ) : (
                        <div className="inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer">
                            <User className="size-10 p-2.5 border rounded-full" />
                            Upload User Image
                        </div>
                    )}
                    <input
                        type="file"
                        accept="image/jpeg, image/png"
                        className="hidden"
                        onChange={e =>
                            handleChange("image", e.target.files && e.target.files[0])
                        }
                        tabIndex={-1}
                    />
                </label>
                {typeof data.image === 'object' && (
                    <div className="flex flex-col gap-1 pl-4 text-sm">
                        <p>Remove Background</p>
                        <label className="relative inline-flex items-center gap-3 text-gray-900 hover:underline cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={removeBackground}
                                onChange={() =>
                                    typeof setRemoveBackground === "function"
                                        ? setRemoveBackground(prev => !prev)
                                        : undefined
                                }
                            />
                            <div className="w-9 h-5 bg-slate-300 rounded-full peer peer-checked:bg-green-600 transition-colors duration-200" />
                            <span className="dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4"></span>
                        </label>
                    </div>
                )}
            </div>
            {fields.map(field => {
                const Icon = field.icon;
                return (
                    <div key={field.key} className="space-y-1 mt-5">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <Icon className="size-4 text-gray-500" />
                            {field.label}
                            {field.required && <span className="text-red-500">*</span>}
                        </label>
                        <input
                            type={field.type}
                            value={data[field.key] || ""}
                            onChange={e => handleChange(field.key, e.target.value)}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                            placeholder={`Enter your ${field.label.toLowerCase()}`}
                            required={!!field.required}
                            autoComplete={
                                field.key === 'email'
                                    ? 'email'
                                    : field.key === 'phone'
                                    ? 'tel'
                                    : undefined
                            }
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default PersonalInfoForm;
