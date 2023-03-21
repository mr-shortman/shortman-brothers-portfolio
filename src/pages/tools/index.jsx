import Link from "next/link";
import React from "react";

function ToolsPage({ data }) {
  
  return (
    <div>
      <Link href="/tools/csgo/InventoryTracker">
        <button role={"link"} className="btn btn-primary">
          CS:GO Inventory Tool
        </button>
      </Link>
    </div>
  );
}

export default ToolsPage;