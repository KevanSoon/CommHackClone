'use client';

import { BsFillQuestionSquareFill } from "react-icons/bs";
import { IoIosChatboxes } from "react-icons/io";
import { FaSort } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const ConcernsEducation = () => {
  return (
    <section>
      <div className="max-w-screen-2xl mx-auto w-full px-16 py-24">
        <div className="mb-12">
          <p className="text-[#454953] mb-2">Not sure how to share your concerns?</p>
          <h2 className="text-4xl font-bold text-[#2C2E34]">Here are the key steps</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <BsFillQuestionSquareFill className="text-white text-xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#2C2E34] mb-4">Share Your Concern</h3>
            <p className="text-[#454953] mb-4">
             📝 Fill out a simple form to submit your concern — whether it’s a maintenance issue, noise complaint, or suggestion. Add photos or location details to help clarify.
            </p>
            <p className="text-[#454953]">
              "No more lost messages — your voice starts here."
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <IoIosChatboxes className="text-white text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#2C2E34] mb-4">View & Track Your Submission</h3>
            <p className="text-[#454953] mb-4">
             📄 After submitting, your concern appears in your personal dashboard — along with a timestamp and summary. You can view all your past submissions in one place.
            </p>
            <p>"Stay informed, stay organized." </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <FaSort className="text-white text-lg" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#2C2E34] mb-4">Get Status Updates from Residential Network</h3>
            <p className="text-[#454953] mb-4">✅ Your concern is routed to the relevant Residential Network (RN) or official contact. As actions are taken — acknowledged, under review, resolved — you’ll get updates with clear status changes.</p>
            <div className="space-y-3 text-[#454953]">
              <p>"Know who’s handling it. See what’s happening. Be notified when it’s done."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConcernsEducation;