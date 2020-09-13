<template>
  <div>
    <container class="balance">
      <h2>Starting Balance: {{startingBalance}}</h2>
      <h1>Account Activity</h1>
      <h2>Ending Balance: {{endingBalance}}</h2>
    </container>
    <h2>Posted Transactions</h2>
    <div
      class="posted"
      v-for="transaction in allPostedTransactions"
      :key="transaction.TransactionDate"
    >
      <p>Account: {{transaction.AccountNumber}}</p>
      <p>Merchant: {{transaction.MerchantName}}</p>
      <p>Payment Type: {{transaction.TransactionTypeId}}</p>
      <p>Date: {{transaction.TransactionDate}}</p>
      <p>Amount: {{transaction.Amount}}</p>
    </div>
    <h2>Pending Transactions</h2>
    <div
      class="pending"
      v-for="transaction in allPendingTransactions"
      :key="transaction.TransactionDate"
    >
      <p>Account: {{transaction.AccountNumber}}</p>
      <p>Merchant: {{transaction.MerchantName}}</p>
      <p>Payment Type: {{transaction.TransactionTypeId}}</p>
      <p>Date: {{transaction.TransactionDate}}</p>
      <p>Amount: {{transaction.Amount}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Transactions",
  methods: {
    ...mapActions(["calcEndingBalance", "postedTransactionsCollection"])
  },
  computed: mapGetters([
    "allTransactions",
    "startingBalance",
    "endingBalance",
    "allPostedTransactions",
    "allPendingTransactions"
  ]),
  created() {
    this.calcEndingBalance();
    this.postedTransactionsCollection();
  }
};
</script>

<style scoped>
.balance {
  width: 100%;
  display: flex;
  flex: start;
  justify-content: space-between;
}
.posted {
  display: flex;
  align-items: center;
  width: 30%;
  border: 3px solid #075d35;
  border-radius: 6%;
  justify-content: center;
  flex-direction: column;
  margin-left: 35%;
  background-color: #ebce42;
}
.pending {
  display: flex;
  align-items: center;
  width: 30%;
  border: 3px solid #075d35;
  border-radius: 6%;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  margin-left: 35%;
  background-color: #ebce42;
}
</style>
