import { useState, useRef, useEffect } from 'react';
import './SectionTabs.css';

/**
 * SectionTabs — Reusable neumorphic tab component with smooth slide animations.
 *
 * @param {Array} tabs - Array of { id, label, icon: LucideComponent }
 * @param {string} defaultTab - ID of the tab to open by default
 * @param {Object} children - Object mapping tab IDs to React elements
 */
export default function SectionTabs({ tabs, defaultTab, children }) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedTab, setDisplayedTab] = useState(activeTab);
  const timeoutRef = useRef(null);

  const handleTabClick = (tabId) => {
    if (tabId === activeTab || isTransitioning) return;

    setIsTransitioning(true);

    // After exit animation completes, switch content
    timeoutRef.current = setTimeout(() => {
      setDisplayedTab(tabId);
      setActiveTab(tabId);
      setIsTransitioning(false);
    }, 250); // matches tabSlideOut duration
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div>
      {/* Tab Bar */}
      <div className="section-tabs-bar">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`section-tab-btn nm-flat ${activeTab === tab.id ? 'active' : ''}`}
            >
              {IconComponent && <IconComponent size={16} />}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="section-tab-panel">
        <div
          key={displayedTab}
          className={isTransitioning ? 'section-tab-content-exit' : 'section-tab-content'}
        >
          {children[displayedTab]}
        </div>
      </div>
    </div>
  );
}
