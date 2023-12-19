let handler = m => m

handler.all = async function (m) {
    let user = global.db.data.users[m.sender]
    if ((user.money * 1) > 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
    	let money = user.money-1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
        user.money = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
        user.bank += 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    } else if ((user.money * 1) < 0) {
        user.money = 0
    }
    if ((user.limit * 1) > Infinity) {
    	let limit = user.limit-Infinity
        user.limit = Infinity
        user.exp += limit * Infinity
    } else if ((user.limit * 1) < 0) {
        user.limit = 0
    }
    if ((user.health * 1) > 100) {
        user.health = 100
    } else if ((user.health * 1) < 0) {
        user.health = 0
    }
}

export default handler 
