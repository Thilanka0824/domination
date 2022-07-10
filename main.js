
//1.
function strikeThrough(){
    let strikeThru = document.querySelector('li'); //selects the first 'li' in your HTML
    //let strikeThru = document.querySelector('#arguments li') //selects the first 'li' from the #arguments list
    strikeThru.style.textDecoration = 'line-through' // strikethrough
}

strikeThrough()






//3.
/*
function setImage(id, url)
id: 'string'
url: 'string'

*/ 

function setImage(id, url){
    let img = document.querySelector(`#${id}`);
    img.src = url;
    img.style.height = '300px'
}

//4. 
setImage("image-1", "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80")
setImage("image-2", "https://cdn.vox-cdn.com/thumbor/MZRJnpwAMIHQ5-XT4FwNv0rivw4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19397812/1048232144.jpg.jpg")
setImage("image-3", "https://storage.googleapis.com/pod_public/1300/122734.jpg")



//5. & 6.
function removeListItem(){
    let myList = document.querySelector('li');
    myList.remove()
}

removeListItem()
removeListItem()

//7. & 8.
function setSizeText(strID, strFontSize){
    let id = document.querySelector(`${strID}`)
    id.style.fontSize = strFontSize;

}

setSizeText('#heading', "100px" )
setSizeText('h1', "30px" )


////===========================================================================
////===============================Part-2======================================

//1. 2.

function appendChild(element){
    let list = document.querySelector('#arguments');
    list.appendChild(element);
}

let img = document.createElement('img');
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_tDZ-vugRNPQ_5YhZpCGTgNudUc8W5pcBg&usqp=CAU'

//appendDomElement(newElement)



//3. 4.

function modifyImageHeight(imgURL){
    let image = document.querySelector('li');
    image.src = imgURL
}

let newImageElement = document.createElement('li');




//5. 
function goInvisible(id){
    
}













////===========================================================================
////===============================Part-3======================================
/*
textCreator(text)
1 parameter
text : string

return li //HTML element


*/

//1.
function textCreator(text){
    let listItem = document.createElement('li');
    listItem.innerText = text;
    return listItem;
}

let testItem = textCreator("Hi globe");

appendChild(testItem)

/*
2 strings



*/

function createHeader(hSize, text){
    let header = document.createElement(`h${hSize}`);
    header.innnerText = text;
    return header

}

let headerTest = createHeader('2', 'some text')
appendChild(headerTest)