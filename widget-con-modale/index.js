/**
 * Wraps the document.querySelector method
 */
 const q = (selector) => document.querySelector(selector);

// render: renderizza i dato html inseriti in js
 const render = (container, items) => {
   const elements = items.map((element) => 
     `<li class="layer">
       <h3>${element.name}</h3>
       <p><strong>Phone:</strong> <a href="tel:${element.phone}">${element.phone}</a></p>
       <p><strong>Email:</strong> <a href="mailto:${element.email}">${element.email}</a></p>
     </li>`
   );
   
   const content = elements.sort().join('');
 
   container.innerHTML = content;
 }
 
 document.addEventListener('DOMContentLoaded', () => {
   const form = q('.form1');
   const input = q('.form1 input');
   const list = q('ul');

   const form2 = q('.form2');
   const input1 = q('#names');
   const input2 = q('#email');
   const input3 = q('#phone');
   
   render(list, data);
    
//    form.addEventListener('submit', (event) => {
//        event.preventDefault();

//        const value = input.value.toLowerCase(); //tutti i tag input hanno il value che ne legge e scrive il suo valore
       
    //      risultato che andrà inserito nel mio array - 
    //      filter ritorna sempre un array, se fallisce torna un array vuoto
    // const results = data.filter((element) => {

    //     se l'elemento nome nell'operazione del search mi ritorna 
    //     un valore maggiore di -1 allora metti il risultato nel mio arr del filtro*/
    //     posso concatenare le funzioni tra di loro in questo caso    
    //    
    // return element.name.toLowerCase().search(value) > -1
    // }); 


       //trasformo tutto in una riga sola

    input.addEventListener('keyup', (event) => {
        event.preventDefault();
 
        const value = input.value.toLowerCase();  

        const results = data.filter((element) => 
        element.name.toLowerCase().search(value) > -1 || 
        element.email.toLowerCase().search(value) > -1 
        ); 

        console.log(results);
        render(list, results);
   });

   // Esercizio: 
   // al widget concluso oggi aggiungere una seconda form che mi permette di creare un nuovo contatto alla lista esistente.

   // Questa form deve avere 3 campi di input per poter inserire nome, email e telefono e una volta premuto il pulsante di submit si dovrà 
   // creare un nuovo oggetto che verrà poi aggiunto all'array esistente con conseguente aggiornamento della visualizzazione in pagina.
      // AGGIUNGI INPUT ALLA LISTA
      form2.addEventListener('submit', (event) => {
        event.preventDefault();

        const newUser = {
          name: input1.value,
          phone: input3.value,
          email: input2.value
        }

        data.push(newUser);
        render(list, data);


        form2.reset();
        // oppure: enter.target.reset();  il reset è un metodo solo dei FORM     
      });


});








