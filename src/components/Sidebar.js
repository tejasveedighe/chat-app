import React from 'react';
import DashboardToggle from './dashboard/DashboardToggle';

function Sidebar() {
  return (
    <div className="h-100 pt-2">
      <div>
        <DashboardToggle />
      </div>
      Bottom
    </div>
  );
}

export default Sidebar;
