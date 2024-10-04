import Family from "../models/family.js"
import User from "../models/user.js"


export const getDailyFamilyExpense = async (req, res) => {
    try {
        const userId = req.userId
        const { date } = req.body
        if (!date) {
            return res.status(400).json({ message: "invalid data" })
        }
    const family = await Family.findOne({ members: userId })
    if(!family){
        return res.status(400).json({ message: "Not Found" })
    }
    const dailyExpense = family.transactions.filter((item) => item.date === parseInt(date.split("-")[2]) && item.month === parseInt(date.split("-")[1]) && item.year === parseInt(date.split("-")[0]))
    
   
        if (dailyExpense.length === 0) {
            return res.status(400).json({ message: "Not Found" })
        }
        
        res.status(200).json({ dailyExpense })
    }
    catch (error) {
        console.log("error in getDailyExpense ", error)
        res.status(500).json({ message: "internal server error" })
    }
}