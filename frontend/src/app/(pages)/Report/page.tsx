'use client';
import React, { useState, useRef } from 'react';
import { MdOutlineFileUpload } from "react-icons/md";
import { GoPaperclip } from "react-icons/go";
import Banner from './components/Banner';

// Change 1: Update the interface. affectedGarden is now a single string.
interface FormData {
  name: string;
  mobileNumber: string;
  concernTitle: string; 
  affectedGarden: string; // Was string[]
  description: string;
  acknowledgeSelection: boolean;
  attachedFile: File | null; 
}

const gardens = ["Plantation Grove", "Tengah Community Club", "Plantation Acres", "Garden Vale"];

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobileNumber: '',
    concernTitle: '',
    affectedGarden: '', // Change 2: Initial state is now an empty string.
    description: '',
    acknowledgeSelection: false,
    attachedFile: null, 
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // This function can now handle the 'affectedGarden' field as well.
  const handleInputChange = <Field extends keyof FormData>(field: Field, value: FormData[Field]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  // Change 3: The `toggleArrayItem` and `handleCheckboxArrayChange` functions are no longer needed and have been removed.

  const handleChooseFileClick = () => {
    fileInputRef.current?.click(); 
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 5 * 1024 * 1024) { 
        alert("File size exceeds the maximum limit of 5 MB."); 
        setFormData(prev => ({ ...prev, attachedFile: null })); 
        e.target.value = ''; 
      } else {
        setFormData(prev => ({ ...prev, attachedFile: selectedFile }));
      }
    }
  };

 const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      const dataToSubmit = new FormData();
      dataToSubmit.append('name', formData.name);
      dataToSubmit.append('mobileNumber', formData.mobileNumber);
      dataToSubmit.append('concernTitle', formData.concernTitle);
      dataToSubmit.append('description', formData.description);
      
      // Since it's a single string now, you just append it directly.
      dataToSubmit.append('affectedGarden', formData.affectedGarden);

      if (formData.attachedFile) {
        dataToSubmit.append('photos', formData.attachedFile);
      }
    
    // The rest of your submit logic remains the same
    try {
        const response = await fetch('/api/concerns', {
            method: 'POST',
            body: dataToSubmit,
        });
        const result = await response.json();
        if (!response.ok) {
            console.error("Server Error:", result.message); 
            throw new Error(result.message || 'Something went wrong');
        }
        console.log("Submission successful:", result);
        alert("Concern submitted successfully!");
        setFormData({
            name: '',
            mobileNumber: '',
            concernTitle: '',
            affectedGarden: '', // Reset to empty string
            description: '',
            acknowledgeSelection: false,
            attachedFile: null,
        });
        if(fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    } catch (err: any) {
        console.error("Submission Failed:", err);
        alert(`Submission Failed: ${err.message}`);
    }
  };

  return (
    <section>
      <Banner />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-md shadow-md">
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#293044]">
                Instructions
              </h2>
              <div className="text-[#445072] space-y-4">
                <p>
                  We welcome all users to share their thoughts with us, whether it's feedback, a discussion topic,
                  or a complaint, through our submission form. Your input helps us improve and build a better community together.
                  To submit, simply complete all required fields in the form. Submissions are reviewed regularly, and we may follow up with you if needed.
                </p>
              </div>
            </div>
            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* ... other form fields ... */}
              <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#445072]">
                    1. Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="e.g., John Teo"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A61C0] focus:border-[#4A61C0] bg-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#445072]">
                    2. Concern Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="e.g., Unfairing Allotment of Community Garden"
                    value={formData.concernTitle}
                    onChange={(e) => handleInputChange("concernTitle", e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A61C0] focus:border-[#4A61C0] bg-white"
                    required
                  />
                </div>
              <div className="space-y-2">
                <label htmlFor="mobileNumber" className="block text-sm font-medium text-[#445072]">
                  3. Mobile number <span className="text-red-500">*</span>
                </label>
                <input
                  id="mobileNumber"
                  type="tel"
                  placeholder="8123 4567"
                  value={formData.mobileNumber}
                  onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A61C0] focus:border-[#4A61C0] bg-white"
                  required
                />
              </div>

              {/* ========= START OF CHANGES FOR AFFECTED GARDEN ========= */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-[#445072]">
                  5. Affected Garden <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  {gardens.map(garden => (
                    <div key={garden} className="flex items-center space-x-3">
                      <input
                        id={`garden-${garden}`}
                        type="radio" // Changed from "checkbox"
                        name="affectedGarden" // Add a name to group the radio buttons
                        checked={formData.affectedGarden === garden} // Check if the state string matches this garden
                        onChange={() => handleInputChange("affectedGarden", garden)} // Use the generic handler
                        className="form-radio h-4 w-4 text-[#4A61C0] border-gray-300 focus:ring-[#4A61C0]"
                      />
                      <label htmlFor={`garden-${garden}`} className="text-sm text-[#445072]">
                        {garden}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {/* ========= END OF CHANGES FOR AFFECTED GARDEN ========= */}
              
              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium text-[#445072]">
                  6. Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={5}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4A61C0] focus:border-[#4A61C0] bg-white resize-none"
                  required
                ></textarea>
              </div>

              {/* ... other form fields ... */}
              <div className="border-t pt-8 space-y-4">
                <h3 className="text-lg font-medium text-[#445072]">Confirmation</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      id="acknowledgeSelection"
                      type="checkbox"
                      checked={formData.acknowledgeSelection}
                      onChange={(e) => handleInputChange("acknowledgeSelection", e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border border-gray-300
                        checked:bg-[#4A61C0] checked:border-transparent
                        focus:outline-none focus:ring-2 focus:ring-[#4A61C0]"
                    />
                    <label htmlFor="acknowledgeSelection" className="text-sm text-[#445072] leading-relaxed">
                      I acknowledge that my submission may be reviewed and followed up on if necessary,
                      and that not all submissions will receive a response.{" "}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full text-white py-4 text-lg font-medium rounded-lg hover:opacity-90 transition-opacity bg-[#4A61C0] hover:bg-[#3b4e9a]"
                >
                  Submit now
                </button>
              </div>
            </form>
            <div className="fixed bottom-6 right-6">
              <button
                type="button"
                className="rounded-full w-10 h-10 bg-white border border-gray-300 flex items-center justify-center"
              >
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}