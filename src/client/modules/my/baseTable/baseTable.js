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
    //let table = this.template.querySelector("table")
    // see https://datatables.net/forums/discussion/75457/cant-get-select-initialized#latest
    let container = this.template.querySelector("div")
    let table = $('<table lwc:dom="manual" class="tableCls slds-table slds-table_cell-buffer slds-table_bordered" style="width: 100%"></table>')
    table.appendTo(container)

    this.oDataTable = $(table).DataTable({
      data: this.data,
      columns: this.columns,
      select: true,
    })
    this.oDataTable.draw()
  }
}
