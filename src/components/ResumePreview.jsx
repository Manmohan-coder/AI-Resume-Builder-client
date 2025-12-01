import React from 'react';
import ClassicTemplate from './templates/ClassicTemplate';
import ModernTemplate from './templates/ModernTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import MinimalImageTemplate from './../assets/templates/MinimalImageTemplate';

// ResumePreview displays the selected resume template.
// The 'data' prop supplies resume information, 'template' selects the visual style,
// and 'removeBackground' is passed to templates supporting image background processing.
const ResumePreview = ({ data, template, removeBackground, classes = "" }) => {
    const renderTemplate = () => {
        switch (template) {
            case 'modern':
                return <ModernTemplate data={data} removeBackground={removeBackground} />;
            case 'creative':
                return <CreativeTemplate data={data} removeBackground={removeBackground} />;
            case 'minimal-image':
                return <MinimalImageTemplate data={data} removeBackground={removeBackground} />;
            default:
                return <ClassicTemplate data={data} removeBackground={removeBackground} />;
        }
    };

    return (
        <div className="w-full bg-gray-100">
            <div
                id="resume-preview"
                className={`border border-gray-200 print:shadow-none print:border-none ${classes}`}
            >
                {renderTemplate()}
            </div>
            <style>{`
                @page {
                    size: letter;
                    margin: 0;
                }
                @media print {
                    html, body {
                        width: 8.5in;
                        height: 11in;
                        overflow: hidden;
                    }
                    body * {
                        visibility: hidden;
                    }
                    #resume-preview, #resume-preview * {
                        visibility: visible;
                    }
                    #resume-preview {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: auto;
                        margin: 0;
                        padding: 0;
                        box-shadow: none !important;
                        border: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default ResumePreview;
