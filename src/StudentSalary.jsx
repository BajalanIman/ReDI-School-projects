import { useState } from "react";

const StudentSalary = () => {
  const students = [
    {
      name: "Iman",
      family: "Bajalan",
      country: "Iran",
      email: "bajalaniman@gmail.com",
      salary: 40000,
      photo:
        "https://media.licdn.com/dms/image/C4E03AQH_1kYuWyN2Tg/profile-displayphoto-shrink_800_800/0/1660405417575?e=2147483647&v=beta&t=x9wEmfzUKTPSHXL9KNxPJdgjEky_zE6S5LyT_Q5_I6A",
    },
    {
      name: "Patricia",
      family: "Payne",
      country: "The USA",
      email: "Patricia.Payne@gmail.com",
      salary: 49200,
      photo:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Robert ",
      family: "Mcgee",
      country: "Germany",
      email: "Robert.Mcgee@gmail.com",
      salary: 33000,
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RE0URcgNJQ--UWumzudsuQdIE7Lw5RCH24K9ERtWSssFrF8gpGf-liHyWXmnGyemvy8&usqp=CAU",
    },
    {
      name: "Ailliam ",
      family: "Willis",
      country: "Poland",
      email: "Ailliam.Willis@ak.de",
      salary: 17000,
      photo:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Mary",
      family: "May",
      country: "India",
      email: "Mary.May@yahoo.com",
      salary: 54000,
      photo:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];

  let changeColor = true;
  const [bgColor, setBgColor] = useState(changeColor);

  let NewStudent = students
    .sort((a, b) => a.salary - b.salary)
    .map((element, index) => (
      <div key={index} className="flex pb-3 w-[600px] justify-center">
        <div
          className={
            bgColor
              ? "flex border border-gray-300 p-2 rounded"
              : "flex border p-2 rounded bg-gray-600"
          }
        >
          <img
            src={element.photo}
            alt="image"
            key={element.index}
            className="w-10 h-10 rounded-full mr-6"
          />
          <div>
            <p key={element.index} className="w-44 flex justify-start">
              {element.name} {element.family}
            </p>
            <p
              key={element.index}
              className="w-44 text-[13px] text-gray-500 flex justify-start"
            >
              {element.email}
            </p>
          </div>

          <p
            key={element.index}
            className={
              element.salary > 20000
                ? "w-44 text-gray-900 flex justify-center items-center"
                : "w-44 text-gray-400 flex justify-center items-center"
            }
          >
            Salary: {element.salary.toLocaleString("en-US")} €
          </p>
          <p
            key={element.index}
            className="w-24 text-[16px] flex justify-center items-center"
          >
            {element.country}
          </p>
        </div>
      </div>
    ));

  const changeColorHandler = () => {
    if (bgColor === false) {
      setBgColor(true);
    }
    if (bgColor === true) {
      setBgColor(false);
    }
  };

  return (
    <div className="flex flex-col pl-5">
      <div className="flex justify-center max-w-[650px]">
        <button
          onClick={changeColorHandler}
          className="h-12 w-44 m-2 border border-black bg-gray-700 text-white rounded-xl hover:bg-gray-500 active:bg-cyan-900 hover:text-white"
        >
          Chenge color
        </button>
      </div>
      <div
        className={
          bgColor
            ? "pt-5 border border-gray-300 text-black max-w-[600px] flex flex-col justify-center items-center rounded shadow-lg"
            : "pt-5 border border-black text-white bg-gray-700 max-w-[600px] flex flex-col justify-center items-center rounded shadow-lg"
        }
      >
        <div>{NewStudent}</div>
      </div>
    </div>
  );
};
export default StudentSalary;
