import { useState } from "react";

const Select = () => {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { id: 1, label: "Tab" },
    { id: 2, label: "Table" },
    { id: 3, label: "Accordion" },
    { id: 4, label: "Spiner" },
  ];

  return (
    <div>
      <div className="select-container">
        <div className="select">
          <div>
            <button
              className={`select-icon ${open ? "active" : ""}`}
              onClick={() => setOpen((prev) => !prev)}
            >
              create
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-down "
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>

          <div className={`select-menu ${open ? "show" : ""}`}>
            <div>
              {menuItems.map((item) => (
                <div key={item.id} className="select-item">
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
