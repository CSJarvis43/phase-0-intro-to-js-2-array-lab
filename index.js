let cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

const destructivelyRemoveLastCat = () => cats.pop()

const destructivelyRemoveFirstCat = () => cats.shift()

function appendCat(name){
    const endCat = [...cats, name]
    return endCat
}

function prependCat(name){
    const startCat = [name, ...cats]
    return startCat
}

function removeLastCat(){
    const minuslast = (cats.slice(0, cats.length - 1))
    return minuslast
}

function removeFirstCat(){
    const minusFirst = (cats.slice(1, 3))
    return minusFirst
}