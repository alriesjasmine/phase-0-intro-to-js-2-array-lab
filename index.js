// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(cat) {
    cats.push(cat)
}
function destructivelyPrependCat(cat) {
    cats.unshift(cat)
}
function destructivelyRemoveLastCat(cat) {
    cats.pop(cat)
}
function destructivelyRemoveFirstCat(cat) {
    cats.shift(cat)
}
function appendCat(cat) {
    const copyofappendCatSlice = cats.slice()
    copyofappendCatSlice.push(cat)
    return copyofappendCatSlice
}
function prependCat(cat) {
    const copyofprependCatSlice = cats.slice()
    copyofprependCatSlice.unshift(cat)
    return copyofprependCatSlice
}
function removeLastCat(cat) {
    const copyofremoveLastCatSlice = cats.slice()
    copyofremoveLastCatSlice.pop(cat)
    return copyofremoveLastCatSlice
}
function removeFirstCat(cat) {
    const CopyofremoveFirstCatSlice = cats.slice()
    CopyofremoveFirstCatSlice.shift(cat)
    return CopyofremoveFirstCatSlice
}