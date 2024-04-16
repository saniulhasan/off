import React, { useState } from 'react';
import './tab.css';
function tab() {
  // State to keep track of active tab
  const [activeTab, setActiveTab] = useState('tab1');

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab-buttons">
        {/* Button for Tab 1 */}
        <button onClick={() => handleTabChange('tab1')} className={activeTab === 'tab1' ? 'active' : ''}>Tab 1</button>
        
        {/* Button for Tab 2 */}
        <button onClick={() => handleTabChange('tab2')} className={activeTab === 'tab2' ? 'active' : ''}>Tab 2</button>
        
        {/* Add more buttons for additional tabs as needed */}
      </div>
      
      {/* Content for Tab 1 */}
      {activeTab === 'tab1' && (
        <div className="tab-content">
          Content of Tab 1
        </div>
      )}
      
      {/* Content for Tab 2 */}
      {activeTab === 'tab2' && (
        <div className="tab-content">
          Content of Tab 2
        </div>
      )}
      
      {/* Add more content sections for additional tabs as needed */}
    </div>
  );
}

export default tab;
