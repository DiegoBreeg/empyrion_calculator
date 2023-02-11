const item_name = document.querySelector("#item_name")
const amount = document.querySelector("#amount")
const response_container = document.querySelector("#response_container")

function format() {
    item_name.value = item_name.value.replaceAll(" ", "_")
}

async function autoComplete() {
    const response_json = await fetch("/items")
    const response = await response_json.json()
    const item_list = response.map((ell) => ell.item_name)
    let list = document.querySelector("#list")
    item_list.forEach((ell) => {
        let option = document.createElement('option')
        option.value = ell
        list.appendChild(option)
    })
}
autoComplete()

async function calculate() {
    if (!item_name.value)
        return alert("Wrong Item Name")
    const responseJson = await fetch(`/calculator?item_name=${item_name.value}&amount=${amount.value}`)
    const response = await responseJson.json()

    const table = response.map(item => {
        console.log(item)
        const tableRoll = `<tr>
                            <td>${item.item_name}</td>
                            <td>${item.yields}</td>  
                        </tr>`
        return tableRoll
    })

    response_container.innerHTML = `<table>
    <tr>
      <th>Item Name</th>
      <th>Amount</th>
    </tr>
        ${table.join()}    
  </table>`
}
