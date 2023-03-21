import Link from "next/link";
import React from "react";

function ToolsPage({ data }) {
  return (
    <div>
      <Link href="/tools/csgo/InventoryInvest">
        <button role={"link"} className="btn btn-primary">
          csgo Inventory Tool
        </button>
      </Link>
    </div>
  );
}

export default ToolsPage;
