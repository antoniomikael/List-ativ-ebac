$(document).ready(()=> {
   
    $('header form button').click((e)=>{
        e.preventDefault();
        const inputTarefa = $('#input-tarefa').val();
        console.log(inputTarefa);
    })
})