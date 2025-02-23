import React from "react";
import "./Dashboard.css";
//@ts-ignore
import { Chart } from "react-charts";

import img1 from "../../assets/img1.png";

const Dashboard = () => {
  const projectdata: {
    id: number;
    project: string;
    count: string;
    img: string;
    bgColor: string;
  }[] = [
    { id: 1, project: "Total Projects", count: "4", img: "", bgColor: "" },
    { id: 2, project: "Completed", count: "2", img: "", bgColor: "" },
    { id: 3, project: "Ongoing", count: "4", img: "", bgColor: "" },
    { id: 4, project: "Delayes", count: "1", img: "", bgColor: "" },
    { id: 5, project: "Employees", count: "6", img: "", bgColor: "" },
  ];

  const renderProjData = () => {
    return (
      <div className="ProjView">
        {projectdata.map((item) => {
          return (
            <div className="dasboardView">
              <p className="dasboardText">{item.count}</p>
              <p className="dasboardText">{item.project}</p>
            </div>
          );
        })}
      </div>
    );
  };

  const renderbudget = () => {
    const budgetdata: {
      id: number;
      budget: string;
      budgetHour: string;
      actualHours: string;
      totalBudget: string;
      profitability: string;
      name: string;
      count: string;
      img: string;
      bgColor: string;
    }[] = [
      {
        id: 1,
        budget: "Investment",
        budgetHour: "1000 sold hours",
        actualHours: "1.100",
        totalBudget: "70,000 $",
        profitability: "-25000 $",
        name: "versite",
        count: "4",
        img: "",
        bgColor: "",
      },
      {
        id: 2,
        budget: "Neo",
        budgetHour: "1000 hours over budget",
        actualHours: "1.100",
        totalBudget: "70,000 $",
        profitability: "4000 $",
        name: "versite",
        count: "2",
        img: "",
        bgColor: "",
      },
      {
        id: 3,
        budget: "VR website",
        budgetHour: "3000 sold hours",
        actualHours: "1.100",
        totalBudget: "70,000 $",
        profitability: "5000 $",
        name: "versite",
        count: "4",
        img: "",
        bgColor: "",
      },
      {
        id: 4,
        budget: "Socialme",
        budgetHour: "1200 sold hours",
        actualHours: "1.100",
        totalBudget: "70,000 $",
        profitability: "2500 $",
        name: "versite",
        count: "1",
        img: "",
        bgColor: "",
      },
      {
        id: 5,
        budget: "rever",
        budgetHour: "1000",
        actualHours: "1.100",
        totalBudget: "70,000 $",
        profitability: "25000 $",
        name: "versite",
        count: "6",
        img: "",
        bgColor: "",
      },
    ];
    return (
      <div className="budgetViewmain">
        {budgetdata.map((item) => {
          return (
            <div className="budgetView">
              <div className="imgAndname">
                <div>
                  <p>{item.budget}</p>
                  <p>{item.name}</p>
                </div>
                <img src={img1} alt="img" className="logoImg" />
              </div>
              <div className="bValuesdiv">
                <div className="bvalue">
                  <p className="btext">Total Budget</p>
                  <p className="btext">{item.totalBudget}</p>
                </div>
                <div className="bvalue">
                  <p className="btext">Profitability</p>
                  <p className="btext">{item.profitability}</p>
                </div>
                <div className="bvalue">
                  <p className="btext">Actual Hours {item.actualHours}</p>
                  <p className="btext">{item.budgetHour}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="mainDiv">
      {renderProjData()}
      <h3>Budget Status</h3>
      {renderbudget()}
    </div>
  );
};

export default Dashboard;
