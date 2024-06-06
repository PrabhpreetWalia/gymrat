import React, { useEffect, useState } from "react";
import "./Tracker.css";
import Btn from "./Btn";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  plugins,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  plugins
);

function Tracker({ token }) {
  const [heights, setHeights] = useState([]);
  const [weights, setWeights] = useState([]);
  const [heightLabels, setHeightLabels] = useState([]);
  const [weightLabels, setWeightLabels] = useState([]);

  const [visible, setVisible] = useState("height");
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [addValue, setAddValue] = useState();
  const [refresh, setRefresh] = useState(true);

  const [data, setData] = useState({
    labels: heightLabels,
    datasets: [
      {
        label: "Height",
        data: heights,
        backgroundColor: "blue",
        pointBorderColor: "blue",
        borderColor: "black",
      },
    ],
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/user/measurements`, {
      headers: {
        "x-access-token": token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.height && Array.isArray(data.height)) {
          setHeightLabels([]);
          setHeights([]);
          data.height.forEach((ele) => {
            var date = new Date(ele.date);
            setHeightLabels((prevLabels) => [
              ...prevLabels,
              `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`,
            ]);
            setHeights((prevHeights) => [...prevHeights, ele.measurement]);
          });
        }

        if (data.weight && Array.isArray(data.weight)) {
          setWeightLabels([]);
          setWeights([]);
          data.weight.forEach((ele) => {
            var date = new Date(ele.date);
            setWeightLabels((prevLabels) => [
              ...prevLabels,
              `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`,
            ]);
            setWeights((prevWeights) => [...prevWeights, ele.measurement]);
          });
        }
      });
  }, [refresh]);

  useEffect(() => {
    if (visible === "height") {
      setData({
        labels: heightLabels,
        datasets: [
          {
            label: "Height",
            data: heights,
            backgroundColor: "blue",
            pointBorderColor: "blue",
            borderColor: "black",
          },
        ],
      });
    } else {
      setData({
        labels: weightLabels,
        datasets: [
          {
            label: "Weight",
            data: weights,
            backgroundColor: "blue",
            pointBorderColor: "blue",
            borderColor: "black",
          },
        ],
      });
    }
  }, [visible, heights, weights, heightLabels, weightLabels]);

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        id: "weight-axis",
        type: "linear",
        ticks: {
          callback: function (value) {
            return value + (visible === "height" ? " cm" : " kg");
          },
        },
      },
    },
  };

  function handleAdd() {
    if (addValue === undefined || addValue <= 0) {
      alert("Value should be greater than 0");
      return;
    }

    fetch(`${process.env.REACT_APP_API_URL}/user/add`, {
      method: "POST",
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        measurement: visible,
        value: addValue,
      }),
    }).then((res) => {
      setRefresh(!refresh);
      setVisibleAdd(false);
    });
  }

  return (
    <>
      <div className="weight--container">
        <div className="btn--container">
          <Btn name="height" setVisible={setVisible} visible={visible} />
          <Btn name="weight" setVisible={setVisible} visible={visible} />

          <div className="add--container">
            <button
              onClick={() => {
                setVisibleAdd(!visibleAdd);
                setAddValue("");
              }}
              className={visibleAdd ? "tracker--btn tracker--active" : "tracker--btn"}
            >
              + Add Measurements
            </button>

            {visibleAdd && (
              <div className="add--box">
                <input
                  type="number"
                  placeholder={`Enter ${visible}...`}
                  value={addValue}
                  onChange={(e) => setAddValue(e.target.value)}
                />
                <button onClick={handleAdd}>Add</button>
              </div>
            )}
          </div>
        </div>
        <div className="line-chart">
          <Line data={data} options={options}></Line>
        </div>
      </div>
    </>
  );
}

export default Tracker;
