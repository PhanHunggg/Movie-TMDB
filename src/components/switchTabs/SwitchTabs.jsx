import React, { useState } from "react";
import "./switchTabs.scss";
export default function SwitchTabs({ data, onTabChange }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const renderTab = () => {
    return data.map((tab, index) => {
      return (
        <span
          onClick={() => activeTab(tab, index)}
          className={`tab_item ${selectedTab === index ? "active" : ""}`}
          key={index}
        >
          {tab}
        </span>
      );
    });
  };

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 3000);
    onTabChange(tab);
  };
  return (
    <div className="switching_tabs">
      <div className="tab_items">
        {renderTab()}
        <span className="moving_bg" style={{ left }}></span>
      </div>
    </div>
  );
}
