const saveData = (data) => {
    const str = JSON.stringify(data); // trasformo in una stringa (json sono tutte stringhe)
    localStorage.setItem("data", str);
};


const getData = () => {
const value = localStorage.getItem("data") || "" ; 
return JSON.parse(value); //ritrasformo in un oggetto js
} 

export { saveData, getData };