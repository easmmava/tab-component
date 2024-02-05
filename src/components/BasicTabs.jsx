import { useState } from "react";
import "./BasicTabs.css";

const tabData = [
  {
    id: 1,
    title: "title 1",
    content: "content 1",
  },
  {
    id: 2,
    title: "title 2",
    content: "content 2",
  },
  {
    id: 3,
    title: "title 3",
    content: "content 3",
  },
];

function BasicTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleActiveTab = (id) => {
    setActiveTab(id);
  };

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button className="button" onClick={() => setIsOpen((is) => !is)}>
        {isOpen === true ? (
          <div>click me to close tabs !</div>
        ) : (
          <div>click me to show tabs !</div>
        )}
      </button>
      {isOpen ? (
        <div className="tab">
          <div className="tab__header">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                className={activeTab === tab.id ? "active" : ""}
                onClick={() => handleActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="tab__content">{tabData[activeTab - 1].content}</div>
        </div>
      ) : (
        "closed."
      )}
    </div>
  );
}
export default BasicTabs;
