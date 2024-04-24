const dropZone = document.getElementById('dropZone');
const dragImage = document.getElementById('dragImage');

dropZone.addEventListener('dragover', dragOver);
dropZone.addEventListener('drop', drop);
dragImage.addEventListener('dragstart', dragStart);

function dragOver(event) {
    // Prevenir comportamiento predeterminado
  event.preventDefault(); 
}

function drop(event) {
    // Prevenir comportamiento predeterminado
  event.preventDefault(); 
  const file = event.dataTransfer.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    dropZone.innerHTML = `<img src="${e.target.result}" alt="Imagen Soltada">`;
  }
  reader.readAsDataURL(file);
  // Eliminar la imagen de la posición original
  dragImage.parentNode.removeChild(dragImage); 

}

function dragStart(event) {
    // Establecer datos a transferir
  event.dataTransfer.setData('text/plain', ''); 
}