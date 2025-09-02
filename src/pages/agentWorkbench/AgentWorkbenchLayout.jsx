import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button"
import { Building2 } from "lucide-react";

import { useLocation ,useParams} from "react-router-dom";
const AgentWorkbenchLayout = () => {
     const { category } = useParams();
  const [selected, setSelected] = useState("Foundation Agents");
  const navigate = useNavigate();
// const [slug, setSlug] = useState("foundation-agents");

const handleClick = (option) => {
    let slug;
if(option==="Foundation Agents") {
    slug="foundation-agents"
} else if(option==="Industry-Specific Agents") {
    slug="industry-specific-agents"
}
 setSelected(option);

  navigate(`/agent-workbench/${slug}`, { state: { type: option.label } });
};

useEffect(() => {
    if(category==="foundation-agents") {
        setSelected("Foundation Agents")
    }
    else if(category==="industry-specific-agents") {
        setSelected("Industry-Specific Agents")
    }
}, [category]);
  const options = ["Foundation Agents", "Industry-Specific Agents"];
  return (
    <div className="min-h-screen w-full items-center flex flex-col">
      {/* Common Sidebar */}
      <section className="w-full bg-[linear-gradient(359deg,#ffffff_0%,_#e3ebff_100%)] h-[550px] relative">
        <div
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/img_67c0570ea854203522bca87aherobgpatternavif.png')" }}
        >
          <div className="w-full max-w-[1224px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center">
            <div className="flex flex-col gap-[10px] sm:gap-[40px] md:gap-[54px] justify-start items-center w-full text-center">
              {/* Main Heading */}
              <h1 className="text-[32px] sm:text-[48px] md:text-[50px] lg:text-[60px] font-sora font-semibold leading-[40px] sm:leading-[56px] md:leading-[72px] lg:leading-[80px] text-center text-global-1 w-full">
                <span className="text-global-1 font-manrope font-semi-bold mb-4">SNS <span className="text-[#1E63FF]">AGENTIC AI MARKETPLACE</span></span><br />

                <span className="text-global-1 font-manrope font-semi-bold">Explore <span className="text-[#1E63FF]">1500+ </span>Ready-to-Use AI Agents</span>
              </h1>
              <div className="flex space-x-4">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleClick(option)}
                    className={`rounded-[26px] px-6 py-[14px] text-base font-semibold border transition-all ${selected === option
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-black border-gray-300 hover:bg-gray-100"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

            </div>


          </div>
        </div>
      </section>
      <div className="justify-start flex gap-3">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <Building2 className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Foundational Categories
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Task-focused building blocks for extraction, summarization, routing, and orchestration.
          </p>
        </div>
      </div>

      {/* Dynamic Content */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AgentWorkbenchLayout;
