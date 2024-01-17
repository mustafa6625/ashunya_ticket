import { faker } from "@faker-js/faker";
import moment from "moment";
export const __CommonGridData = {
  gridColumns: [
    {
      field: "loan_acc",
      title: "Loan Acc",
      width: null,
    },
  ],
  columnData: [
    // {
    //     'loan_acc':'ODL-100219',
    //     'loan_info':'3454 West 48th Street',
    //     'next_due_date':'07-01-2022',
    //     'principal_balance':'$45,000.00',
    //     'account':'ODL-100219',
    //     'address':'1543 West 105th Street',
    //     'check_date':'05-28-2022',
    //     'check_no':'Print',
    //     'amount':'$427,4800',
    //     '1st_payment':'07-01-2022',
    //     'payoff_date':'07-01-2022',
    //     'original_loan':'$90,000.00',
    //     'loan_no':'James Bond 1328 Monique Court - Vista, CA 95484',
    //     'loan_amount':'$427,4800',
    //     'status':'pending',
    //     'action':'-',
    //     'report_or_workbook':'Lender Distribution Remittance Detail Report',
    //     'delivery_date':'Wed, 2 Feb 2022 01:00',
    //     'delivery_method':'Excel (Emailed Report)',
    //     'emails':'curtis.weaver@example.com',
    //     'next_report_run_on':'02-02-2022',
    //     'report_runs_left':'1',
    //     'disabled':'No',
    //     'receiver_name':'Kristin Watson',
    //     'user_email':'curtis.weaver@example.com',
    //     'time_sent':'Wed, 2 Feb 2022 01:00',
    //     'next_schedule':'02-02-2022',
    //     'lender_rec_id':'D7635048D',
    //     'street':'210 Springdale Avenue',
    //     'location':'0001008757-210 Springdale Avenue',
    //     'loan_rec_id':'C128368F64'
    // },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
    {
      loan_acc: "ODL-" + faker.finance.account(6),
      loan_info: faker.address.streetAddress(),
      next_due_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      principal_balance: faker.finance.amount(80000, 100000, 2, "$", true),
      account: "ODL-" + faker.finance.account(6),
      address: faker.address.streetAddress(),
      check_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      check_no: "Print",
      amount: faker.finance.amount(50000, 100000, 2, "$", true),
      "1st_payment": moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      payoff_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      original_loan: faker.finance.amount(80000, 150000, 2, "$", true),
      loan_no: faker.address.secondaryAddress(),
      loan_amount: faker.finance.amount(50000, 100000, 2, "$", true),
      status: "pending",
      action: "-",
      report_or_workbook: "Lender Distribution Remittance Detail Report",
      delivery_date: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      delivery_method: "Excel (Emailed Report)",
      emails: faker.internet.email(),
      next_report_run_on: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      report_runs_left: faker.mersenne.rand(5, 1),
      disabled: "No",
      receiver_name: "Kristin Watson",
      user_email: faker.internet.email(),
      time_sent: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      next_schedule: moment(
        faker.date.between(new Date(), moment(new Date()).add(1, "years"))
      ).format("MM-DD-yyyy"),
      lender_rec_id: faker.finance.account(6),
      street: faker.address.streetAddress(),
      location: faker.address.streetAddress(),
      loan_rec_id: faker.finance.account(6),
    },
  ],
};
