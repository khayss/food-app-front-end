import React from "react";
import useGetRRiderApplications from "../../../../hooks/useGetRRiderApplications";

function RiderApplication() {
  const { error, data, loading } = useGetRRiderApplications();
  return <div></div>;
}

export default RiderApplication;
