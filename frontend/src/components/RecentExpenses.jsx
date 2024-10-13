import { useContext } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { AllContext } from "../context/context";

export const RecentExpenses = (dailyExpense, showName) => {
  const context = useContext(AllContext);
    const date = new Date(context.date).getDate() + "-" + (new Date(context.date).getMonth()+1)  + "-" + new Date(context.date).getFullYear()
  return (
    <div className="flex flex-col rounded-xl border-2 border-border w-full p-6 bg-secondary  md:flex mt-8">
        <div className="flex justify-between">
      <strong className="text-3xl font-algerian  font-bold">
        Daily Expenses
      </strong>
      <strong className="text-xl font-algerian text-accent">{date}</strong>
      </div>
      <p className="text-lg mb-7 text-accent">
        Your latest financial activities
      </p>
      <div className="grid grid-cols-2 gap-4">
        {!dailyExpense.dailyExpense.message && dailyExpense.dailyExpense.map((data) => (
          <div className="mt-5 flex items-center px-4">
            <div className="w-[3.25rem] h-12 flex items-center justify-center bg-textcol rounded-full">
              <LiaRupeeSignSolid className="text-3xl text-secondary" />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex ml-4 flex-col">
                <p className="text-xl ">{data.description}</p>
                <p className="text-lg text-accent">{data.type} {context.isFamily ? "- " + data.name : ""}</p>
              </div>
              <div className="flex ml-4 items-end flex-col">
                <p className="text-xl ">{data.amount}</p>
                <p className="text-lg text-accent">{data.date}</p>
              </div>
            </div>
          </div>
        ))}
        
      </div>
      {context.dailyExpense.message && 
      <>
        <img src="https://res.cloudinary.com/dkhymc3li/image/upload/v1728726939/Screenshot_2024-10-12_152428-removebg-preview_i7en6v.png"  className="self-center h-1/4 w-1/4 content-center"/>
        <p className="text-2xl text-center font-algerian">Nothing Found</p>
        </>
        }
    </div>
  );
};