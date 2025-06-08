import React from "react";
import { useParams } from "react-router";
import Details from "../../Components/Details";
import { exploreTour } from "../../assets/assets";

function DetailsPage() {
  // Get the tour id from the URL params
  const { id } = useParams();
  console.log(id);
  // const {id} = exploreTour[0].id
  // console.log(id);

  return (
    <div>
      {/* Pass the id as a prop to the Details component */}
      <Details tourId={id} />
    </div>
  );
}

export default DetailsPage;
