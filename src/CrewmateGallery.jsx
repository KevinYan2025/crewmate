const CrewmateGallery = ({ crewmates }) => {
    return (
      <div className="crewmateGallery">
        <h1>Your Crewmate Gallery!</h1>
        {crewmates ? (
          <ul>
            {crewmates.slice(1).map((crewmate, index) => (
              <li key={index}>
                <h3>Name of Crewmate: {crewmate.name}</h3>
                <h3>Speed of Crewmate: {crewmate.speed}</h3>
                <h3>Color of Crewmate: {crewmate.color}</h3>
                <button>Edit Crewmate</button>
                </li>
            ))}
          </ul>
        ) : (
          <p>No crewmates available.</p>
        )}
      </div>
    );
  };
  
  export default CrewmateGallery;
  