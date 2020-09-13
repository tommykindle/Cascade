

const state = {
    startingBalance: 400,
    endingBalance: 0,
    postedTransactions: [],
    pendingTransactions: [],
    transactions: [
        {
            OriginalTraceAuditNo: null,
            AccountNumber: "123456789",
            TransactionTypeId: "Debit",
            TransactionDate: "2020-08-28T03:36:33",
            BusinessDate: "2020-08-28T03:36:33",
            AvailableBalance: 400.00,
            Amount: 12.08,
            Description: "Other: POS Transaction",
            Billed: false,
            MerchantName: "Good Buy",
            MerchantId: "GbLV-01"
        },
        {
            OriginalTraceAuditNo: null,
            AccountNumber: "123456789",
            TransactionTypeId: "Debit",
            TransactionDate: "2020-08-28T03:50:01",
            BusinessDate: "2020-08-28T03:50:01",
            AvailableBalance: 400.00,
            Amount: 129.74,
            Description: "Other: POS Transaction",
            Billed: false,
            MerchantName: "Wally World",
            MerchantId: "WWV-000-1220"
        },
        {
            OriginalTraceAuditNo: null,
            AccountNumber: "123456789",
            TransactionTypeId: "Debit",
            TransactionDate: "2020-08-28T06:43:12",
            BusinessDate: "2020-08-28T06:43:12",
            AvailableBalance: 400.00,
            Amount: 8.08,
            Description: "Other: POS Transaction",
            Billed: true,
            MerchantName: "Quickly Gas Stop",
            MerchantId: "QGS-01"
        }],
    NotSettled: [{
        OriginalTraceAuditNo: null,
        AccountNumber: "123456789",
        TransactionTypeId: "Debit",
        TransactionDate: "2020-08-28T03:36:33",
        BusinessDate: "2020-08-28T03:36:33",
        AvailableBalance: 400.00,
        Amount: 12.08,
        Description: "Other: POS Transaction",
        MerchantName: "Good Buy",
        MerchantId: "GbLV-01"
    },
    {
        OriginalTraceAuditNo: null,
        AccountNumber: "123456789",
        TransactionTypeId: "Debit",
        TransactionDate: "2020-08-28T03:50:01",
        BusinessDate: "2020-08-28T03:50:01",
        AvailableBalance: 400.00,
        Amount: 129.74,
        Description: "Other: POS Transaction",
        MerchantName: "Wally World",
        MerchantId: "WWV-000-1220"
    }]
}


const getters = {
    allTransactions: (state) => state.transactions,
    startingBalance: (state) => state.startingBalance,
    endingBalance: (state) => state.endingBalance,
    allPostedTransactions: (state) => state.postedTransactions,
    allPendingTransactions: (state) => state.pendingTransactions


}

const actions = {
    calcEndingBalance({ commit }) {
        commit("endingBalance", state.endingBalance)
    },
    postedTransactionsCollection({ commit }) {
        commit("postedTransactions", state.transaction)
    }

}

const mutations = {
    endingBalance(state) {
        const sum = state.transactions.reduce((a, b) => {
            return a + b.Amount

        }, 0)

        state.endingBalance = (state.startingBalance - sum).toFixed(2)

    },
    postedTransactions(state) {
        state.transactions.filter(function (transaction) {
            if (transaction.Billed == true) {
                state.postedTransactions.push(transaction)
            } else {
                state.pendingTransactions.push(transaction)
            }

        })
    }


}

export default {
    state,
    getters,
    actions,
    mutations
}