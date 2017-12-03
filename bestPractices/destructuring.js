
// Before -
let uniqueId= request.payload.uniqueId
let selectedItems = request.payload.selectedItems

// After -

let { uniqueId,selectedItems } = request.payload

// Much cleaner isn’t it?

