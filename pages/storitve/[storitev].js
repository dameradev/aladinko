import React from "react";

import { useRouter } from "next/router";

const Storitev = () => {
  const router = useRouter();
  const { storitev } = router.query;
  return (
    <div>
      <h1>{storitev}</h1>
    </div>
  );
};

export default Storitev;
