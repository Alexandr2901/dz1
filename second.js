const dataFromMars = [{
        date: '1 июля 2020 г.',
        temperature: '-70,7 ° F',
        windspeed: '11,5 миль/ч',
        pressure: '766,9  ПА',
    },
    {
        date: '2 июля 2020 г.',
        temperature: '-69,6 ° F',
        windspeed: '10 миль/ч',
        pressure: '765  ПА',
    },
]

async function postData(data) {
    try {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    dataFromMars.push(data)
                    resolve()
                } catch (error) {
                    showError('error with data')
                }
            }, 1500)
        })
        const res = await promise
        return res
    } catch (error) {
        showError('Common error')
    }
}

async function getData() {
    setTimeout(() => {
        dataFromMars.forEach((dataFromMars) => {
            console.log(
                `${dataFromMars.date}, ${dataFromMars.temperature}, ${dataFromMars.windspeed}, ${dataFromMars.pressure}`
            )
        })
    }, 1000)

}

function addCart(data) {
    let inserted = null
    try {
        inserted = `<div class="card">
        <div >
            <img onclick="showInfo('` + data.date + `')" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/1024px-Infobox_info_icon.svg.png"/>
            дата:${data.date}
        </div>
        <div>
            температура:${data.temperature}
        </div>
        <div>
            скорость ветра:${data.windspeed}
        </div>
        <div>
            давление:${data.pressure}
        </div>
    </div>
    `
    } catch (error) {
        showError('error with adding card')
    }

    document.querySelector('.cardContainer').insertAdjacentHTML('beforeend', inserted)
}

function addCarts() {
    dataFromMars.forEach((item => {
        addCart(item)
    }))
}

function showError(message) {
    const switcher = 0
    switch (switcher) {
        case 0:
            alert(message)
            break;

        default:
            break;
    }
}

function showInfo(string) {
    let {
        date,
        ...otherData
    } = dataFromMars.find((item) => item.date === string)
    let obj = {
        date,
        otherData
    }
    console.log(obj);
}