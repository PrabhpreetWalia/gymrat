import { useEffect, useState } from "react";
import Button from "./Button";
import "./exercise.css";
import Excercise from "./Excercise";

function Exercise() {
  const [active, setActive] = useState("cardio");
  const [result, setResult] = useState([]);

  async function fetchExercise(bodypart) {
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}?limit=10`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6c8d108cfemsh5eb14526f8009d5p10af3bjsn32aa256738af',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setResult(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchExercise(active);
  }, [active]);

  return (
    <>
      <div className="exercise--container">
        <div className="exercise--left">
          <Button
            name="cardio"
            active={active === "cardio"}
            setActive={setActive}
          />

          <Button
            name="back"
            active={active === "back"}
            setActive={setActive}
          />

          <Button
            name="chest"
            active={active === "chest"}
            setActive={setActive}
          />

          <Button
            name="shoulders"
            active={active === "shoulders"}
            setActive={setActive}
          />

          <Button
            name="neck"
            active={active === "neck"}
            setActive={setActive}
          />
        </div>

        <div className="exercise--right">
          {result.map((exercise, index) => (
            <Excercise
              exercise= {exercise}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;
