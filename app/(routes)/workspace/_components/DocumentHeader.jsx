import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import React from "react";

function DocumentHeader() {
  return (
    <div className="flex justify-between items-center p-3 px-7 shadow-md">
      <div></div>
      <OrganizationSwitcher
        afterLeaveOrganizationUrl={"/dashboard"}
        afterCreateOrganizationUrl={"/dashboard"}
        afterSelectOrganizationUrl={"/dashboard"}
        afterSelectPersonalUrl={"/dashboard"}
      />
      <div className="flex gap-2">
        <Button>Invite</Button>
        <UserButton />
      </div>
    </div>
  );
}

export default DocumentHeader;
