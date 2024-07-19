// document.querySelector('#yell').addEventListener('click', run);
//  function run(){

//     const fName = document.querySelector('#firstName').value;
//     const mName = document.querySelector('#middleName').value;
//     const sName = document.querySelector('#secondName').value;
//     const lName = document.querySelector('#lastName').value;
    
//     document.querySelector('#yell').innerHTML= `${fName} 
//     ${mName}${sName}${lName}`
// }
document.querySelector('#yell').addEventListener('click', run);

function run() {
    const fName = document.querySelector('#firstName').value;
    const mName = document.querySelector('#middleName').value;
    const sName = document.querySelector('#secondName').value;
    const lName = document.querySelector('#lastName').value;

    document.querySelector('#yell').innerHTML = `${fName} ${mName} ${sName} ${lName}`;
}