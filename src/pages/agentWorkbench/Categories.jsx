import React from "react";
import { Building2 } from "lucide-react";
import { useCategoryContext } from "./components/Sidebar.jsx"; // Import the context hook
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const { selectedSubtopic, activeCategory } = useCategoryContext();
  const navigate =useNavigate()

  // All categories data organized by category and subtopic
const allCategoriesData = {
  // Document & Knowledge Management subtopics
  "Document Retrieval": [
    {
      id: "docret-1",
      title: "Smart Document Finder",
      description: "AI-powered document search and retrieval system with semantic understanding.",
      count: 5,
    },
    {
      id: "docret-2",
      title: "Enterprise Search Engine",
      description: "Advanced search capabilities across multiple document repositories.",
      count: 8,
    },
    {
      id: "docret-3",
      title: "Document Indexing Service",
      description: "Automated indexing and categorization of document libraries.",
      count: 3,
    },
    {
      id: "docret-4",
      title: "Content Discovery Platform",
      description: "Intelligent content discovery with relevance scoring and recommendations.",
      count: 6,
    },
  ],
  "Knowledge Graphs": [
    {
      id: "kg-1",
      title: "Entity Relationship Mapper",
      description: "Build and visualize complex knowledge graphs from unstructured data.",
      count: 4,
    },
    {
      id: "kg-2",
      title: "Semantic Network Builder",
      description: "Create interconnected knowledge networks with semantic relationships.",
      count: 7,
    },
    {
      id: "kg-3",
      title: "Graph Analytics Engine",
      description: "Advanced analytics and insights from knowledge graph data.",
      count: 5,
    },
    {
      id: "kg-4",
      title: "Ontology Management System",
      description: "Manage and maintain organizational knowledge ontologies.",
      count: 3,
    },
  ],
  "Metadata Processing": [
    {
      id: "meta-1",
      title: "Automated Metadata Extractor",
      description: "Extract and process metadata from various document formats.",
      count: 6,
    },
    {
      id: "meta-2",
      title: "Metadata Standardization Tool",
      description: "Standardize metadata across different document sources.",
      count: 4,
    },
    {
      id: "meta-3",
      title: "Schema Validation Service",
      description: "Validate and ensure consistency of metadata schemas.",
      count: 3,
    },
    {
      id: "meta-4",
      title: "Metadata Enrichment Engine",
      description: "Enhance documents with additional contextual metadata.",
      count: 5,
    },
  ],
  // Summarization & Content Handling subtopics
  "Text Summarization": [
    {
      id: "sum-1",
      title: "AI Text Summarizer",
      description: "Generate concise summaries from long-form content using advanced NLP.",
      count: 8,
    },
    {
      id: "sum-2",
      title: "Multi-Document Summarizer",
      description: "Create unified summaries from multiple related documents.",
      count: 5,
    },
    {
      id: "sum-3",
      title: "Executive Summary Generator",
      description: "Produce executive-level summaries for business documents.",
      count: 4,
    },
    {
      id: "sum-4",
      title: "Key Points Extractor",
      description: "Extract and highlight key points from lengthy documents.",
      count: 6,
    },
  ],
  "Content Simplification": [
    {
      id: "simp-1",
      title: "Language Simplifier",
      description: "Convert complex text into easy-to-understand language.",
      count: 7,
    },
    {
      id: "simp-2",
      title: "Technical Content Translator",
      description: "Translate technical jargon into plain English.",
      count: 5,
    },
    {
      id: "simp-3",
      title: "Readability Optimizer",
      description: "Optimize content for different reading levels and audiences.",
      count: 3,
    },
    {
      id: "simp-4",
      title: "Content Accessibility Tool",
      description: "Make content accessible for users with different abilities.",
      count: 4,
    },
  ],
  // Business Intelligence & Analysis subtopics
  "Data Dashboards": [
    {
      id: "dash-1",
      title: "Executive Dashboard Suite",
      description: "Comprehensive dashboards for C-level executives and decision makers.",
      count: 9,
    },
    {
      id: "dash-2",
      title: "Real-time Analytics Board",
      description: "Live data visualization with real-time updates and alerts.",
      count: 6,
    },
    {
      id: "dash-3",
      title: "Custom KPI Tracker",
      description: "Customizable dashboards for tracking specific business metrics.",
      count: 4,
    },
    {
      id: "dash-4",
      title: "Interactive Data Explorer",
      description: "Self-service analytics platform for business users.",
      count: 7,
    },
  ],
  "Predictive Analytics": [
    {
      id: "pred-1",
      title: "Sales Forecasting Engine",
      description: "Predict future sales trends using machine learning algorithms.",
      count: 5,
    },
    {
      id: "pred-2",
      title: "Customer Behavior Predictor",
      description: "Analyze and predict customer behavior patterns.",
      count: 8,
    },
    {
      id: "pred-3",
      title: "Risk Assessment Tool",
      description: "Predictive risk analysis for business operations.",
      count: 3,
    },
    {
      id: "pred-4",
      title: "Market Trend Analyzer",
      description: "Identify and predict market trends and opportunities.",
      count: 6,
    },
  ],
  // Add more subtopics data as needed...
};


  // Default categories when no subtopic is selected
  const defaultCategoriesData = [
    {
      title: "Document & Knowledge Management",
      description: "Manage documents and knowledge with processing, retrieval, and maintenance.",
      count: 7,
    },
    {
      title: "Summarization & Content Handling",
      description: "Increased conversion by 32% with adaptive shopping agents",
      count: 7,
    },
    {
      title: "Business Intelligence & Analysis",
      description: "Insights, analytics, and forecasting.",
      count: 7,
    },
    {
      title: "Compliance & Security",
      description: "Ensure regulatory adherence, risk management, and system protection.",
      count: 7,
    },
  ];

  // Get the appropriate data to display
  const getDisplayData = () => {
    if (selectedSubtopic && allCategoriesData[selectedSubtopic]) {
      return allCategoriesData[selectedSubtopic];
    }
    return defaultCategoriesData;
  };

  const displayData = getDisplayData();
  const isSubtopicSelected = selectedSubtopic && allCategoriesData[selectedSubtopic];

  return (
    <div className="p-8 h-[842px] w-[1226px]">
      {/* Header with Icon */}
      

      {/* Categories Section Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {isSubtopicSelected ? `${selectedSubtopic} Agents` : "Categories"}
        </h2>
        <p className="text-sm text-gray-500">
          {isSubtopicSelected ? `Browse ${selectedSubtopic.toLowerCase()} specific agents` : "Browse relevant agents"}
        </p>
      </div>

      {/* Breadcrumb for subtopic selection */}
      {/* {isSubtopicSelected && (
        <div className="mb-6">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <span>{activeCategory}</span>
            <span>›</span>
            <span className="text-blue-600 font-medium">{selectedSubtopic}</span>
          </nav>
        </div>
      )} */}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {displayData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-sm transition-shadow"
          >
            {/* Image Placeholder with Badge */}
            <div className="h-40 w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl mb-5 relative">
              <span className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                {item.count}
              </span>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
              <button onClick={()=>navigate(`/agent-workbench/${item.title}/${item.title}/${item.id}/agents`)} className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>


      {/* No data message */}
      {isSubtopicSelected && !allCategoriesData[selectedSubtopic] && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Building2 className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No agents available yet
          </h3>
          <p className="text-gray-600">
            Agents for {selectedSubtopic} are coming soon. Check back later!
          </p>
        </div>
      )}
    </div>
  );
};

export default Categories;