const item_name = document.querySelector("#item_name")
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

async function search() {
    if (!item_name.value)
        return alert("Wrong Item Name")
    const responseJson = await fetch(`/items/${item_name.value}`)
    const response = await responseJson.json()
    console.log(response)
}
