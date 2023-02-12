const item_name = document.querySelector("#item_name")
const output_count = document.querySelector('#output_count')
const input_items = document.querySelector('#input_items')

function format() {
    item_name.value = item_name.value.replaceAll(" ", "_")
}

async function register() {
    const output_reg = new RegExp(/^\d+$/)
    let needed = []

    if (!item_name.value)
        return alert("Wrong Item Name")
    if (!output_reg.test(output_count.value))
        return alert("Item Output must be a Number")

    input_items.value.split(",").forEach((ell) => {
        ell = ell.replaceAll(/(\s(?=\d))|((?<=\d)\s)/ig, "")
        let amount = ell.replaceAll(/[^0-9]/ig, "")
        let item_name = ell.replaceAll(/[^A-Za-z\s]/ig, "")
            .replaceAll(/\s/g, '_')
        needed.push({ item_name, amount })
    })

    let data = {
        item_name: item_name.value,
        output_count: output_count.value,
        input_items: needed
    }
    console.log(data)

    let response = await fetch('/items', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    response = await response.json()    
    alert(response.message)
    location.reload()
}


