$(document).ready(() => {
   const tarefas = [];

   $('form').on('submit', (e) => {
      e.preventDefault();

      let tarefaNome = $('#input-tarefa').val();
      let feito = $('#feito').is(':checked');

      
      if (tarefas.includes(tarefaNome.value)) {
         alert('Tarefa ja inserida');
      }
      else {
         let tarefaItem = $('<li>').text(tarefaNome);
         let statusSpan = $('<span>').text(feito ? '- ✔️' : '- ❌');
         if (feito) {
            tarefaItem.addClass('feito');
         }
         else {
            tarefaItem.addClass('nao-feito');
         }
         tarefaItem.append(' ').append(statusSpan);

         $('#lista-tarefas').append(tarefaItem).append('<hr>');

         $('#input-tarefa').val('');
         $('#feito').prop('checked', false);
         tarefas.push(tarefaNome.value);
      }

   })

})