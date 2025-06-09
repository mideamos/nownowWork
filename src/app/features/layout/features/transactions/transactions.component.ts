import { Component, OnInit } from '@angular/core';

interface TransactionData {
  date: string;
  time: string;
  tranRN: string;
  acctName: string;
  acctNum: string;
  merchantOrderID: string;
  currency: string;
  transAmt: number;
  debCred: string;
  tranStatus: string;
  nowNowChrg: number;
  tranType: string;
  authCode: string;
  cardType: string;
  lst4Digit: string;
  cardIssBank: string;
  country: string;
  currencyType: string;
  convRate: number;
}

@Component({
  selector: 'app-bulk-payment2',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent implements OnInit {
  activeTab: 'transaction' | 'settlement' = 'transaction';
  dateRange = {
    startDate: '05/14/2025',
    endDate: '05/20/2025'
  };


  

  transactionData: TransactionData[] = [
    {
      date: '12-10-24',
      time: '10:15 AM',
      tranRN: '3490459',
      acctName: 'Wisdom',
      acctNum: '234589843',
      merchantOrderID: 'ORD1001',
      currency: 'NGN',
      transAmt: 1000,
      debCred: 'Debit',
      tranStatus: 'Successful',
      nowNowChrg: 20,
      tranType: 'Card',
      authCode: 'A182C3',
      cardType: 'Master Card',
      lst4Digit: '5436',
      cardIssBank: 'Interswitch',
      country: 'Spain',
      currencyType: 'Euros',
      convRate: 1600
    },
    {
      date: '12-10-24',
      time: '10:15 AM',
      tranRN: '3490459',
      acctName: 'Wisdom',
      acctNum: '234589843',
      merchantOrderID: 'ORD1001',
      currency: 'NGN',
      transAmt: 1000,
      debCred: 'Debit',
      tranStatus: 'Successful',
      nowNowChrg: 20,
      tranType: 'Card',
      authCode: 'A182C3',
      cardType: 'Master Card',
      lst4Digit: '5436',
      cardIssBank: 'Interswitch',
      country: 'Spain',
      currencyType: 'Euros',
      convRate: 1600
    },
    {
      date: '12-10-24',
      time: '10:15 AM',
      tranRN: '3490459',
      acctName: 'Wisdom',
      acctNum: '234589843',
      merchantOrderID: 'ORD1001',
      currency: 'NGN',
      transAmt: 1000,
      debCred: 'Debit',
      tranStatus: 'Successful',
      nowNowChrg: 20,
      tranType: 'Card',
      authCode: 'A182C3',
      cardType: 'Master Card',
      lst4Digit: '5436',
      cardIssBank: 'Interswitch',
      country: 'Spain',
      currencyType: 'Euros',
      convRate: 1600
    },
    {
      date: '12-10-24',
      time: '10:15 AM',
      tranRN: '3490459',
      acctName: 'Wisdom',
      acctNum: '234589843',
      merchantOrderID: 'ORD1001',
      currency: 'NGN',
      transAmt: 1000,
      debCred: 'Debit',
      tranStatus: 'Successful',
      nowNowChrg: 20,
      tranType: 'Card',
      authCode: 'A182C3',
      cardType: 'Master Card',
      lst4Digit: '5436',
      cardIssBank: 'Interswitch',
      country: 'Spain',
      currencyType: 'Euros',
      convRate: 1600
    },
    {
      date: '12-10-24',
      time: '10:15 AM',
      tranRN: '3490459',
      acctName: 'Wisdom',
      acctNum: '234589843',
      merchantOrderID: 'ORD1001',
      currency: 'NGN',
      transAmt: 1000,
      debCred: 'Debit',
      tranStatus: 'Successful',
      nowNowChrg: 20,
      tranType: 'Card',
      authCode: 'A182C3',
      cardType: 'Master Card',
      lst4Digit: '5436',
      cardIssBank: 'Interswitch',
      country: 'Spain',
      currencyType: 'Euros',
      convRate: 1600
    },
    {
      date: '12-10-24',
      time: '10:15 AM',
      tranRN: '3490459',
      acctName: 'Wisdom',
      acctNum: '234589843',
      merchantOrderID: 'ORD1001',
      currency: 'NGN',
      transAmt: 1000,
      debCred: 'Debit',
      tranStatus: 'Successful',
      nowNowChrg: 20,
      tranType: 'Card',
      authCode: 'A182C3',
      cardType: 'Master Card',
      lst4Digit: '5436',
      cardIssBank: 'Interswitch',
      country: 'Spain',
      currencyType: 'Euros',
      convRate: 1600
    },
    {
      date: '12-10-24',
      time: '10:15 AM',
      tranRN: '3490459',
      acctName: 'Wisdom',
      acctNum: '234589843',
      merchantOrderID: 'ORD1001',
      currency: 'NGN',
      transAmt: 1000,
      debCred: 'Debit',
      tranStatus: 'Successful',
      nowNowChrg: 20,
      tranType: 'Card',
      authCode: 'A182C3',
      cardType: 'Master Card',
      lst4Digit: '5436',
      cardIssBank: 'Interswitch',
      country: 'Spain',
      currencyType: 'Euros',
      convRate: 1600
    },
    {
      date: '12-10-24',
      time: '10:15 AM',
      tranRN: '3490459',
      acctName: 'Wisdom',
      acctNum: '234589843',
      merchantOrderID: 'ORD1001',
      currency: 'NGN',
      transAmt: 1000,
      debCred: 'Debit',
      tranStatus: 'Successful',
      nowNowChrg: 20,
      tranType: 'Card',
      authCode: 'A182C3',
      cardType: 'Master Card',
      lst4Digit: '5436',
      cardIssBank: 'Interswitch',
      country: 'Spain',
      currencyType: 'Euros',
      convRate: 1600
    }
  ];

  ngOnInit() {}

  setActiveTab(tab: 'transaction' | 'settlement') {
    this.activeTab = tab;
  }

  onDateRangeChange(event: any) {
    console.log('Date range changed:', event);
    // Implement date range filtering logic
  }

  onDownload() {
    console.log('Download report');
    // Implement download functionality
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'successful':
        return 'text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium';
      case 'failed':
        return 'text-red-600 bg-red-50 px-2 py-1 rounded-full text-xs font-medium';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full text-xs font-medium';
      default:
        return 'text-gray-600 bg-gray-50 px-2 py-1 rounded-full text-xs font-medium';
    }
  }
}