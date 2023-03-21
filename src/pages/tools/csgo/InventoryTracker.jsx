import React from "react";
import {Layout} from "../../../components"

function InventoryTracker() {
  return (
    <Layout>
      <div className=" text-white">
        <p>
        {`Welcome to the CS:GO Inventory Tracker. This is a tool to track you CS:GO inventory items.
      You can import your inventory by your steam profile  link (will not contain items in storage units) or uploading a CSV file `}
        </p>
      </div>
    </Layout>
  )
}

export default InventoryTracker;

// export function getServerSideProps() {
  
// }