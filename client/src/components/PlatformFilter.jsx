
import { useState, useEffect } from "react";

export default function PlatformFilter({ onChange, initialSelected }) {
  const [selected, setSelected] = useState({
    codeforces: true,
    codechef: true,
    leetcode: true
  });
  
  useEffect(() => {
    if (initialSelected) {
      setSelected(initialSelected);
    }
  }, [initialSelected]);
  
  const handleToggle = (platform) => {
    const newSelected = {
      ...selected,
      [platform]: !selected[platform]
    };
    
    setSelected(newSelected);
    
    onChange(newSelected);
  };
  
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleToggle("codeforces")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          selected.codeforces 
            ? "bg-platforms-codeforces text-white" 
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        Codeforces
      </button>
      
      <button
        onClick={() => handleToggle("codechef")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          selected.codechef 
            ? "bg-platforms-codechef text-white" 
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        CodeChef
      </button>
      
      <button
        onClick={() => handleToggle("leetcode")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          selected.leetcode 
            ? "bg-platforms-leetcode text-white" 
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        LeetCode
      </button>
    </div>
  );
}
