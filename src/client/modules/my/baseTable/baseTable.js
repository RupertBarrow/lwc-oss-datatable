import $ from "jquery"
import "datatables.net-select-bs5"

import { LightningElement, api } from "lwc"

import DATA from "./data.json"
const TITLE = "Datatables.net for LWC OSS"
const COLUMNS = [
  {
    title: "Name",
    data: "name",
  },
  { title: "Position", data: "position" },
  { title: "Office", data: "office" },
  { title: "Extn.", data: "extn" },
  { title: "Start Date", data: "start_date" },
  { title: "Salary", data: "salary" },
]

export default class BaseTable extends LightningElement {
  oDataTable
  tableOptions
  title = TITLE
  columns = COLUMNS
  data = DATA.data

  _rendered = false
  renderedCallback() {
    if (!this._rendered) {
      this._rendered = true
      this.initTable()
    }
  }

  initTable() {
    // Table
    let table = this.template.querySelector("table")
    this.oDataTable = $(table).DataTable({
      data: this.data,
      columns: this.columns,
      select: true,
    })

    // Display the table
    this.oDataTable.draw()

    // DEBUG Select
    console.log("### select()")
    this.oDataTable.row(":eq(0)", { page: "current" }).select()
    this.oDataTable.row(":eq(3)", { page: "current" }).select()
  }
}
