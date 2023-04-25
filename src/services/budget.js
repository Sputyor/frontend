import Axios from './dataservice'

export default {
    getExpensesByUserId(userId){
        return Axios.get(`/api/expenses/${userId}`)
    },
    createExpenses(){
        return Axios.post(`/api/expenses/create`)
    },
    updateExpenses(userId){
        return Axios.put(`/api/expenses/update/${userId}`)
    },
    deleteExpenses(userId){
        return Axios.delete(`/api/expenses//delete/${userId}`)
    },
    getIncomesByUserId(userId){
        return Axios.get(`/api/incomes/${userId}`)
    },
    createIncome(incomeData){
        return Axios.post(`/api/incomes/create`,incomeData)
    },
    updateIncomes(EditIncomeData,Id){
        return Axios.put(`/api/incomes/update/${Id}`,EditIncomeData)
    },
    deleteIncomes(userId){
        return Axios.delete(`/api/incomes/delete/${userId}`)
    },
    getByExpenseId(expenseId){
        return Axios.get(`/api/tagsExpenses/expense/${expenseId}`)
    },
    getTagById(id){
        return Axios.get(`/api/tags/${id}`)
    },
}