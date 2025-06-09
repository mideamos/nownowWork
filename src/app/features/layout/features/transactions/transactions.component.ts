import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';



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
  standalone: true,
  imports: [MatDatepickerModule, MatFormFieldModule, MatInputModule, CommonModule, FormsModule, MatIconModule ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class TransactionsComponent implements OnInit {
  showExportDropdown = false;
  @ViewChild('exportDropdown') exportDropdown!: ElementRef;

  activeTab: 'transaction' | 'settlement' = 'transaction';
  filterText: string = '';
  searchText: string = '';
  searchedTransaction: TransactionData[] = [];
  originalSearchTransactions: TransactionData[] = [];
  filteredtransactions: TransactionData[] = [];
  originaltransactions: TransactionData[] = [];

  startDate = new Date('05/14/2025');
  endDate = new Date('05/20/2025');
  picker: any; // Placeholder for datepicker reference
  // Date Range
  dateRange = {
    startDate: this.startDate,
    endDate: this.endDate
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

  applyFilter() {
  if (!this.filterText) {
    this.filteredtransactions = [...this.originaltransactions];
    return;
  }

    const searchText = this.filterText.toLowerCase();
    this.filteredtransactions = this.originaltransactions.filter(detail =>
      detail.acctName.toLowerCase().includes(searchText) ||
      detail.acctNum.includes(searchText) ||
      detail.merchantOrderID.includes(searchText) ||
      detail.tranRN.toString().includes(searchText) ||
      detail.tranStatus.toLowerCase().includes(searchText) ||
      detail.cardType.toLowerCase().includes(searchText) ||
      detail.country.toLowerCase().includes(searchText) ||
      detail.currency.toLowerCase().includes(searchText) ||
      detail.authCode.toLowerCase().includes(searchText) ||
      detail.time.toLowerCase().includes(searchText) ||
      detail.lst4Digit.includes(searchText) ||
      (detail.cardIssBank && detail.cardIssBank.toLowerCase().includes(searchText))
    );
  }

  applySearch() {
  if (!this.searchText) {
    this.searchedTransaction = [...this.originalSearchTransactions];
    return;
  }

    const searchText = this.searchText.toLowerCase();
    this.searchedTransaction = this.originalSearchTransactions.filter(detail =>
      detail.acctName.toLowerCase().includes(searchText) ||
      detail.acctNum.includes(searchText) ||
      detail.merchantOrderID.includes(searchText) ||
      detail.tranRN.toString().includes(searchText) ||
      detail.tranStatus.toLowerCase().includes(searchText) ||
      detail.cardType.toLowerCase().includes(searchText) ||
      detail.country.toLowerCase().includes(searchText) ||
      detail.currency.toLowerCase().includes(searchText) ||
      detail.authCode.toLowerCase().includes(searchText) ||
      detail.time.toLowerCase().includes(searchText) ||
      detail.lst4Digit.includes(searchText) ||
      (detail.cardIssBank && detail.cardIssBank.toLowerCase().includes(searchText))
    );
  }

    toggleExportDropdown() {
    this.showExportDropdown = !this.showExportDropdown;
    }

    @HostListener('document:click', ['$event'])
    onClick(event: MouseEvent) {
      if (!this.exportDropdown.nativeElement.contains(event.target)) {
        this.showExportDropdown = false;
      }
    }

    exportAs(format: 'pdf' | 'excel' | 'csv') {
      this.showExportDropdown = false;

      // Add your export logic here
      switch (format) {
        case 'pdf':
          this.exportToPDF();
          break;
        case 'excel':
          this.exportToExcel();
          break;
        case 'csv':
          this.exportToCSV();
          break;
      }
    }

    private exportToPDF() {
      console.log('Exporting to PDF');
      // Implement PDF export logic
    }

    private exportToExcel() {
      console.log('Exporting to Excel');
      // Implement Excel export logic
    }

    private exportToCSV() {
      console.log('Exporting to CSV');
      // Implement CSV export logic
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