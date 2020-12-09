import React, { useEffect } from "react";
import { navigate } from "gatsby";

import ConditionalLayout from "../components/ConditionalLayout";
import Image from "../components/Image";

const image = ({ location: { state } }) => {
  useEffect(() => {
    if (!state?.image) {
      navigate("/");
    }
  });
  return (
    <ConditionalLayout>
      <Image src={`${state?.image}.png`} />
    </ConditionalLayout>
  );
};

export default image;
