$(document).ready(() => {
   const tarefas = [];

   $('form').on('submit', (e) => {
      e.preventDefault();

      let tarefaNome = $('#input-tarefa').val();
      let feito = $('#feito').is(':checked');

      
      if (tarefas.includes(tarefaNome)) {
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
         tarefas.push(tarefaNome);
         $('#input-tarefa').val('');
         $('#feito').prop('checked', false);
         
      }

   })
   $('#lista-tarefas').on('click', 'li', function() {
      if ($(this).hasClass('feito')) {
         $(this).removeClass('feito').addClass('nao-feito');
         $(this).find('span').text(' ❌');
      } else {
         $(this).removeClass('nao-feito').addClass('feito');
         $(this).find('span').text(' ✔️');
      }
   })

})