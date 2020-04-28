import React from "react";
import { useSelector } from "react-redux";
// import { Loader } from "react-loader-spinner";

export const LoadingIndicator = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);

  return (
    <>
      {isLoading && 
        <div>hey hey</div>
          // <Loader
          //   type="Puff"
          //   color="#00BFFF"
          //   height={100}
          //   width={100}
          //   timeout={3000} //3 secs
          // />
      }
    </>
  );
};
