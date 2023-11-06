import { useState ,useEffect} from "react"


const CreateCrewmate = ({setCrewmates,crewmates}) => {
    const [name,setName]=useState(null)
    const [speed,setSpeed]=useState(null)
    const [color,setColor]=useState(null)
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleSpeedChange = (event) => {
        setSpeed(event.target.value)
    }
    const handleColorChange = (event ) => {
        setColor(event.target.value)
    }
    const handleSubmit = () => {
        event.preventDefault()
        setCrewmates((prevCrewmates) => [
            ...prevCrewmates,
            { name, speed, color },
          ]);
          setName('');
          setSpeed('');
          setColor('');
    }
    useEffect(() => {
        console.log(crewmates); // Log the updated crewmates array here
      }, [crewmates]);
    return(
        <>
            <div className="createCrewmate">
                <h1>Create a New Crewmate</h1>
                <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" alt="" className="crewmate" />
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={handleNameChange}></input>
                    </label>
                    <label>
                        Speed(mph):
                        <input type="text" name="speed" onChange={handleSpeedChange}></input>
                    </label>
                    <fieldset>
            <legend>Color:</legend>
            {['red', 'green', 'blue', 'purple', 'yellow', 'orange', 'pink'].map((c) => (
              <label key={c}>
                <input
                  type="radio"
                  name="color"
                  value={c}
                  onChange={handleColorChange}
                  checked={color === c}
                />{' '}
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </label>
            ))}
          </fieldset>
                    <label>
                        <input type="submit"  value="Create Crewmate" onClick={handleSubmit}/>
                    </label>
                </form>
            </div>
        </>
    )
}
export default CreateCrewmate

