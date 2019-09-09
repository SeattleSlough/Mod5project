const coreUrl = 'http://localhost:3000/core_players'
const valueUrl = 'http://localhost:3000/player_values'
const statsUrl = 'http://localhost:3000/player_stats'

class Data {

static getCoreData = () => {
        return fetch(coreUrl)
            .then(res => res.json())
            .then(data => this.getValueData(data))
    }

static getValueData = (coreData) => {
    return fetch(valueUrl)
    .then(res => res.json())
    .then(data => this.getStatsData(coreData, data))
}

static getStatsData = (coreData, valueData) => {
    return fetch(statsUrl)
    .then(res => res.json())
    .then(data => this.createObject(coreData, valueData, data))
}

static createObject = (coreData, valueData, statsData) => {
    let objArray1 = []
    let objArray2 = []
    let objArray3 = []
    let playerIdArray = []

    coreData.map(obj => (
        playerIdArray.push(obj.player_id)
    ))

    for(let i = 0; i < playerIdArray.length; i++) {
        for(let j = 0; j < valueData.length; j++) {
            if(playerIdArray[i] == valueData[j].player_id) {
                objArray1.push(Object.assign({}, valueData[j]))    
            }
        }
    }
    for(let j = 0; j < objArray1.length; j++) {
            for(let k = 0; k < coreData.length; k++){
                if(objArray1[j].player_id == coreData[k].player_id) {
                    objArray2.push(Object.assign({}, objArray1[j], coreData[k]))
                }
            }
        } 
    for(let i = 0; i < objArray2.length; i++) {
        for(let j = 0; j < statsData.length; j++) {
            if(objArray2[i].player_id == statsData[j].player_id) {
                objArray3.push(Object.assign({}, objArray2[i], statsData[j]))
            }
        }
    }    
        console.log("array3", objArray3)
    }
    }

export default Data