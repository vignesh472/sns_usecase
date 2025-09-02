import React from "react";
import agentsData from "../../../public/data/agentsData";
import { useParams,useNavigate } from "react-router-dom";
// Utility function to combine class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Button component
const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = {
    default: "bg-blue-600 text-white shadow hover:bg-blue-700",
    outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    link: "text-blue-600 underline-offset-4 hover:underline"
  };
  
  const sizeClasses = {
    default: "h-9 px-4 py-2",
    lg: "h-12 px-8 py-3 text-base"
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

// Card components
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border bg-white shadow-sm", className)}
    {...props}
  />
));

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
));

// Category Card Component
const CategoryCard = ({ category, onLearnMore, showCount = true }) => {
  // Calculate total count of agents in all subcategories
  const getTotalAgentCount = () => {
    if (!category.subCategories) return 0;
    return category.subCategories.reduce((total, subCat) => {
      return total + (subCat.agents ? subCat.agents.length : 0);
    }, 0);
  };

  // For industry categories, count direct agents
  const getIndustryAgentCount = () => {
    return category.agents ? category.agents.length : 0;
  };

  const agentCount = category.subCategories ? getTotalAgentCount() : getIndustryAgentCount();

  return (
    <div className="relative group0">
      {/* Outer container with padding to accommodate the number badge */}
      <div className="relative p-3">
       <Card className="flex flex-col h-full min-h-[420px] w-[110%] border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 rounded-2xl overflow-hidden">

          {/* Image/Icon Area */}
          <div className="h-40 sm:h-48 m-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
            {category.image && category.image !== "/placeholder.jpg" ? (
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-400 rounded"></div>
              </div>
            )}
          </div>

          <CardContent className="flex-1 flex flex-col -mt-6 justify-between p-4 sm:p-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 text-lg sm:text-xl leading-tight">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed leading-relaxed line-clamp-3">
                {category.description}
              </p>
            </div>

            <div className=" -ml-4">
              <Button
                variant="link"
                onClick={() => onLearnMore(category.id)}
                className="text-blue-600 hover:text-blue-800 p-0 h-auto font-medium text-sm sm:text-base"
              >
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Number Badge - positioned half outside the card */}
        {showCount && agentCount > 0 && (
          <div className="absolute top-5 right-0 z-20">
            <div className="bg-blue-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm sm:text-base font-bold shadow-lg border-2 border-white">
              {agentCount}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Category Grid Component
const CategoryGrid = ({ data, onLearnMore, showCounts = true, showExploreMore = true, initialShowCount = 6 }) => {
  const [showAll, setShowAll] = React.useState(false);
  
  // Combine functional and industry categories
  const allCategories = [
    ...(data.foundational || []),
    ...(data.industry || [])
  ];

  // Determine which categories to show
  const categoriesToShow = showAll ? allCategories : allCategories.slice(0, initialShowCount);
  const hasMoreCategories = allCategories.length > initialShowCount;

  const handleExploreMore = () => {
    setShowAll(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Grid of Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
        {categoriesToShow.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onLearnMore={onLearnMore}
            showCount={showCounts}
          />
        ))}
      </div>

      {/* Explore More Button */}
      {showExploreMore && hasMoreCategories && !showAll && (
        <div className="flex justify-center">
          <Button
            variant="default"
            size="lg"
            onClick={handleExploreMore}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore More
          </Button>
        </div>
      )}
    </div>
  );
};

// Sample data for demonstration


// Demo Component
export default function CategoryGridoverall() {
const navigate = useNavigate();
 
 let { category } = useParams();
  let selectedCategory;
if (category === "industry-specific-agents") {
  selectedCategory = { industry: agentsData.industry };
} else if (category === "foundation-agents") {
  selectedCategory = { foundational: agentsData.foundational };
} else {
  // fallback if no category param
  selectedCategory = { foundational: agentsData.foundational };
}

    const handleLearnMore = (categoryId) => {
         if(!category){
            category="foundation-agents"
        }
        navigate(`/agent-workbench/${category}/${categoryId}`);
        console.log(`Learning more about category: ${categoryId}`);
        // Handle navigation or modal opening here
    };
  return (
    <div className="min-h-screen lg:-mt-40 bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
      
        
        <CategoryGrid 
          data={selectedCategory} 
          onLearnMore={handleLearnMore}
          showCounts={true}
          showExploreMore={true}
          initialShowCount={6}
        />
      </div>
    </div>
  );
}